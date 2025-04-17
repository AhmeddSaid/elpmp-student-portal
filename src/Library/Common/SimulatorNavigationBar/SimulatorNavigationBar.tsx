"use client";
import React, { Dispatch, SetStateAction, useState } from "react";
import styles from "./../../Common/Grids/Spaces.module.css";
import Button from "@/Library/Common/Button/Button";
import { Flexbox } from "@/Library/Common/Grids/Grids";
import WhiteLeftArrow from "@/Library/Common/Icongraphy/WhiteLeftArrow/WhiteLeftArrow";
import {
	NumberTag,
	SimulatorNavigationBarShell,
	TabShell,
} from "@/Library/Common/SimulatorNavigationBar/SimulatorNavigationBar.styles";

const SimulatorNavigationBar = ({
	setOpenAllQuestion,
}: {
	setOpenAllQuestion: Dispatch<SetStateAction<boolean>>;
}) => {
	const [ActiveTab, setActiveTab] = useState(1);

	return (
		<>
			<SimulatorNavigationBarShell>
				<Flexbox $justify={"space-between"}>
					<div
						onClick={() => setOpenAllQuestion(prev => !prev)}
						className={`${styles.marginTop12} ${styles.marginBottom12}`}
					>
						<Button icon={<WhiteLeftArrow />} body={"Back to exam"} />
					</div>

					<Flexbox>
						<TabShell
							active={ActiveTab === 1}
							onClick={() => setActiveTab(1)}
							className={"tab"}
							$gap={8}
							$align={"center"}
						>
							<p className={"BodyTag"}>Review all</p>

							<NumberTag active={ActiveTab === 1}>120</NumberTag>
						</TabShell>
						<TabShell
							active={ActiveTab === 2}
							onClick={() => setActiveTab(2)}
							className={"tab"}
							$gap={8}
							$align={"center"}
						>
							<p className={"BodyTag"}>Review incomplete</p>

							<NumberTag active={ActiveTab === 2}>84</NumberTag>
						</TabShell>{" "}
						<TabShell
							active={ActiveTab === 3}
							onClick={() => setActiveTab(3)}
							className={"tab"}
							$gap={8}
							$align={"center"}
						>
							<p className={"BodyTag"}>Review flagged</p>

							<NumberTag active={ActiveTab === 3}>12</NumberTag>
						</TabShell>
					</Flexbox>
				</Flexbox>
			</SimulatorNavigationBarShell>
		</>
	);
};

export default SimulatorNavigationBar;
