"use client";
import styled from "styled-components";
import { Flexbox } from "@/Library/Common/Grids/Grids";

export const ResultsReportsHeader = styled(Flexbox)`
	padding-inline: 64px;
	background-color: rgba(247, 248, 251, 1);
	border-bottom: 1px solid var(--Border-border-primary, rgba(195, 201, 209, 1));
	position: fixed;
	top: 0;
	left: 0;
	right: 0;

	h2 {
		font-weight: 600;
		font-size: 20px;
		line-height: 28px;
		letter-spacing: 0;
		vertical-align: middle;
	}

	p.paragraph {
		font-weight: 500;
		font-size: 16px;
		line-height: 24px;
		letter-spacing: 0;
		text-align: center;
		vertical-align: middle;
	}

	a {
		padding: var(--Spacing-spacing-04, 0.75rem);
		p {
			color: var(--Text-text-accent, #4a2be9);
			font-variant-numeric: lining-nums proportional-nums;
			font-size: 1rem;
			font-style: normal;
			font-weight: 600;
			line-height: 1.5rem;
			padding: 0 var(--Spacing-spacing-03, 0.5rem);
		}
	}
`;

export const StatusBox = styled(Flexbox)`
	border: 1px solid #b4a7f6;
	border-radius: 16px;
	padding: 24px 32px;
	background-color: #f7f6fe;

	.title {
		font-weight: 500;
		font-size: 16px;
		line-height: 24px;
		letter-spacing: 0;
		vertical-align: middle;
	}

	.header {
		font-weight: 600;
		font-size: 36px;
		line-height: 44px;
		letter-spacing: 0;
		vertical-align: middle;
		color: #4a2be9;
		margin-block: 12px 24px;
	}

	.caption {
		color: #626d7c;
		font-weight: 500;
		font-size: 12px;
		line-height: 16px;
		letter-spacing: 0;
		vertical-align: middle;
	}
`;
export const ProgressBox = styled.div`
	border: 1px solid #e2e5eb;
	border-radius: 16px;
	padding: 32px 32px 61px;
	box-shadow: 0 8px 20px 0 rgba(0, 0, 0, 0.1);
`;

export const ResultsReportsCaption = styled.ul`
	h3 {
		font-weight: 600;
		font-size: 16px;
		line-height: 24px;
		letter-spacing: 0;
		vertical-align: middle;
	}

	p {
		color: #626d7c;
		font-weight: 500;
		font-size: 14px;
		line-height: 20px;
		letter-spacing: 0;
		vertical-align: middle;
	}
`;
export const RatingHeading = styled.p`
	color: var(--Text-text-primary, #000);
	font-variant-numeric: lining-nums proportional-nums;
	font-size: 1rem;
	font-style: normal;
	font-weight: 600;
	line-height: 1.5rem;
`;
export const RatingCategory = styled(Flexbox)`
	margin-top: var(--Spacing-spacing-03, 0.5rem);

	h4 {
		color: #000000;
		font-weight: 700;
		font-size: 14px;
		line-height: 20px;
		letter-spacing: 0;
		vertical-align: middle;

		span {
			color: #626d7c;
		}
	}
`;

