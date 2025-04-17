import React from "react";
import { MyLearningNavbarShell } from "@/Library/Common/MyLearningNavbar/MyLearningNavbar.styles";
import Taps from "@/Library/Common/Taps/Taps";
import uuid from "@/Utils/uuid";

const ExamHistoryNavbar = ({
	setActiveTap,
	ActiveTap,
	data,
	locale,
}: {
	setActiveTap: React.Dispatch<React.SetStateAction<number>>;
	ActiveTap: number;
	data: { examId: { nameEn: string; nameAr: string } }[];
	locale: string;
}) => {
	return (
		<>
			<MyLearningNavbarShell as={"ul"}>
				{data.map((item, i) => (
					<li key={uuid()}>
						<div onClick={() => setActiveTap(i)}>
							<Taps
								size={"small"}
								active={ActiveTap === i}
								underline={ActiveTap === i}
								label={locale === "en" ? item.examId.nameEn : item.examId.nameAr}
								// label={item.examId.nameEn}
								// number={1}
							/>
						</div>
					</li>
				))}
			</MyLearningNavbarShell>
		</>
	);
};

export default ExamHistoryNavbar;
