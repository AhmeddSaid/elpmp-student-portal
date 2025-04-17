"use client";
import React from "react";
import styled from "styled-components";

const SeparatorShell = styled.div`
	background: var(--Border-border-primary, #c3c9d1);
	height: 0.0625rem;
	margin-block: var(--Spacing-spacing-07, 2rem);
`;

const Separator = () => {
	return <SeparatorShell />;
};

export default Separator;
