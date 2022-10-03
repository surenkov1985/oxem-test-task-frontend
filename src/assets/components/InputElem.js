import React from "react";
import { RangeElem } from "./RangeElem";

export const InputElem = (props) => {
	const { title, type, isDisabled, inputVal, name, inpCange, inpBlur, dataDisabled, dataActive, rangeProps, focusHandle, unit, unitClass } = props;

	return (
		<div className="form__range">
			<p className="form__range-title">{title}</p>
			<div className="form__input-container" data-disabled={dataDisabled} data-active={dataActive}>
				<div className="form__range-cont">
					<label className="form__range-label">
						<input
							className="form__input"
							type={type}
							disabled={isDisabled}
							value={inputVal}
							name={name}
							onFocus={(e) => focusHandle("active")}
							onChange={(e) => inpCange(e)}
							onBlur={(e) => inpBlur(e)}
						/>
						<div className={unitClass}>{unit}</div>
					</label>
					<RangeElem props={rangeProps} />
				</div>
			</div>
		</div>
	);
};
