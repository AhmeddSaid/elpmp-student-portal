"use client";

import styled from "styled-components";
import { Flexbox } from "@/Library/Common/Grids/Grids";

export const ContinuCardShell = styled(Flexbox)`
	padding: 1rem 2rem;
	flex-wrap: wrap;
	border: 1px solid #7e7c7c;
	border-radius: 25px;
	margin-top: 25px;
	align-items: center;
	gap: 75px;
	justify-content: space-between;
	max-width: 100%;
	overflow: hidden;
	word-wrap: break-word;
	white-space: normal;
	@media only screen and (max-width: 770px) {
		justify-content: center;
		padding: 1.5rem;
	}
`;
export const UpdateFlexbox = styled(Flexbox)`
	@media (max-width: 768px) {
		flex-direction: column;
		align-items: stretch;
		gap: 15px;
	}

	@media (max-width: 480px) {
		flex-direction: column;
		gap: 10px;
		align-items: stretch;
		span {
			font-size: 14px;
		}

		div {
			width: 100%;
		}
	}
`;
export const UpdateFlexbox2 = styled(Flexbox)`
	@media (max-width: 768px) {
		align-items: center;
		gap: 15px;
	}

	@media (max-width: 480px) {
		display: flex;
		align-items: center;
		gap: 10px;
		span {
			font-size: 12.5px;
		}

		div {
			width: 100%;
		}
	}
`;

export const PhoneInputComponentShell = styled.div<{
	size?: "small" | "medium" | "large";
	statusss?: "error" | "Success";
	disable?: false | true;
}>`



    & .search-box {


        margin-left: 0 !important;


    }

    & .search {


        padding: 10px 8px 6px 10px !important;


    }


    & .form-control {


        padding-left: 50px !important;

    }


    & .flag-dropdown.open {


        background: transparent !important;


    }

    & .flag-dropdown {
        border: none !important;
        background: transparent;


        &:focus {


            background: transparent !important;


        }

        & .selected-flag {
            background: transparent !important;
            border-radius: var(--corner-03, 0.5rem) !important;
            border: none !important;
            overflow: hidden;

            padding: 0 0 0 14px !important;

        }


        &:focus {

            border: ${({ statusss }) => {
							switch (statusss) {
								case "error":
									return " 1px solid var(--Border-border-danger, #d41a1a)";

								case "Success":
									return "1px solid var(--Border-border-accent, #3259e8)";

								default:
									return "1px solid var(--Border-border-accent, #3259e8)";
							}
						}} !important;
        }

        border-radius: var(--corner-03, 0.5rem) !important;
    }

    & input {
        width: 100% !important;
        border-radius: var(--corner-03, 0.5rem) !important;

        border: ${({ statusss }) => {
					switch (statusss) {
						case "error":
							return "1px solid var(--Border-border-danger, #d41a1a)";
						case "Success":
							return "1px solid var(--Border-border-primary-hover, #a2abb8)";
						default:
							return "1px solid var(--Border-border-primary-hover, #a2abb8)";
					}
				}} !important;

        &:hover {

            border: ${({ statusss }) => {
							switch (statusss) {
								case "error":
									return " 1px solid var(--Border-border-danger, #d41a1a)";

								case "Success":
									return " 1px solid var(--Border-border-primary-hover, #a2abb8)";

								default:
									return " 1px solid var(--Border-border-primary-hover, #a2abb8)";
							}
						}};
        }


        height: ${({ size }) => {
					switch (size) {
						case "small":
							return "32px";
						case "medium":
							return "40px";
						case "large":
							return "48px";

						default:
							return "48px";
					}
				}} !important;
    }


    &:focus {
        //border: 2px solid var(--Border-border-accent, #3259e8);

        border: ${({ statusss }) => {
					switch (statusss) {
						case "error":
							return " 1px solid var(--Border-border-danger, #d41a1a)";

						case "Success":
							return "1px solid var(--Border-border-accent, #3259e8)";

						default:
							return "1px solid var(--Border-border-accent, #3259e8)";
					}
				}} !important;
    }

    &::placeholder {
        color: var(--Text-text-primary-muted, #a2abb8);
        font-variant-numeric: lining-nums proportional-nums;
        font-size: 0.875rem;
        font-style: normal;
        font-weight: 500;
        line-height: 1rem;
    }

    background: ${({ disable }) => {
			switch (disable) {
				case true:
					return "var(--Surface-surface-secondary-muted, #F7F8FB)";

				default:
					return "var(--Surface-surface-elevation, #fff)";
			}
		}} !important;

}
`;
