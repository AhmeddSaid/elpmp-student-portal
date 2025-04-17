import React from "react";
import styled from "styled-components";

const LabelStyle = styled.label`
	font-size: 0.875rem;
	display: inline-block;
	color: ${({ theme }) => theme.black500};
	font-weight: 600;
	line-height: 1.25rem;
	-webkit-margin-after: 0.5rem;
	margin-block-end: 0.25rem;
	vertical-align: baseline;
`;

const Label = ({ label }: { label: string }) => {
	return (
		<>
			<LabelStyle htmlFor={label}>{label}</LabelStyle>
		</>
	);
};

export default Label;
