"use client";
import React, { useState } from "react";
import {
	Container,
	ContentWrapper,
	Header,
	OptionDescription,
	OptionDetails,
	OptionGroup,
	SwitchContainer,
	Title,
	ToggleSwitch,
} from "./Notifcations.styles";
import Button from "@/Library/Common/Button/Button";
import Checkbox from "@/Library/Common/Checkbox/Checkbox";
import { BigParagraph } from "@/Library/Common/Typograhy/Typography";

type Option = {
	title: string;
	description: string;
	checked: boolean;
};

const Notification: React.FC = () => {
	const [options, setOptions] = useState<Option[]>([
		{
			title: "Project feedback",
			description: "Get notified whenever your project receives a new review.",
			checked: true,
		},
		{
			title: "New Content Announcements",
			description: "Get all the latest updates on new content releases.",
			checked: true,
		},
		{
			title: "Design Tips & Tricks",
			description: "Make the most of your learning experience with practical tips.",
			checked: true,
		},
		{
			title: "Special Promotions",
			description: "Receive special offers you don’t want to miss.",
			checked: true,
		},
		{
			title: "Weekly Progress Summary",
			description: "Track your course progress with weekly reports.",
			checked: true,
		},
		{
			title: "Practice Reminder",
			description: "Set reminders for practicing regularly.",
			checked: true,
		},
		{
			title: "Job Opportunities",
			description: "Get job postings delivered weekly.",
			checked: true,
		},
	]);

	const [unsubscribe, setUnsubscribe] = useState(false);

	const handleOptionChange = (index: number) => {
		const newOptions = [...options];
		newOptions[index].checked = !newOptions[index].checked;
		setOptions(newOptions);
	};

	const handleUnsubscribeChange = () => {
		setUnsubscribe(!unsubscribe);
	};

	return (
		<>
			<Container>
				<Header>
					<Title>Email Preferences</Title>
					<Button body={"Save"} />
				</Header>

				{/* Pass the unsubscribe prop to ContentWrapper */}
				<ContentWrapper unsubscribe={unsubscribe}>
					{options.map((option, index) => (
						<OptionGroup key={index}>
							<Checkbox
								id={`option-${index}`}
								label={""}
								checked={option.checked}
								onChange={() => handleOptionChange(index)}
							/>
							<OptionDetails>
								<BigParagraph>{option.title}</BigParagraph>
								<OptionDescription unsubscribe={unsubscribe}>
									{option.description}
								</OptionDescription>
							</OptionDetails>
						</OptionGroup>
					))}
				</ContentWrapper>

				<SwitchContainer>
					<BigParagraph>Unsubscribe From Everything</BigParagraph>
					<ToggleSwitch>
						<input type="checkbox" checked={unsubscribe} onChange={handleUnsubscribeChange} />
						<span></span>
					</ToggleSwitch>
				</SwitchContainer>
			</Container>
		</>
	);
};

export default Notification;
