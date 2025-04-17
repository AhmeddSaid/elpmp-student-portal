"use client";
import React from "react";
import styled from "styled-components";

const ExamCardTag = ({ state }: { state: "active" | "in-active" | "expired" | "re-activate" }) => {
	const ExamCardTagShell = styled.div<{
		state: "active" | "in-active" | "expired" | "re-activate";
	}>`
		display: flex;
		height: 20px;
		min-width: 20px;
		width: fit-content;
		padding: var(--Spacing-spacing-01, 2px) var(--Spacing-spacing-03, 8px);
		justify-content: center;
		align-items: center;
		border-radius: var(--corner-05, 16px);
		//background: var(--Surface-surface-success, #00823e);
		background: ${({ state }) => {
			switch (state) {
				case "active":
					return "var(--Surface-surface-success, #00823e)";
				case "expired":
					return "var(--Surface-surface-danger, #C32518)";
				case "re-activate":
					return "var(--Surface-surface-danger, #C32518)";
				case "in-active":
					return " var(--Surface-surface-secondary-inverse, #626D7C)";
			}
		}};

		p {
			color: var(--Text-text-white-on-color, #fff);
			font-variant-numeric: lining-nums proportional-nums;
			font-size: 12px;
			font-style: normal;
			font-weight: 600;
			line-height: 16px;
		}
	`;

	return (
		<>
			<ExamCardTagShell state={state}>
				{state === "active" && <p>Active</p>}
				{state === "in-active" && <p>In-active</p>}
				{state === "expired" && <p>Expired</p>}
				{state === "re-activate" && <p>Expired</p>}
			</ExamCardTagShell>
		</>
	);
};

export default ExamCardTag;
