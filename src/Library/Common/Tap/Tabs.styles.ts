import styled from "styled-components";

export const TabsContainer = styled.div`
	display: flex;
	flex-direction: column;
	margin-top: 3rem;
	margin-bottom: 32px;
`;

export const TabList = styled.ul`
	display: flex;
	list-style: none;
	padding: 0;
	//margin: 0;
	padding-inline-end: 16px;
	border-bottom: 1px solid #dee2e6;
`;

export const TabItem = styled.li<{ active: boolean }>`
	margin-bottom: 32px;
	margin-inline-end: 16px;

	a {
		text-decoration: none;
		//padding: 0 15px;
		color: ${({ active }) => (active ? "#3259E8" : "#007bff")};
		// border: ${({ active }) => (active ? "1px solid #dee2e6" : "none")};

		border-bottom: ${({ active }) => (active ? "2px solid #4f29f3" : "1px solid transparent")};
		border-radius: ${({ active }) => (active ? "5px 5px 0 0" : "none")};
		cursor: pointer;

		&:hover {
			color: #0056b3;
		}

		label {
			color: ${({ active }) => (active ? "#3259E8" : "black")};
		}

		svg {
			path {
				fill: ${({ active }) => (active ? "#3259E8" : "black")};
			}
		}
	}
`;

export const TabContent = styled.div`
	padding: 15px;
	border: 1px solid #dee2e6;
	border-top: none;
`;
