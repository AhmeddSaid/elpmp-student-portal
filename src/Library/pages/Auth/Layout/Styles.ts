"use client";
import styled from "styled-components";

export const Shell = styled.div`
	display: flex;
	min-height: 100vh;
	height: auto;

	@media (max-width: 990px) {
		display: block;
	}
`;

export const Side = styled.section`
	padding: 2rem;
	display: flex;
	align-items: center;
	justify-content: center;
	background: linear-gradient(to top right, #4f29f3 0%, #6544f3 100%);
	flex: 1;
	width: 40%;

	@media (max-width: 990px) {
		display: none;
	}
`;

export const Child = styled.section`
	@media (min-width: 991px) {
		width: 60%;
	}
`;
