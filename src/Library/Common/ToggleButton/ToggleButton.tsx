"use client";
import React from "react";

import { Flexbox } from "@/Library/Common/Grids/Grids";
import {
	BlueBg,
	Hint,
	Toggle,
	ToggleBtn,
	ToggleInput,
	ToggleLabel,
	WhiteBg,
} from "@/Library/Common/ToggleButton/ToggleButton.styles";

interface ToggleType extends React.ComponentPropsWithoutRef<"input"> {
	disable?: boolean;
	label?: string;
	hint?: string;
	id?: string;
}

const ToggleButton = ({ disable, label, hint, id, ...rest }: ToggleType) => {
	return (
		<>
			<Flexbox $gap={8} $align={"center"}>
				<Toggle disable={disable}>
					<ToggleInput {...rest} disabled={disable} type="checkbox" id={id} />
					<ToggleBtn />
					<WhiteBg id={"white"}></WhiteBg>
					<BlueBg disable={disable} id={"blue"} />
				</Toggle>

				{(label || hint) && (
					<Flexbox $gap={4} $direction={"column"}>
						{label && <ToggleLabel htmlFor={id}> {label}</ToggleLabel>}
						{hint && <Hint> {hint}</Hint>}
					</Flexbox>
				)}
			</Flexbox>
		</>
	);
};

export default ToggleButton;
