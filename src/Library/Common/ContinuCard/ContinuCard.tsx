"use client";
import { useRouter } from "next/navigation";
import React from "react";
import Button from "@/Library/Common/Button/Button";
import {
	ContinuCardShell,
	UpdateFlexbox,
	UpdateFlexbox2,
} from "@/Library/Common/ContinuCard/ContinuCard.styles";
import ProgressBar from "@/Library/Common/ProgressBar/ProgressBar";
import { BigParagraph } from "@/Library/Common/Typograhy/Typography";
import uuid from "@/Utils/uuid";

const ContinuCard = ({
	activeSubExam,
	state,
	// duration,
}: {
	activeSubExam: {
		nameEn: string;
		nameAr: string;
		progress: number;
		key: string;
	}[];
	state: string;
	// duration: string;
}) => {
	const router = useRouter();
	return (
		<>
			{activeSubExam?.map(
				(item: { nameEn: string; nameAr: string; progress: number; key: string }) => (
					<ContinuCardShell key={uuid()}>
						<UpdateFlexbox $gap={20} $align={"center"}>
							{/*<div>icon</div>*/}

							<UpdateFlexbox $align={"start"} $direction={"column"} $gap={5}>
								<BigParagraph>{item.nameEn}</BigParagraph>

								<UpdateFlexbox $align={"center"} $gap={10}>
									<div>
										<ProgressBar progress={Math.round(item.progress)} />
									</div>

									<UpdateFlexbox2 $gap={10}>
										<UpdateFlexbox2 $gap={5}>
											<span>{Math.round(item.progress)}%</span>
											<span>{state}</span>
										</UpdateFlexbox2>
										{/*<UpdateFlexbox2 $gap={5} $align={"center"}>*/}
										{/*	<GrayClock />*/}
										{/*	<span>{duration} </span>*/}
										{/*</UpdateFlexbox2>*/}
									</UpdateFlexbox2>
								</UpdateFlexbox>
							</UpdateFlexbox>
						</UpdateFlexbox>
						<div>
							<Button
								onclick={() => router.push(`/simulator/${item.key}`)}
								body={"Resume Exam"}
								size={"small"}
							/>
						</div>
					</ContinuCardShell>
				),
			)}
		</>
	);
};

export default ContinuCard;
