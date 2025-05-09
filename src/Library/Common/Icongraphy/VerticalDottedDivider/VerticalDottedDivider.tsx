import React from "react";

const VerticalDottedDivider = () => {
	return (
		<>
			<svg width="1" height="32" viewBox="0 0 1 32" fill="none" xmlns="http://www.w3.org/2000/svg">
				<line
					x1="0.5"
					y1="0.5"
					x2="0.499999"
					y2="31.5"
					stroke="#A2ABB8"
					strokeLinecap="round"
					strokeDasharray="1 4"
				/>
			</svg>
		</>
	);
};

export default VerticalDottedDivider;
