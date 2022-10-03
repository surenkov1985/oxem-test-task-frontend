import React from "react";

export const SumElem = ({title, value}) => {


    return (
		<div className="form__sum">
			<p className="form__range-title">{title}</p>
			<p className="form__sum-value">{value} &#8381;</p>
		</div>
	);
}