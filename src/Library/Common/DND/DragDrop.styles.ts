import styled from "styled-components";

export const ReceivableContainer = styled.div<{ isOver: boolean; isActive: boolean }>`
	//min-height: 10rem;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: flex-start;
	//border-radius: 10px;
	color: #000;
	margin-bottom: 1rem;
	position: relative;
	border-radius: 12px;
	border: 1px solid #b4a7f6 !important;
	background: var(--Surface-surface-secondary-muted, #f7f8fb);

	border: ${({ isActive }) => (isActive ? "1px solid var(--main-color, #4f29f3)" : "none")};
`;
export const DraggableItemContainer = styled.div`
	padding: 0.5rem;
	margin: 0.5rem;
	border-radius: 4px;
	transition:
		box-shadow 0.3s ease,
		border 0.3s ease;
	background-color: white;
`;
export const DragDropContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
	margin-top: 2rem;
	gap: 2rem;
	width: 100%;
`;

export const ReceivableContainerDesign = styled.div`
	margin-top: 3rem;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 1rem;
`;

export const NameContainer = styled.div`
	width: 100%;
	//text-align: center;
	margin-bottom: 1rem;
	//background-color: #e3e3e3;
	color: #000;
	padding: 0.5rem;
	//border-radius: 10px 10px 0 0;
	position: absolute;
	top: 20px;
	left: 24px;
	right: 0;

	//border-radius: 12px;
	//border: 1px solid var(--Border-border-info-muted, #b4a7f6);
	//background: var(--Surface-surface-secondary-muted, #f7f8fb);
`;

export const GivableContainer = styled.div`
	gap: 10px;
	width: 100%;
	height: 100%;
	padding: 20px;
	height: auto;
	border-radius: 10px;
	justify-content: center;
	//border: 1px solid red;
	z-index: 55555;
`;

export const DraggableDiv = styled.div<{
	statusss?: "unselected" | "selected" | "correct" | "wrong";
}>`
	cursor: pointer;
	//border-radius: 20px;
	padding: 20px 16px 20px 24px;
	width: 100%;
	background: var(--Surface-surface-elevation, #fff);
	border-radius: 12px;
	border: 1px dashed #b4a7f6 !important;
	//background: var(--Surface-surface-elevation, #fff);
	//background: teal;
	margin-bottom: 10px;
	// background: ${({ statusss }) => (statusss === "unselected" ? "#e3e3e3" : "transparent")};

	&:hover {
		background: ${({ statusss }) => (statusss === "unselected" ? "#e3e3e3" : undefined)};
	}
`;
export const DraggableContainer = styled.div<{
	isSelected: boolean;
	isDragged: boolean;
	isOver?: boolean;
}>`
	padding: 8px;
	border: 1px solid transparent;
	cursor: grab;
	${({ isSelected }) =>
		isSelected &&
		`
        border-color: color: var(--main-color, #4f29f3);
    `}
	${({ isDragged }) =>
		isDragged &&
		`
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
    `}
    ${({ isOver }) =>
		isOver &&
		`
        border-color: var(--main-color, #4f29f3);
        box-shadow: 0px 0px 10px rgba(0, 0, 255, 0.5);
    `}
`;
