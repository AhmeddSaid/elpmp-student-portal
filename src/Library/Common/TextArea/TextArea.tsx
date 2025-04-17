import React from "react";
import {
	CaptionTextArea,
	LabelTextArea,
	TextAreaContainer,
	TextAreaStyle,
} from "@/Library/Common/TextArea/TextArea.styles";

const TextArea = ({
	caption,
	label,
	placeholder,
	disable,
	statusss,
	id,
	name,
	...rest
}: {
	name: string;
	id: string;
	caption?: string;
	label: string;
	placeholder: string;
	disable?: boolean;
	statusss?: string;
}) => {
	return (
		<>
			<div>
				<LabelTextArea disable={disable}>{label}</LabelTextArea>

				<TextAreaContainer>
					<TextAreaStyle
						id={id}
						name={name}
						disable={disable}
						statusss={statusss}
						placeholder={placeholder}
						disabled={disable}
						{...rest}
					></TextAreaStyle>

					{/*<TextAreaIcon>*/}
					{/*	<TestIcon />*/}
					{/*</TextAreaIcon>*/}
				</TextAreaContainer>
				<CaptionTextArea>{caption}</CaptionTextArea>
			</div>
		</>
	);
};

export default TextArea;
