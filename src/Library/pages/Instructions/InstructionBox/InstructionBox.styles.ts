"use client";

import styled from "styled-components";
import { Flexbox } from "@/Library/Common/Grids/Grids";

export const InstructionBoxShell = styled(Flexbox)`
	padding: var(--Spacing-spacing-06, 1.5rem);
	flex: 1 0 0;
	align-self: stretch;
	border-radius: 1.5rem;
	background: var(--Surface-surface-secondary-muted, #f7f8fb);
`;
