"use client";
import Link from "next/link";
import React from "react";
import styled from "styled-components";
import { BreadcrumbLabel } from "@/Library/Common/Breadcrumb/Breadcrumb.styles";
import { Flexbox } from "@/Library/Common/Grids/Grids";
import Chevron from "@/Library/Common/Icongraphy/Chevron/Chevron";
import uuid from "@/Utils/uuid";

const Breadcrumb = ({
	className,
	id,
	links,
}: {
	links: { name: string; link: string }[];
	className?: string;
	id?: string;
}) => {
	const BreadcrumbShell = styled.div`
		//padding: var(--Spacing-spacing-06, 1.5rem) var(--section-hr-padding, 4rem) 0
		//	var(--section-hr-padding, 4rem);
		//margin-top: 72px;
	`;

	return (
		<>
			<BreadcrumbShell>
				<Flexbox className={className} id={id}>
					{links.map(({ name, link }, index) => {
						return (
							<Flexbox $gap={4} $align={"center"} key={uuid()}>
								<BreadcrumbLabel as={links.length !== index + 1 ? Link : "p"} href={link}>
									{name}
								</BreadcrumbLabel>
								{links.length !== index + 1 && <Chevron />}
							</Flexbox>
						);
					})}
				</Flexbox>
			</BreadcrumbShell>
		</>
	);
};

export default Breadcrumb;
