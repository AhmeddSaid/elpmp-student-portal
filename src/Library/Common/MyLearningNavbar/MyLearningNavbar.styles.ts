"use client";

import styled from "styled-components";
import { Flexbox } from "@/Library/Common/Grids/Grids";

export const MyLearningNavbarShell = styled(Flexbox)`
	border-bottom: solid 0.125rem var(--Border-border-primary-muted, #e2e5eb);
	//margin-top: 4.5rem;
	//padding: var(--Spacing-spacing-06, 1.5rem) var(--section-hr-padding, 4rem) 0
	//	var(--section-hr-padding, 4rem);
	margin-bottom: 8px;
	a {
		color: var(--Text-text-secondary, #626d7c);
	}
`;