export const PerformanceDomain = styled.div`
	margin-block: 2.5rem;
	padding-block: 2.5rem;
	border-block: solid 1px var(--Border-border-primary, #c3c9d1);

	& > :nth-of-type(2) {
		align-self: stretch;
		color: var(--Text-text-secondary, #626d7c);
		font-variant-numeric: lining-nums proportional-nums;
		font-size: 0.75rem;
		font-style: normal;
		font-weight: 500;
		line-height: 1rem;
		padding-block: 0.5rem 1.75rem;
	}

	table {
		width: clamp(100%, 100%, 100%);
		text-align: center;
		//overflow: hidden;

		thead {
			tr {
				th {
					p {
						padding: var(--Spacing-spacing-05, 1rem) 0.5rem;
						border: 1px solid var(--Border-border-primary, #c3c9d1);
						background: var(--Surface-surface-secondary-muted, #f7f8fb);
						color: var(--Text-text-primary, #000);
						font-variant-numeric: lining-nums proportional-nums;
						font-size: 0.875rem;
						font-style: normal;
						font-weight: 600;
						line-height: 1.25rem;
					}
				}

				& > :first-child {
					p {
						//background-color: teal;
						padding: var(--Spacing-spacing-05, 1rem) 0.5rem;
						border-start-start-radius: var(--Radius-radius-03, 0.5rem);
						border: 1px solid var(--Border-border-primary, #c3c9d1);
						border-inline-end: none;
					}
				}

				& > :last-child {
					p {
						//background-color: teal;
						padding: var(--Spacing-spacing-05, 1rem) 0.5rem;
						border-start-end-radius: var(--Radius-radius-03, 0.5rem);
						border: 1px solid var(--Border-border-primary, #c3c9d1);
						border-inline-start: none;
					}
				}
			}
		}

		tbody {
			tr {
				& > :first-child {
					p {
						//background-color: teal;
						padding: var(--Spacing-spacing-05, 1rem) 0.5rem;
						border-end-start-radius: var(--Radius-radius-03, 0.5rem);
						border: 1px solid var(--Border-border-primary, #c3c9d1);
						border-inline-end: none;
						border-top: none;
					}
				}

				& > :last-child {
					p {
						//background-color: teal;
						padding: var(--Spacing-spacing-05, 1rem) 0.5rem;
						border-end-end-radius: var(--Radius-radius-03, 0.5rem);
						border: 1px solid var(--Border-border-primary, #c3c9d1);
						border-top: none;
						border-inline-start: none;
					}
				}

				td {
					p {
						padding: var(--Spacing-spacing-05, 1rem) 0.5rem;
						border: 1px solid var(--Border-border-primary, #c3c9d1);
						border-top: none;
						background: var(--Surface-surface-secondary-muted, #f7f8fb);
						color: var(--Text-text-accent, #4a2be9);
						text-align: center;
						font-variant-numeric: lining-nums proportional-nums;
						font-size: 0.875rem;
						font-style: normal;
						font-weight: 600;
						line-height: 1.25rem;
					}
				}
			}
		}
	}
`;

export const DoNext = styled.div`
	margin-bottom: 6rem;
	& > :first-child {
		align-self: stretch;
		color: var(--Text-text-primary, #000);
		font-variant-numeric: lining-nums proportional-nums;
		font-size: 1.125rem;
		font-style: normal;
		font-weight: 600;
		line-height: 1.75rem;
		margin-bottom: 0.5rem;
	}

	div {
		& > p {
			color: var(--Text-text-secondary, #626d7c);
			font-variant-numeric: lining-nums proportional-nums;
			font-size: 0.75rem;
			font-style: normal;
			font-weight: 500;
			line-height: 1rem;
			margin-bottom: 12px;
		}

		ul {
			overflow: hidden;

			li {
				list-style-type: disc;
				transform: translateX(20px);

				p {
					color: var(--Text-text-primary, #000);
					font-variant-numeric: lining-nums proportional-nums;
					font-size: 0.75rem;
					font-style: normal;
					font-weight: 700;
					line-height: 1rem;

					span {
						color: var(--Text-text-secondary, #626d7c);
						font-variant-numeric: lining-nums proportional-nums;
						font-size: 0.75rem;
						font-style: normal;
						font-weight: 500;
						line-height: 1rem;

						a {
							text-decoration-line: underline;
							text-decoration-style: solid;
							text-decoration-skip-ink: auto;
							text-decoration-thickness: 7.5%;
							text-underline-offset: 13.5%;
							text-underline-position: from-font;
							display: block;
						}
					}
				}
			}
		}
	}
`;
