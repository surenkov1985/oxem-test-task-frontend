import React from "react";
import { Loading } from "./Loading";

export const ButtonElem = ({ isLoading, text }) => {
	return (
		<button className="form__submit" disabled={isLoading}>
			<p className="form__submit-text">{isLoading ? <Loading /> : text}</p>
		</button>
	);
};
