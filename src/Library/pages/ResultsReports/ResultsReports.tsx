import Link from "next/link";
import React from "react";
import styles from "../../Common/Grids/Spaces.module.css";
import Button from "@/Library/Common/Button/Button";
import { Col, Flexbox, Row, Section } from "@/Library/Common/Grids/Grids";
import { BigParagraph } from "@/Library/Common/Typograhy/Typography";
import Box from "@/Library/pages/ResultsReports/Box/Box";
import ProgressBar from "@/Library/pages/ResultsReports/ProgressBar/ProgressBar";
import Range from "@/Library/pages/ResultsReports/Range/Range";
import {
	DoNext,
	PerformanceDomain,
	ProgressBox,
	RatingCategory,
	RatingHeading,
	ResultsReportsCaption,
	ResultsReportsHeader,
	StatusBox,
} from "@/Library/pages/ResultsReports/ResultsReports.styles";

const ResultsReports = () => {
	return (
		<>
			<ResultsReportsHeader $justify={"space-between"} $align={"center"}>
				<h2>Project quality management</h2>
				<p className={"paragraph"}>Your Exam Result Report</p>
				<Flexbox $gap={8} className={`${styles.marginTopButton12}`}>
					<Button bgcolor={"gost"} body={"View exam results"} />
					<Flexbox as={"a"} href={""} $align={"center"}>
						<p>Back to dashboard</p>
						<span>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
							>
								<path
									fillRule="evenodd"
									clipRule="evenodd"
									d="M22 12C22 12.5523 21.5523 13 21 13L3 13C2.44772 13 2 12.5523 2 12C2 11.4477 2.44772 11 3 11L21 11C21.5523 11 22 11.4477 22 12Z"
									fill="#4A2BE9"
								/>
								<path
									fillRule="evenodd"
									clipRule="evenodd"
									d="M21.7071 11.2929C22.0976 11.6834 22.0976 12.3166 21.7071 12.7071L14.7071 19.7071C14.3166 20.0976 13.6834 20.0976 13.2929 19.7071C12.9024 19.3166 12.9024 18.6834 13.2929 18.2929L19.5858 12L13.2929 5.70711C12.9024 5.31658 12.9024 4.68342 13.2929 4.29289C13.6834 3.90237 14.3166 3.90237 14.7071 4.29289L21.7071 11.2929Z"
									fill="#4A2BE9"
								/>
							</svg>
						</span>
					</Flexbox>
				</Flexbox>
			</ResultsReportsHeader>

			<Section>
				<Flexbox className={`${styles.marginTop110}`} $gap={8}>
					<Box title={"Name:"} subTitle={"Mostafa maher"} />
					<Box title={"Exam:"} subTitle={"Project quality management"} />
					<Box subTitle={"26/12/2024 - 02:38 PM"} />
				</Flexbox>

				<Row className={`${styles.marginTop24}`}>
					<Col $md={8}>
						<ProgressBox>
							<Flexbox $gap={8}>
								<Range title={"Falling"} />

								<Range title={"Passing"} />
							</Flexbox>
							<Flexbox className={`${styles.marginTop48}`} $gap={4}>
								<ProgressBar bgColor={"#FDDAD5"} title={"Needs improvement"} />

								<ProgressBar bgColor={"#FDF6D5"} title={"Below target"} />

								<ProgressBar bgColor={"#4A2BE9"} title={"Target"} indicator />

								<ProgressBar bgColor={"#D8EDDC"} title={"Above target"} />
							</Flexbox>
						</ProgressBox>
					</Col>
					<Col $md={4}>
						<StatusBox $direction={"column"}>
							<p className={"title"}>Your Overall Performance:</p>
							<p className={"header"}>Pass</p>
							<p className={"caption"}>
								Congratulations! You passed your exam and have successfully earned your PMI
								certification. This is a tremendous accomplishment!
							</p>
						</StatusBox>
					</Col>
				</Row>
				<Row className={`${styles.marginTop48}`}>
					<Col $md={6}>
						<ResultsReportsCaption>
							<li>
								<h3>What Does this Diagram Mean?</h3>
								<p className={`${styles.marginTop8}`}>
									The diagram uses four different performance rating categories to show your overall
									performance on the exam. Each rating reflects how many questions you answered
									correctly.
								</p>
								<p className={`${styles.marginTop12}`}>
									Note: The categories presented on this report were created to help you see where
									you may need additional preparation. They should not be used or interpreted for
									other purposes, such as job placement decisions.
								</p>
							</li>
							<li className={`${styles.marginTop32}`}>
								<h3>How is Your Score Determined?</h3>

								<p className={`${styles.marginTop8}`}>
									PMI uses subject matter experts—project professionals from around the world and
									from many different disciplines—to determine how many questions you must answer
									correctly to pass the exam. Each scored question on the exam is worth one point;
									and your final score is calculated by totaling the points you have earned on the
									exam. The number of questions you answer correctly places you within one of the
									performance rating categories you see on this report.
								</p>
							</li>
						</ResultsReportsCaption>
					</Col>
					<Col $md={6}>
						<RatingHeading>Performance Rating Categories</RatingHeading>
						<RatingCategory as={"ul"} $direction={"column"} $gap={12}>
							<li className={"ratingCategory"}>
								<h4>
									Above Target:{" "}
									<span>Your performance exceeds the minimum requirements for this exam.</span>
								</h4>
							</li>{" "}
							<li className={"ratingCategory"}>
								<h4>
									Target:{" "}
									<span>Your performance meets the minimum requirements for this exam.</span>
								</h4>
							</li>{" "}
							<li className={"ratingCategory"}>
								<h4>
									Below Target:{" "}
									<span>
										{" "}
										Your performance is slightly below target and fails to meet the minimum
										requirements for this exam. Additional preparation is recommended before
										re-examination.
									</span>
								</h4>
							</li>{" "}
							<li className={"ratingCategory"}>
								<h4>
									Needs Improvement:{" "}
									<span>
										{" "}
										Your performance is far below target and fails to meet the minimum requirements
										for this exam. Additional preparation is strongly recommended before
										re-examination.
									</span>
								</h4>
							</li>
							<li className={"ratingCategory"}>
								<h4>
									<span>
										Note: The categories presented on this report were created to help you see where
										you may need additional preparation. They should not be used or interpreted for
										other purposes, such as job placement decisions.
									</span>
								</h4>
							</li>
						</RatingCategory>
					</Col>
				</Row>
				<PerformanceDomain>
					<BigParagraph bold>Your Performance by Domain:</BigParagraph>
					<p>
						Using the same categories (as above), your performance has been calculated within each
						domain. This will help you identify your strong areas—as well as those needing
						improvement—so that you can plan your future professional development.
					</p>
					<table>
						<thead>
							<tr>
								<th>
									<p>Initiation</p>
								</th>
								<th>
									<p>Planning</p>
								</th>
								<th>
									<p>Execution</p>
								</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>
									<p>Target</p>
								</td>
								<td>
									<p>Target</p>
								</td>
								<td>
									<p>Target</p>
								</td>
							</tr>
						</tbody>
					</table>
				</PerformanceDomain>
				<DoNext>
					<p>What Can You Do Next?</p>
					<div>
						<p>
							Celebrate your accomplishment and reward yourself for all your hard work! You should
							also:
						</p>
						<ul>
							<li>
								<p>
									Check your email.
									<span>Look for more information on when your certificate will be delivered.</span>
								</p>
							</li>
							<li>
								<p>
									Start thinking about your future professional development.
									<span>
										{" "}
										Learning more about your exam performance is a great way to start. See our web
										page: <Link href={"#"}>https://ccrs.pmi.org/reporting/examanalysis</Link> for
										more details on how you performed in each area of the exam and to get more ideas
										on what to do next.
									</span>
								</p>
							</li>
						</ul>
					</div>
				</DoNext>
			</Section>
		</>
	);
};

export default ResultsReports;
