import React from "react";
import Button from "@/Library/Common/Button/Button";
import {
	PmPExamCardBody,
	PmPExamCardBodyContainer,
	PmPExamCardImage,
	PmPExamCardInfo,
	PmPExamCardShell,
} from "@/Library/Common/ExamCard/PmPExamCard.styles";
import { Flexbox } from "@/Library/Common/Grids/Grids";
import TestIcon from "@/Library/Common/Icongraphy/TestIcon/TestIcon";

const PmPExamCard = () => {
	return (
		<>
			<PmPExamCardShell>
				<PmPExamCardImage
					width={300}
					height={200}
					src={"/liana-s-VT2Ygvzn49Y-unsplash(1).jpg"}
					alt={""}
				/>
				<PmPExamCardBodyContainer>
					<PmPExamCardBody>Lorem ipsum dolor sit amet.</PmPExamCardBody>

					<Flexbox $gap={20}>
						<Flexbox>
							<TestIcon />
							<PmPExamCardInfo>15 exams</PmPExamCardInfo>
						</Flexbox>
						<Flexbox>
							<TestIcon />
							<PmPExamCardInfo>15 exams</PmPExamCardInfo>
						</Flexbox>
					</Flexbox>
					<Button body={"active now"} size={"fullWidth"} />
				</PmPExamCardBodyContainer>
			</PmPExamCardShell>
		</>
	);
};

export default PmPExamCard;
