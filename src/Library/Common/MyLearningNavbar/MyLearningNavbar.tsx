"use client";
import React, { ReactNode } from "react";
import { MyLearningNavbarShell } from "@/Library/Common/MyLearningNavbar/MyLearningNavbar.styles";
import Taps from "@/Library/Common/Taps/Taps";
import uuid from "@/Utils/uuid";

const MyLearningNavbar = ({
	setActiveTap,
	ActiveTap,
	data,
}: {
	setActiveTap: React.Dispatch<React.SetStateAction<number>>;
	ActiveTap: number;
	data: any;
}) => {
	return (
		<MyLearningNavbarShell as={"ul"}>
			{data.DOMAIN && data.DOMAIN.length > 0 && (
				<li key={uuid()}>
					<div onClick={() => setActiveTap(0)}>
						<Taps
							size={"small"}
							active={ActiveTap === 0}
							underline={ActiveTap === 0}
							label={"Domain"}
							number={data.DOMAIN.length}
						/>
					</div>
				</li>
			)}

			{data.KNOWLEDGEAREA && data.KNOWLEDGEAREA.length > 0 && (
				<li key={uuid()}>
					<div onClick={() => setActiveTap(1)}>
						<Taps
							size={"small"}
							active={ActiveTap === 1}
							underline={ActiveTap === 1}
							label={"Chapter"}
							number={data.KNOWLEDGEAREA.length}
						/>
					</div>
				</li>
			)}

			{data.FULLEXAMS && data.FULLEXAMS.length > 0 && (
				<li key={uuid()}>
					<div onClick={() => setActiveTap(2)}>
						<Taps
							size={"small"}
							active={ActiveTap === 2}
							underline={ActiveTap === 2}
							label={"All Exams"}
							number={data.FULLEXAMS.length}
						/>
					</div>
				</li>
			)}

			{data.OTHER && data.OTHER.length > 0 && (
				<li key={uuid()}>
					<div onClick={() => setActiveTap(3)}>
						<Taps
							size={"small"}
							active={ActiveTap === 3}
							underline={ActiveTap === 3}
							label={"Othes"}
							number={data?.OTHER?.length}
						/>
					</div>
				</li>
			)}
		</MyLearningNavbarShell>
	);
};

export default MyLearningNavbar;
