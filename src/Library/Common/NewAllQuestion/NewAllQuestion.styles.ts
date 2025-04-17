"use client";

import styled from "styled-components";
import { Section } from "@/Library/Common/Grids/Grids";

export const SimulatorSection = styled(Section)`
	position: relative;
`;

export const NewAllQuestionShell = styled.div<{ OpenAllQuestion: boolean }>`
	position: absolute;
	overflow: auto;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background: white;
	display: ${({ OpenAllQuestion }) => (OpenAllQuestion ? "block" : "none")};
`;
