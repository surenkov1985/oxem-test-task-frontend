import React from "react";

export const RangeElem = (props) => {
	const { rangeGrad, minVal, maxVal, step, val, wheelCange, rangeCange, isDisabled } = props.props;

	return (
		<input
			className="form__range-input"
			style={{
				background: `linear-gradient(90deg, rgb(255, 149, 20) ${rangeGrad}%, rgb(225, 225, 225) ${rangeGrad}%)`,
			}}
			type="range"
			min={minVal}
			max={maxVal}
			step={step}
			value={val}
			disabled={isDisabled}
			onWheel={wheelCange}
			onChange={rangeCange}
		/>
	);
};
