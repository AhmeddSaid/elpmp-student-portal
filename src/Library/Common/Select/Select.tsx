"use client";
import React, { ReactNode, useState } from "react";
import ChevronBlack from "@/Library/Common/Icongraphy/ChevronBlack/ChevronBlack";
import {
	SelectCaption,
	SelectChevronIcon,
	SelectContainer,
	SelectLabel,
	SelectOption,
} from "@/Library/Common/Select/Select.styles";
import uuid from "@/Utils/uuid";

interface SelectType extends React.ComponentPropsWithoutRef<"select"> {
	statuss?: string;
	label?: string;
	caption?: string;
	option: { name: string; id: string }[];
	icon?: ReactNode;
	id: string;
	locale?: "en" | "ar";
}

const Select = ({ statuss, label, caption, option, icon, id, locale, ...rest }: SelectType) => {
	const [clicked, setClicked] = useState(false);

	return (
		<>
			<SelectLabel htmlFor={id}>{label}</SelectLabel>
			<SelectContainer onClick={() => setClicked(prev => !prev)} rotateArrow={clicked}>
				<SelectOption {...rest} id={id} statuss={statuss} icon={icon}>
					{option.map(item => {
						return (
							<option key={uuid()} value={item.id}>
								{item.name}
							</option>
						);
					})}
				</SelectOption>

				<SelectChevronIcon locale={locale} id={"chevron"}>
					<ChevronBlack />
				</SelectChevronIcon>
			</SelectContainer>
			<SelectCaption statuss={statuss}>{caption}</SelectCaption>
		</>
	);
};

export default Select;
