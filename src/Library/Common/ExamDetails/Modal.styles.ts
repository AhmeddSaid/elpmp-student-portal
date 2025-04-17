import styled from "styled-components";

export const ContentWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-around;
	text-align: center;
	width: 100%;
	margin-top: 24px;
`;
export const InviteLink = styled.a`
	margin-top: 10px;
	padding: 0.8rem 0.5rem;
	background: #ffff;
	color: #000;
	border-radius: 10px;
	border: solid 1px #ddd;
	text-decoration: none;
	flex-grow: 1;
	position: relative;

	&:hover {
		background: #ddd;
	}
`;
export const CopyStatus = styled.p`
	margin-top: 10px;
	font-size: 14px;
	color: ${props => (props.children === "Link copied!" ? "green" : "red")};
`;
export const ModalTitle = styled.h2`
	margin-bottom: 16px;
	font-size: 16px;
	font-weight: 700;
	line-height: 24px;
`;
