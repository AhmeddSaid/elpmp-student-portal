import { useDraggable } from "@dnd-kit/core";
import React from "react";
import { DraggableDiv } from "./DragDrop.styles";

const Draggable = ({
	id,
	content,
	isSelected,
	isDragged,
	onClick,
}: {
	id: string;
	content: React.ReactNode;
	isSelected: boolean;
	isDragged: boolean;
	onClick: () => void;
}) => {
	const { attributes, listeners, setNodeRef, transform } = useDraggable({
		id,
	});

	const style = {
		transform: transform ? `translate3d(${transform.x}px, ${transform.y}px, 0)` : undefined,
		// border: isSelected || isDragged ? "1px solid var(--main-color, #4f29f3)" : `1px solid #e3e3e3`,
		// boxShadow: isSelected || isDragged ? "blue 2px 2px 0px 0" : undefined,
	};

	return (
		<DraggableDiv ref={setNodeRef} {...listeners} {...attributes} style={style} onClick={onClick}>
			{content}
		</DraggableDiv>
	);
};

export default Draggable;
