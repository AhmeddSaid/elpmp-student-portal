import styled from "styled-components";

export const Container = styled.div`
	margin: 0 auto;
	padding: 20px;
	background-color: white;
	border-radius: 10px;
	border: 1px solid #ddd;
`;

export const Header = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 20px;
`;

export const Title = styled.h2`
	font-size: 24px;
	font-weight: bold;
`;

export const OptionGroup = styled.div`
	display: flex;
	align-items: center;
	margin-bottom: 20px;
`;

export const OptionDetails = styled.div`
	margin-left: 10px;
`;

export const OptionDescription = styled.p<{ unsubscribe: boolean }>`
	font-size: 14px;
	color: ${props => (props.unsubscribe ? "#ddd" : "#555")};
`;

export const SwitchContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-top: 30px;
	padding-top: 10px;
	border-top: 1px solid #eee;
`;

export const ToggleSwitch = styled.label`
	position: relative;
	display: inline-block;
	width: 60px;
	height: 34px;

	input {
		opacity: 0;
		width: 0;
		height: 0;
	}

	span {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background-color: #ccc;
		transition: 0.4s;
		border-radius: 34px;
		cursor: pointer;

		&:before {
			position: absolute;
			content: "";
			height: 26px;
			width: 26px;
			left: 4px;
			bottom: 4px;
			background-color: white;
			transition: 0.4s;
			border-radius: 50%;
		}
	}

	input:checked + span {
		background-color: #007bff;
	}

	input:checked + span:before {
		transform: translateX(26px);
	}
`;

export const ContentWrapper = styled.div<{ unsubscribe: boolean }>`
	color: ${props => (props.unsubscribe ? "#ddd" : "inherit")};
`;
