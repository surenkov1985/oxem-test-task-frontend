import React from "react";
import { Loading } from "./Loading";

export const ButtonElem = ({ isLoading, text }) => {
	return (
		<button className="form__submit" disabled={isLoading}>
			{isLoading ? <Loading /> : text}
		</button>
	);
};
