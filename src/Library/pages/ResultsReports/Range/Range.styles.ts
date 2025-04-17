"use client";
import styled from "styled-components";
import { Flexbox } from "@/Library/Common/Grids/Grids";

export const RangeShell = styled(Flexbox)`
	flex-grow: 1;
	width: 100%;
	.arrowContainer {
		background-color: #c3c9d1;
		width: 100%;
		height: 1px;
		position: relative;

		svg {
			position: absolute;
			top: 50%;
			transform: translateY(-50%);
		}
	}

	p {
		color: #626d7c;
		font-weight: 500;
		font-size: 12px;
		line-height: 16px;
		letter-spacing: 0;
		text-align: center;
		vertical-align: middle;
	}
`;
