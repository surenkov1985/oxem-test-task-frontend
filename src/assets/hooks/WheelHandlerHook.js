import { useDispatch } from "react-redux";

export const useWheelHandler = (stepVal, minVal, maxVal, actions) => {
	const dispatch = useDispatch();

	return (event) => {
        let value = parseInt(event.target.value);

		if (event.deltaY > 0) {
			dispatch(actions(value > minVal ? value - stepVal : value));
		} else {
			dispatch(actions(value < maxVal ? value + stepVal : value));
		}
	};

	
};
