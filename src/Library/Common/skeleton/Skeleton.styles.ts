"use client";
import styled from "styled-components";

export const SkeletonShape = styled.div<{
	SkeletonType: "rectangle" | "circle";
	Height: number;
}>`
	width: ${({ Height, SkeletonType }) => (SkeletonType === "circle" ? ` ${Height}px` : "100%")};
	height: ${({ Height }) => Height}px;
	border-radius: 5rem;
	margin-bottom: 10px;
	animation: pulse 1.25s infinite linear;

	@keyframes pulse {
		0% {
			background-color: rgba(165, 165, 165, 0.2);
		}
		50% {
			background-color: rgba(165, 165, 165, 0.4);
		}
		100% {
			background-color: rgba(165, 165, 165, 0.2);
		}
	}
`;
