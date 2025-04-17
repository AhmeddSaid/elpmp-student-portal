import React, { ReactNode } from "react";
import { Flexbox } from "@/Library/Common/Grids/Grids";
import { HeadingLarge, LabelSmall } from "@/Library/Common/Typograhy/Typography";
import { InstructionBoxShell } from "@/Library/pages/Instructions/InstructionBox/InstructionBox.styles";

const InstructionBox = ({
	icon,
	title,
	body,
}: {
	icon: ReactNode;
	title: string;
	body: string;
}) => {
	return (
		<InstructionBoxShell $direction={"column"} $justify={"center"} $align={"center"}>
			<Flexbox $align={"center"} $direction={"column"} $gap={8}>
				{icon}
				<HeadingLarge>{title}</HeadingLarge>
			</Flexbox>
			<LabelSmall color={"var(--Text-text-secondary, #626D7C)"}>{body}</LabelSmall>
		</InstructionBoxShell>
	);
};

export default InstructionBox;
