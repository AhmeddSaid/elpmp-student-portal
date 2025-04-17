"use client";
import React from "react";
import styled from "styled-components";

const ActiveTag = ({ state }: { state: "active" | "in-active" | "expired" | "re-activate" }) => {
	const ActiveTagShell = styled.div`
		border-radius: var(--corner-03, 8px);
		border: 1px solid var(--Border-border-primary, #c3c9d1);
		display: flex;
		height: 32px;
		padding: var(--Spacing-spacing-03, 8px);
		justify-content: center;
		align-items: center;
		color: var(--Text-text-primary, #000);
		font-variant-numeric: lining-nums proportional-nums;
		font-size: 12px;
		font-style: normal;
		font-weight: 600;
		line-height: 16px;
	`;

	return (
		<>
			{state === "expired" ? (
				""
			) : (
				<ActiveTagShell>
					{state === "in-active" && <>Activate</>}

					{state === "re-activate" && <>Re-activate</>}
				</ActiveTagShell>
			)}
		</>
	);
};

export default ActiveTag;
