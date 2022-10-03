import { useDispatch } from "react-redux"


export const useRangeHandler = (actions) => {

    const dispatch = useDispatch()

    return (event) => {
        let value = parseInt(event.target.value.replace(/\s/g, ""));
		dispatch(actions(value));
    }
}