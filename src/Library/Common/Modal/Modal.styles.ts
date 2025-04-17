import styled from "styled-components";

export const ModalOverlay = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background: rgba(0, 0, 0, 0.5);
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 9999999;
`;

export const ModalContent = styled.div`
	background: white;
	padding: 1rem;
	border-radius: 8px;
	max-width: 500px;
	width: 100%;
	z-index: 100000000;
`;
