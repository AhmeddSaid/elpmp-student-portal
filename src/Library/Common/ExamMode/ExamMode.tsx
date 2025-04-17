"use client";
import React, { useState } from "react";
import Button from "@/Library/Common/Button/Button";
import {
	ExamModeCompare,
	ExamModeDescription,
	ExamModeShell,
	ExamModeTitle,
} from "@/Library/Common/ExamMode/ExamMode.styles";
import { Flexbox } from "@/Library/Common/Grids/Grids";
import styles from "@/Library/Common/Grids/Spaces.module.css";
import uuid from "@/Utils/uuid";

const ExamMode = ({
	title,
	describtion,
	isSelected = false,
}: {
	title: string;
	describtion: { name: string; active: boolean }[];
	isSelected?: boolean;
}) => {
	const [isHovered, setIsHovered] = useState(false);

	return (
		<>
			<ExamModeShell
				onMouseEnter={() => setIsHovered(true)}
				onMouseLeave={() => setIsHovered(false)}
			>
				{/*<LightBulb />*/}
				<ExamModeTitle>{title}</ExamModeTitle>
				<ExamModeDescription>
					<div>
						{describtion.map(desc => (
							<div key={uuid()}>
								<Flexbox $gap={4} $align={"center"} key={uuid()}>
									{desc.active ? (
										<svg
											width="24"
											height="24"
											viewBox="0 0 24 24"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												fillRule="evenodd"
												clipRule="evenodd"
												d="M12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4ZM2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12Z"
												fill="#00823E"
											/>
											<path
												fillRule="evenodd"
												clipRule="evenodd"
												d="M15.7071 9.29289C16.0976 9.68342 16.0976 10.3166 15.7071 10.7071L11.7071 14.7071C11.3166 15.0976 10.6834 15.0976 10.2929 14.7071L8.29289 12.7071C7.90237 12.3166 7.90237 11.6834 8.29289 11.2929C8.68342 10.9024 9.31658 10.9024 9.70711 11.2929L11 12.5858L14.2929 9.29289C14.6834 8.90237 15.3166 8.90237 15.7071 9.29289Z"
												fill="#00823E"
											/>
										</svg>
									) : (
										<svg
											width="24"
											height="24"
											viewBox="0 0 24 24"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M8.4 17L12 13.4L15.6 17L17 15.6L13.4 12L17 8.4L15.6 7L12 10.6L8.4 7L7 8.4L10.6 12L7 15.6L8.4 17ZM12 22C10.6167 22 9.31667 21.7375 8.1 21.2125C6.88333 20.6875 5.825 19.975 4.925 19.075C4.025 18.175 3.3125 17.1167 2.7875 15.9C2.2625 14.6833 2 13.3833 2 12C2 10.6167 2.2625 9.31667 2.7875 8.1C3.3125 6.88333 4.025 5.825 4.925 4.925C5.825 4.025 6.88333 3.3125 8.1 2.7875C9.31667 2.2625 10.6167 2 12 2C13.3833 2 14.6833 2.2625 15.9 2.7875C17.1167 3.3125 18.175 4.025 19.075 4.925C19.975 5.825 20.6875 6.88333 21.2125 8.1C21.7375 9.31667 22 10.6167 22 12C22 13.3833 21.7375 14.6833 21.2125 15.9C20.6875 17.1167 19.975 18.175 19.075 19.075C18.175 19.975 17.1167 20.6875 15.9 21.2125C14.6833 21.7375 13.3833 22 12 22ZM12 20C14.2333 20 16.125 19.225 17.675 17.675C19.225 16.125 20 14.2333 20 12C20 9.76667 19.225 7.875 17.675 6.325C16.125 4.775 14.2333 4 12 4C9.76667 4 7.875 4.775 6.325 6.325C4.775 7.875 4 9.76667 4 12C4 14.2333 4.775 16.125 6.325 17.675C7.875 19.225 9.76667 20 12 20Z"
												fill="#DD503F"
											/>
										</svg>
									)}
									<ExamModeCompare style={{ marginTop: "0.3rem" }}>{desc.name}</ExamModeCompare>
								</Flexbox>
							</div>
						))}
					</div>
				</ExamModeDescription>
				<div className={styles.marginTop16}>
					<Button
						body={isSelected ? "Selected" : "Select"}
						bgcolor={isSelected ? "primary" : isHovered ? "primary" : "gost"}
					/>
				</div>
			</ExamModeShell>
		</>
	);
};

export default ExamMode;
