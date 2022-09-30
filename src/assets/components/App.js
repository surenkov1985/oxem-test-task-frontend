import React, { useState } from "react";
import {FaRubleSign} from "react-icons/fa"

export const App = () => {
	const [price, setPrice] = useState(3300000);
	const minPriceVal = 1000000;
	const maxPriceVal = 6000000;
	const stepPrice = 1000;
	const valuteSymbol = "₽".toUpperCase()

	const priceRangeHandler = (e) => {
		setPrice(e.target.value);
		console.log(e);
	};

	const priceInputHandler = (e) => {
		if (parseInt(e.target.value) >= maxPriceVal) {
			setPrice(maxPriceVal.toLocaleString("ru-RU"));
		} else if (parseInt(e.target.value) <= minPriceVal) {
			setPrice(minPriceVal);
		} else {
			setPrice(e.target.value);
		}
	};

	return (
		<div className="calc">
			<h1 className="calc__title">
				Рассчитайте стоимость автомобиля в лизинг
			</h1>
			<form className="calc__form form">
				<div className="form__range-container">
					<div className="form__range">
					<p className="form__range-title">Стоимость автомобиля</p>
					<div className="form__input-container">
						<div className="form__range-cont">
							<label className="form__range-label">
								<input
								className="form__input"
								type="text"
								value={price.toLocaleString("ru-RU")}
								onChange={priceInputHandler}
								onBlur={e =>{ setPrice(price.toLocaleString("ru-RU")); console.log(e.target.value);}}
							/> <FaRubleSign size={".8em"}/></label>
							<input
								className="form__range-input"
								type="range"
								min={minPriceVal}
								max={maxPriceVal}
								step={stepPrice}
								value={price}
								onChange={priceRangeHandler}
							/>
						</div>
					</div>
				</div>
				<div className="form__range">
					<p className="form__range-title">Первоначальный взнос</p>
					<div className="form__input-container">
						<div className="form__range-cont">
							<label className="form__range-label">
								<input
								className="form__input"
								type="text"
								value={price.toLocaleString("ru-RU")}
								onChange={priceInputHandler}
								onBlur={e =>{ setPrice(price.toLocaleString("ru-RU")); console.log(e.target.value);}}
							/> &#8381;</label>
							<input
								className="form__range-input"
								type="range"
								min={minPriceVal}
								max={maxPriceVal}
								step={stepPrice}
								value={price}
								onChange={priceRangeHandler}
							/>
						</div>
					</div>
					
				</div>
				<div className="form__range">
					<p className="form__range-title">Срок лизинга</p>
					<div className="form__input-container">
						<div className="form__range-cont">
							<label className="form__range-label">
								<input
								className="form__input"
								type="text"
								value={price.toLocaleString("ru-RU")}
								onChange={priceInputHandler}
								onBlur={e =>{ setPrice(price.toLocaleString("ru-RU")); console.log(e.target.value);}}
							/> &#8381;</label>
							<input
								className="form__range-input"
								type="range"
								min={minPriceVal}
								max={maxPriceVal}
								step={stepPrice}
								value={price}
								onChange={priceRangeHandler}
							/>
						</div>
					</div>
				</div>
				</div>
				<div className="form__control">
					{/* <div className="form__result"> */}
						<div className="form__sum" >
							<p className="form__range-title">Сумма договора лизинга</p>
							<p className="form__sum-value">233434 &#8381;</p>
						</div>
						<div className="form__pay">
							<p className="form__range-title">Ежемесячный платеж от</p>
							<p className="form__sum-value">233434 &#8381;</p>
						</div>
					{/* </div> */}
					<input className="form__submit" type="submit" value="Оставить заявку"/>
				</div>
				
				{/* <input type="range" min="1000000" max="6000000" /> */}
			</form>
		</div>
	);
};
