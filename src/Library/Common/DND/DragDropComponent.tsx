"use client";
import { DndContext, DragEndEvent, DragStartEvent } from "@dnd-kit/core";
import React, { useState } from "react";
import { GivableContainer } from "./DragDrop.styles";
import Draggable from "./Draggable";
import Droppable from "./Droppable";
import { Col, Row } from "@/Library/Common/Grids/Grids";

type DraggableItem = {
	id: string;
	content: React.ReactNode;
	isSelected: boolean;
	isDragged: boolean;
	onClick: () => void;
};

type ReceivablesState = {
	[key: string]: DraggableItem | null;
};

const DragDropComponent = () => {
	const initialDraggables: DraggableItem[] = [
		{
			id: "1",
			content: <div style={{ padding: "0.5rem" }}>item 1</div>,
			isSelected: false,
			isDragged: false,
			onClick: () => {},
		},
		{
			id: "2",
			content: <div style={{ padding: "0.5rem" }}>item 2</div>,
			isSelected: false,
			isDragged: false,
			onClick: () => {},
		},
		{
			id: "3",
			content: <div style={{ padding: "0.5rem" }}>item 3</div>,
			isSelected: false,
			isDragged: false,
			onClick: () => {},
		},
		{
			id: "4",
			content: <div style={{ padding: "0.5rem" }}>item 4</div>,
			isSelected: false,
			isDragged: false,
			onClick: () => {},
		},
	];

	const [draggables, setDraggables] = useState<DraggableItem[]>(initialDraggables);
	const [receivables, setReceivables] = useState<ReceivablesState>({
		"1": null,
		"2": null,
		"3": null,
		"4": null,
	});

	const [selectedId, setSelectedId] = useState<string | null>(null);
	const [draggedId, setDraggedId] = useState<string | null>(null);

	const receivableNames: { [key: string]: string } = {
		"1": "Receivable 1",
		"2": "Receivable 2",
		"3": "Receivable 3",
		"4": "Receivable 4",
	};

	const handleDragStart = (event: DragStartEvent) => {
		setDraggedId(event.active.id as string);
	};

	function handleItemClick(id: string) {
		setSelectedId(id === selectedId ? null : id);
	}

	const handleDragEnd = (event: DragEndEvent) => {
		const { active, over } = event;
		if (!over || !active) return;

		const activeId = active.id;
		const overId = over.id;

		setDraggedId(null);

		const draggedItem =
			draggables.find(item => item.id === activeId) ||
			Object.values(receivables).find(item => item?.id === activeId);

		if (!draggedItem) return;

		const updatedDraggedItem: DraggableItem = {
			...draggedItem,
			isSelected: draggedItem.id === selectedId,
			isDragged: false,
			onClick: () => handleItemClick(draggedItem.id),
		};

		if (overId === "givable") {
			const isInDraggables = draggables.some(item => item.id === activeId);
			if (!isInDraggables) {
				setDraggables(prev => [...prev, updatedDraggedItem]);

				const sourceReceivable = Object.keys(receivables).find(
					key => receivables[key]?.id === activeId,
				);
				if (sourceReceivable) {
					setReceivables(prev => ({
						...prev,
						[sourceReceivable]: null,
					}));
				}
			}
		} else if (overId in receivables) {
			const existingItem = receivables[overId];

			if (!existingItem || existingItem.id !== activeId) {
				setReceivables(prev => ({
					...prev,
					[overId]: updatedDraggedItem,
				}));

				setDraggables(prev => prev.filter(item => item.id !== activeId));

				if (existingItem) {
					setDraggables(prev => [...prev, existingItem]);
				}

				const sourceReceivable = Object.keys(receivables).find(
					key => receivables[key]?.id === activeId,
				);
				if (sourceReceivable) {
					setReceivables(prev => ({
						...prev,
						[sourceReceivable]: null,
					}));
				}
			}
		}
	};

	return (
		<DndContext onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
			<Row>
				<Col $xs={12} $md={6}>
					<Droppable id="givable">
						<GivableContainer>
							{draggables.map(item => (
								<Draggable
									key={item.id}
									id={item.id}
									content={item.content}
									isSelected={item.id === selectedId}
									isDragged={item.id === draggedId}
									onClick={() => handleItemClick(item.id)}
								/>
							))}
						</GivableContainer>
					</Droppable>
				</Col>

				<Col $xs={12} $md={1}></Col>
				<Col $xs={12} $md={5}>
					{Object.keys(receivables).map(key => (
						<Droppable key={key} id={key} item={receivables[key]} name={receivableNames[key]} />
					))}
				</Col>
			</Row>
		</DndContext>
	);
};

export default DragDropComponent;
