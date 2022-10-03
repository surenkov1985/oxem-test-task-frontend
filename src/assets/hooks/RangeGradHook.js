import { useEffect, useState } from "react";

export const useRangeGrad = (val, minVal, maxVal) => {
	const [value, setValue] = useState(((val - minVal) / (maxVal - minVal)) * 100);

	useEffect(() => {
		setValue(((val - minVal) / (maxVal - minVal)) * 100);
	}, [val]);

	return value;
};
