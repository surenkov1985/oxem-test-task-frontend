import React from "react";

export const ResponceElem = ({ text, color }) => {
	return (
		<div className="resp" style={{ color: color, border: `1px solid ${color}` }}>
			{text}
		</div>
	);
};
