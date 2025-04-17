import React from "react";

const Clock = () => {
	return (
		<>
			<svg
				width="24"
				height="24"
				viewBox="0 0 24 24"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					fillRule="evenodd"
					clipRule="evenodd"
					d="M12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4ZM2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12Z"
					fill="black"
				/>
				<path
					fillRule="evenodd"
					clipRule="evenodd"
					d="M12 6C12.5523 6 13 6.44772 13 7V12C13 12.5523 12.5523 13 12 13H9C8.44772 13 8 12.5523 8 12C8 11.4477 8.44772 11 9 11H11V7C11 6.44772 11.4477 6 12 6Z"
					fill="black"
				/>
			</svg>
		</>
	);
};

export default Clock;
