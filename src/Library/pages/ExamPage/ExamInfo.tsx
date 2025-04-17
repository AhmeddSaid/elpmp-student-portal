import React, { ReactNode } from "react";
import { Paragraph } from "@/Library/Common/Typograhy/Typography";
import { ExamInfoShell, IconContainer } from "@/Library/pages/ExamPage/ExamInfo.styles";

const ExamInfo = ({ icon, title, body }: { icon: ReactNode; title: string; body: string }) => {
	return (
		<ExamInfoShell className={"ExamInfoShell"} $gap={12}>
			<IconContainer>{icon}</IconContainer>
			<div>
				<Paragraph bold>{title}</Paragraph>
				<Paragraph color={"secondary"}>{body}</Paragraph>
			</div>
		</ExamInfoShell>
	);
};

export default ExamInfo;
