import React, { useEffect, useState } from "react";
import { Flexbox } from "@/Library/Common/Grids/Grids";
import Cross from "@/Library/Common/Icongraphy/cross/Cross";
import {
	BigImage,
	DarkLayer,
	EscapeContainer,
	ImageContainer,
	QuestionImageStyles,
	QuestionShell,
	QuestionStyles,
} from "@/Library/Common/Question/Question.styles";

const Question = ({ question, image }: { question: string; image?: string }) => {
	const [openImage, setOpenImage] = useState<boolean>(false);
	useEffect(() => {
		const handleKeyDown = (e: KeyboardEvent) => {
			if (e.key === "Escape") {
				setOpenImage(false);
			}
		};

		document.addEventListener("keydown", handleKeyDown);

		return () => {
			document.removeEventListener("keydown", handleKeyDown);
		};
	}, []);

	const dirIsLTR = false;
	const imageURI = `/dist/simulator/${image}`;

	return (
		<>
			<QuestionShell $align={"center"} $justify={"space-between"}>
				<QuestionStyles dirIsLTR={dirIsLTR}>{question} </QuestionStyles>
				{image && (
					<QuestionImageStyles
						onClick={() => setOpenImage(prev => !prev)}
						width={120}
						height={120}
						src={imageURI}
						alt={""}
						quality={100}
						dirIsLTR={dirIsLTR}
					/>
				)}
			</QuestionShell>

			<Flexbox $justify={"center"}>
				<BigImage className={`${openImage ? "" : "displayNone"}`}>
					<ImageContainer width={1000} height={1000} src={imageURI} alt={""} dirIsLTR={dirIsLTR} />

					<EscapeContainer onClick={() => setOpenImage(prev => !prev)}>
						<Flexbox>
							<p>Close</p>
							<Cross />
						</Flexbox>
					</EscapeContainer>
				</BigImage>
			</Flexbox>

			<DarkLayer
				onClick={() => setOpenImage(prev => !prev)}
				className={`${openImage ? "" : "displayNone"}`}
			></DarkLayer>
		</>
	);
};

export default Question;
