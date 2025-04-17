import { useDroppable } from "@dnd-kit/core";
import React from "react";
import { NameContainer, ReceivableContainer, ReceivableContainerDesign } from "./DragDrop.styles";
import Draggable from "./Draggable";

type DraggableItem = {
	id: string;
	content: React.ReactNode;
	isSelected: boolean;
	isDragged: boolean;
	onClick: () => void;
};

const Droppable = ({
	id,
	item,
	children,
	name,
}: {
	id: string;
	item?: DraggableItem | null;
	children?: React.ReactNode;
	name?: string;
}) => {
	const { isOver, setNodeRef } = useDroppable({
		id,
	});
	const isActive = Boolean(item);

	return (
		<ReceivableContainer ref={setNodeRef} isOver={isOver} isActive={isActive}>
			{name && (
				<NameContainer>
					<h1>{name}</h1>
				</NameContainer>
			)}
			<ReceivableContainerDesign>
				{item ? (
					<Draggable
						id={item.id}
						content={item.content}
						isSelected={item.isSelected}
						isDragged={item.isDragged}
						onClick={item.onClick}
					/>
				) : (
					children || ""
				)}
			</ReceivableContainerDesign>
		</ReceivableContainer>
	);
};

export default Droppable;
