import React, { ReactNode, useRef } from "react";
import {
	DropDownButton,
	DropDownWrapper,
	Label,
	OptionMenu,
	OptionRow,
	SVG,
	SvgTest,
} from "./DropDown.styles";

interface DropDownNewProps {
	headerContent: ReactNode;
	options?: ReactNode[];
	changeOptionName?: (optionName: string) => void;
	isOpen: boolean;
	toggleDropdown: () => void;
}

const DropDownNew: React.FC<DropDownNewProps> = ({
	headerContent,
	options = [],
	changeOptionName,
	isOpen,
	toggleDropdown,
}) => {
	const dropdownEl = useRef<HTMLDivElement | null>(null);

	return (
		<DropDownWrapper>
			<div ref={dropdownEl}>
				<DropDownButton onClick={toggleDropdown}>
					{headerContent}
					<SVG isOpen={isOpen}>
						{" "}
						{/* Rotate the SVG based on isOpen */}
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M19 9l-7 7-7-7"
							/>
						</svg>
					</SVG>
				</DropDownButton>
				<OptionMenu isOpen={isOpen} role="menu">
					{options.map((option, key) => (
						<OptionRow
							key={key}
							onClick={() => changeOptionName && changeOptionName(option as string)}
						>
							<Label>{option}</Label>
							<SvgTest />
						</OptionRow>
					))}
				</OptionMenu>
			</div>
		</DropDownWrapper>
	);
};

export default DropDownNew;
