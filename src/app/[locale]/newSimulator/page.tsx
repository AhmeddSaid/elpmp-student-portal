"use client";
import Image from "next/image";
import React, { useState } from "react";
import styles from "./../../../Library/Common/Grids/Spaces.module.css";
import EndExamReportSection from "@/Library/Common/EndExamReport/EndExamReportSection";
import ExamQuestion from "@/Library/Common/ExamQuestion/ExamQuestion";
import { Col, Row } from "@/Library/Common/Grids/Grids";
import NewAllQuestion from "@/Library/Common/NewAllQuestion/NewAllQuestion";
import { SimulatorSection } from "@/Library/Common/NewAllQuestion/NewAllQuestion.styles";
import NewAnswer from "@/Library/Common/NewAnswer/NewAnswer";
import NewExplanation from "@/Library/Common/NewExplanation/NewExplanation";
import SimulationFooter from "@/Library/Common/SimulationFooter/SimulationFooter";
import SimulationNavBar from "@/Library/Common/SimulationNavBar/SimulationNavBar";
import ToolsBar from "@/Library/Common/ToolsBar/ToolsBar";
import uuid from "@/Utils/uuid";

const Page = () => {
	const data = [
		"Organizational process assets (OPAs)",
		"Organizational process assets (OPAs)",
		"Organizational process assets (OPAs)",
		"Organizational process assets (OPAs)",
	];
	const [openExplenation, setOpenExplenation] = useState(true);
	const [OpenAllQuestion, setOpenAllQuestion] = useState(false);
	const [Active, SetActive] = useState(0);
	const [EndExamReport, setEndExamReport] = useState(false);

	const dataEndExam = true;
	const QuestionImage = true;
	return (
		<>
			<SimulationNavBar OpenAllQuestion={OpenAllQuestion} EndExamReport={EndExamReport} />
			<ToolsBar EndExamReport={EndExamReport} OpenAllQuestion={OpenAllQuestion} />
			<SimulatorSection>
				<Row className={` ${styles.paddingBottom128}`} $align={"end"}>
					<Col $md={8} className={styles.marginTop40}>
						<ExamQuestion question={"jaksdfshkjdsfghikjsuhufkjdhskdjf"} />

						{data.map((item, index) => (
							<div key={uuid()} onClick={() => SetActive(index + 1)}>
								<NewAnswer
									isAnswered={false}
									key={uuid()}
									type={"multi"}
									state={Active === index + 1 ? "active" : ""}
									body={item}
									questionNumber={index + 1}
								/>
							</div>
						))}

						{/*<NewAnswer type={"number"} state={"success"} />*/}
						{/*<NewAnswer type={"number"} state={"error"} />*/}
						{/*<NewAnswer type={"single"} />*/}
						{/*<NewAnswer type={"multi"} />*/}
					</Col>

					<Col $md={4}>
						{QuestionImage && <Image src={"/Frame43.png"} alt={""} width={416} height={458} />}
					</Col>

					<Col $md={8}>
						<NewExplanation body={"sadasdassd"} openExplenation={openExplenation} />
					</Col>

					<Col $md={4}>{/*<Image src={"/Frame43.png"} alt={""} width={415} height={460} />*/}</Col>
				</Row>
				{OpenAllQuestion && (
					<NewAllQuestion
						openExplenation={openExplenation}
						setOpenExplenation={setOpenExplenation}
						setOpenAllQuestion={setOpenAllQuestion}
						OpenAllQuestion={OpenAllQuestion}
					/>
				)}
				{EndExamReport && (
					<EndExamReportSection dataEndExam={dataEndExam} EndExamReport={EndExamReport} />
				)}
			</SimulatorSection>

			<SimulationFooter
				dataEndExam={dataEndExam}
				setOpenAllQuestion={setOpenAllQuestion}
				openExplenation={openExplenation}
				setOpenExplenation={setOpenExplenation}
				EndExamReport={EndExamReport}
				setEndExamReport={setEndExamReport}
			/>
		</>
	);
};

export default Page;
