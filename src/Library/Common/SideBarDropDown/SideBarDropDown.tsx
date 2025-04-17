import Link from "next/link";
import React, { ReactNode } from "react";
import { useSelector } from "react-redux";
import { Flexbox } from "@/Library/Common/Grids/Grids";
import ArrowUp from "@/Library/Common/Icongraphy/ArrowUp/ArrowUp";
import {
	SBDropDownBody,
	SBDropDownHeader,
	SBDropDownOption,
	SBDropDownShell,
	SideBarDropDownParagraph,
} from "@/Library/Common/SideBarDropDown/SideBarDropDown.styles";
import { MainRootState } from "@/lib/Store";

const SideBarDropDown = ({
	title,
	subTitles,
	exam,
	icon,
}: {
	title: string;
	subTitles: { nameEn: string; slug: string }[];
	icon?: ReactNode;
	exam: string;
}) => {
	const { isOpen } = useSelector((state: MainRootState) => state.OpenAndCloseSideBar);

	const [SBDropDown, setSBDropDown] = React.useState(false);
	// const done = true;
	return (
		<>
			<SBDropDownShell>
				<SBDropDownHeader
					SBDisOpen={SBDropDown}
					$justify={"space-between"}
					$align={"center"}
					onClick={() => setSBDropDown(prev => !prev)}
				>
					<Flexbox $align={"center"} $gap={10}>
						{icon}

						{isOpen && <SideBarDropDownParagraph>{title}</SideBarDropDownParagraph>}
					</Flexbox>

					{isOpen && (
						<div id={"ArrowDownRotate"}>
							<ArrowUp />
						</div>
					)}
				</SBDropDownHeader>

				<SBDropDownBody className={SBDropDown ? "" : "displayNone"}>
					{subTitles.map(item => {
						return (
							<>
								<SBDropDownOption as={Link} href={`/exam/${exam}/${item.slug}`}>
									<span>{item.nameEn}</span>

									{/*<SBDropDownOptionState selected>{done && <CorrectIcon />}</SBDropDownOptionState>*/}
								</SBDropDownOption>
							</>
						);
					})}
				</SBDropDownBody>
			</SBDropDownShell>
		</>
	);
};

export default SideBarDropDown;
