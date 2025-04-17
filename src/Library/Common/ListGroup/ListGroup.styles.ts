"use client";

import styled from "styled-components";
import { Flexbox } from "@/Library/Common/Grids/Grids";

export const ListGroupShell = styled(Flexbox)`
	justify-content: space-between;
	width: 12.5rem;
	height: 3rem;
	padding-block: 0.75rem;
	gap: 0.5rem;
	border-bottom: 1px solid var(--Border-border-primary-muted, #e2e5eb);
`;
