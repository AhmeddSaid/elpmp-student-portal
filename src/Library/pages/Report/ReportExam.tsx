import Image from "next/image";
import Link from "next/link";
import React, { ReactNode } from "react";
import Button from "@/Library/Common/Button/Button";
import { Col, Flexbox, Row, Section } from "@/Library/Common/Grids/Grids";
import { BigParagraph } from "@/Library/Common/Typograhy/Typography";
import { ReportInfo, ReportShell, ReportSubtitle } from "@/Library/pages/Report/Report.styles";

const ReportExam = ({
	icon,
	title,
	subtitle,
	score,
}: {
	icon?: ReactNode;
	title: string;
	subtitle: string;
	score: number;
}) => {
	return (
		<>
			<Section>
				<Row $justify="center">
					<Col $lg={6}>
						<ReportShell>
							{score >= 75 && (
								<Image width={200} height={200} src={"/PngItem_1480938.png"} alt={""} />
							)}

							<p>Exam ended successfully</p>

							<ReportSubtitle>Nice job reaching your goal.</ReportSubtitle>

							<Flexbox $gap={20}>
								<ReportInfo>
									<Flexbox $gap={10}>
										{icon}
										<BigParagraph bold color={"success"}>
											{title}
										</BigParagraph>
									</Flexbox>

									<p>{subtitle}</p>
								</ReportInfo>{" "}
								{/*<ReportInfo>*/}
								{/*	<Flexbox $gap={10}>*/}
								{/*		{icon}*/}
								{/*		<p>{title}</p>*/}
								{/*	</Flexbox>*/}
								{/*	<p>{subtitle}</p>*/}
								{/*</ReportInfo>{" "}*/}
								{/*<ReportInfo>*/}
								{/*	<Flexbox $gap={10}>*/}
								{/*		{icon}*/}
								{/*		<p>{title}</p>*/}
								{/*	</Flexbox>*/}
								{/*	<p>{subtitle}</p>*/}
								{/*</ReportInfo>{" "}*/}
							</Flexbox>
							<Flexbox $gap={50} $justify={"space-between"}>
								<Link href={"/"}>
									<Button body={"Home Page"} />
								</Link>
							</Flexbox>
						</ReportShell>
					</Col>
				</Row>
			</Section>
		</>
	);
};

export default ReportExam;
