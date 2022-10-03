import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLeasingDataMutation } from "../redux/apiReducer";
import { addInitial, addMonth, addPrice, addPercent, addMonthsPay, addLeasingCost } from "../redux/calcReducer";
import { InputElem } from "./InputElem";
import { SumElem } from "./SumElem";
import { ResponceElem } from "./ResponceElem";
import { ButtonElem } from "./ButtonElem";
import { useRangeGrad } from "../hooks/RangeGradHook";
import { useWheelHandler } from "../hooks/WheelHandlerHook";
import { useRangeHandler } from "../hooks/RangeHandlerHook";

export const App = () => {
	const dispatch = useDispatch();
	const {
		price,
		minPriceVal,
		maxPriceVal,
		stepPrice,
		percent,
		maxPercent,
		minPercent,
		stepPercent,
		initial,
		month,
		minMonth,
		maxMonth,
		stepMonth,
		rate,
		monthsPay,
		leasingCost,
	} = useSelector((state) => state.calc);

	const priceRangeGrad = useRangeGrad(price, minPriceVal, maxPriceVal);
	const initRangeGrad = useRangeGrad(percent, minPercent, maxPercent);
	const monthRangeGrad = useRangeGrad(month, minMonth, maxMonth);

	const [inputPrice, setInputPrise] = useState(price);
	const [initialPay, setInitialPay] = useState((price * percent) / 100);
	const [inputPay, setInputPay] = useState(monthsPay);
	const [monthVal, setMonthVal] = useState(month);
	const [leasingVal, setLaesingVal] = useState(leasingCost);

	const [error, setError] = useState("");
	const [resp, setResp] = useState("");

	const [dataDisabled, setDataDisabled] = useState("");
	const [priceActive, setPriceActive] = useState("");
	const [initialActive, setInitialActive] = useState("");
	const [monthActive, setMonthActive] = useState("");

	const [leasingFetch, { isLoading }] = useLeasingDataMutation();

	const valueReplace = (num, fs) => {
		const value = num.toString();
		fs(value.replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, "$1" + " "));
	};

	useEffect(() => {
		const pay = (price - initial) * (((rate / 100) * Math.pow(1 + rate / 100, month)) / (Math.pow(1 + rate / 100, month) - 1));
		const creditSum = initial + pay * month;

		dispatch(addLeasingCost(Math.ceil(creditSum)));
		dispatch(addInitial(Math.ceil((price * percent) / 100)));
		dispatch(addMonthsPay(Math.ceil(pay)));

		valueReplace(Math.ceil(pay), setInputPay);
		valueReplace((price * percent) / 100, setInitialPay);
		valueReplace(price, setInputPrise);
		valueReplace(Math.ceil(creditSum), setLaesingVal);

		setMonthVal(month);
	}, [percent, price, month, initial]);

	// ОБРАБОТЧИКИ СОБЫТИЙ //

	//// ИЗМЕНЕНИЕ СТОИМОСТИ ////

	const priceRangeHandler = useRangeHandler(addPrice);
	const priceWheelHandler = useWheelHandler(stepPrice, minPriceVal, maxPriceVal, addPrice);

	const priceInputHandler = (e) => {
		let priceVal = e.target.value.length === 0 ? 0 : parseInt(e.target.value.replace(/\s/g, ""));

		valueReplace(priceVal, setInputPrise);
	};

	const priceBlurHandler = (e) => {
		let priceVal = parseInt(e.target.value.replace(/\s/g, ""));

		if (priceVal >= maxPriceVal) {
			dispatch(addPrice(maxPriceVal));
		} else if (priceVal <= minPriceVal) {
			dispatch(addPrice(minPriceVal));
		} else {
			dispatch(addPrice(priceVal));
		}

		setPriceActive("");
	};

	//// ИЗМЕНЕНИЕ ПЕРВОНАЧАЛЬНОГО ВЗНОСА ////

	const percentRangeHandler = useRangeHandler(addPercent);
	const percentWheelHandler = useWheelHandler(stepPercent, minPercent, maxPercent, addPercent);

	const percentInputHandler = (e) => {
		let initialVal = parseInt(e.target.value.replace(/\s/g, ""));

		valueReplace(initialVal ? initialVal : 0, setInitialPay);
	};

	const percentBlurHandler = (e) => {
		let initialVal = parseInt(initialPay.replace(/\s/g, ""));

		if (initialVal >= (price * maxPercent) / 100) {
			dispatch(addInitial((price * maxPercent) / 100));
			dispatch(addPercent(maxPercent));
		} else if (initialVal <= (price * minPercent) / 100) {
			dispatch(addInitial((price * minPercent) / 100));
			dispatch(addPercent(minPercent));
		} else {
			dispatch(addInitial(initialVal));
			dispatch(addPercent((initialVal / price) * 100));
		}

		setInitialActive("");
	};

	//// ИЗМЕНЕНИЕ СРОКА ЛИЗИНГА ////

	const monthRangeHandler = useRangeHandler(addMonth);
	const monthWheelHandler = useWheelHandler(stepMonth, minMonth, maxMonth, addMonth);

	const monthInputHandler = (e) => {
		setMonthVal(e.target.value);
	};

	const monthBlurHandler = (e) => {
		if (parseInt(e.target.value) >= maxMonth) {
			dispatch(addMonth(maxMonth));
		} else if (parseInt(e.target.value) <= minMonth) {
			dispatch(addMonth(minMonth));
		} else if (e.target.value.length === 0) {
			dispatch(addMonth(1));
		} else {
			dispatch(addMonth(e.target.value));
		}

		setMonthActive("");
	};

	//// ОТПРАВКА ФОРМЫ ////

	const formSubmitHandler = (e) => {
		e.preventDefault();

		const fetchData = {
			price: price,
			initial: initial,
			months: month,
			leasingSum: leasingCost,
			monthsPay: monthsPay,
		};

		setDataDisabled("disabled");

		leasingFetch(JSON.stringify(fetchData))
			.unwrap()
			.then((data) => {
				setResp("Заявка отправлена");
				setTimeout(() => {
					setError("");
				}, 1500);
				setDataDisabled("");
			})
			.catch((err) => {
				setError(err.data);
				setTimeout(() => {
					setError("");
				}, 1500);
				setDataDisabled("");
			});
	};

	//// RangeElem Props ////

	const priceRangeProps = {
		rangeGrad: priceRangeGrad,
		minVal: minPriceVal,
		maxVal: maxPriceVal,
		step: stepPrice,
		val: price,
		isDisabled: isLoading,
		wheelCange: priceWheelHandler,
		rangeCange: priceRangeHandler,
	};

	const initialRangeProps = {
		rangeGrad: initRangeGrad,
		minVal: minPercent,
		maxVal: maxPercent,
		step: stepPercent,
		val: percent,
		isDisabled: isLoading,
		wheelCange: percentWheelHandler,
		rangeCange: percentRangeHandler,
	};

	const monthRangeProps = {
		rangeGrad: monthRangeGrad,
		minVal: minMonth,
		maxVal: maxMonth,
		step: stepMonth,
		val: month,
		isDisabled: isLoading,
		wheelCange: monthWheelHandler,
		rangeCange: monthRangeHandler,
	};

	/////////////////////////////////////

	return (
		<>
			{error && <ResponceElem text={error} color="#FF0000" />}
			{resp && <ResponceElem text={resp} color="#008000" />}
			<div className="calc">
				<h1 className="calc__title">Рассчитайте стоимость автомобиля в лизинг</h1>
				<form action="" method="POST" target="_parent" className="calc__form form" onSubmit={formSubmitHandler}>
					<div className="form__range-container">
						<InputElem
							title="Стоимость автомобиля"
							dataDisabled={dataDisabled}
							dataActive={priceActive}
							type="text"
							isDisabled={isLoading}
							inputVal={inputPrice}
							name="price"
							inpCange={priceInputHandler}
							inpBlur={priceBlurHandler}
							focusHandle={setPriceActive}
							rangeProps={priceRangeProps}
							unit="&#8381;"
							unitClass="form__unit-val"
						/>
						<InputElem
							title="Первоначальный взнос"
							dataDisabled={dataDisabled}
							dataActive={initialActive}
							type="text"
							isDisabled={isLoading}
							inputVal={initialPay}
							name="initial"
							inpCange={percentInputHandler}
							inpBlur={percentBlurHandler}
							focusHandle={setInitialActive}
							rangeProps={initialRangeProps}
							unit={percent + "%"}
							unitClass="form__unit-perc"
						/>
						<InputElem
							title="Срок лизинга"
							dataDisabled={dataDisabled}
							dataActive={monthActive}
							type="text"
							isDisabled={isLoading}
							inputVal={monthVal}
							name="month"
							inpCange={monthInputHandler}
							inpBlur={monthBlurHandler}
							focusHandle={setMonthActive}
							rangeProps={monthRangeProps}
							unit="мес."
							unitClass="form__unit-month"
						/>
					</div>
					<div className="form__control">
						<SumElem title="Сумма договора лизинга" value={leasingVal} />
						<SumElem title="Ежемесячный платеж от" value={initial === price ? 0 : inputPay} />
						<ButtonElem isLoading={isLoading} text="Оставить заявку" />
					</div>
				</form>
			</div>
		</>
	);
};
