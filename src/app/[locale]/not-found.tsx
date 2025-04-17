import Image from "next/image";
import Link from "next/link";
import React from "react";
import Button from "@/Library/Common/Button/Button";
import { Col, Flexbox, Row, Section } from "@/Library/Common/Grids/Grids";
import { Heading1, Paragraph } from "@/Library/Common/Typograhy/Typography";

export default function NotFound() {
	return (
		<Section>
			<Row $justify={"center"}>
				<Col $md={10}>
					<Flexbox $direction={"column"} $gap={32} $align={"center"}>
						<Image src={"/404.png"} alt={"Not found"} width={272} height={282} />
						<Heading1>404</Heading1>
						<Paragraph color={"secondary"}>Opps! Page Not Found</Paragraph>
						<Link href="/">
							<Button body={"Return Home"} />
						</Link>
					</Flexbox>
				</Col>
			</Row>
		</Section>
	);
}
