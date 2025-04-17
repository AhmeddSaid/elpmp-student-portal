"use client";
import React, { useState } from "react";
import { SubExamAr, SubExamEn } from "../../../../messages/Exam/SubExam";
import { TabContent, TabItem, TabList, TabsContainer } from "./Tabs.styles";
import { Locale } from "@/Global";
import { Flexbox } from "@/Library/Common/Grids/Grids";
import ChatIcon from "@/Library/Common/Icongraphy/ChatIcon/ChatIcon";
import Staricon from "@/Library/Common/Icongraphy/StarIcon/Staricon";
import QA from "@/Library/Common/QA/QA";
import RatingPage from "@/Library/Common/RateExam/RatingPage";
import Taps from "@/Library/Common/Taps/Taps";

const TabsComponent = ({
	data,
	examDiscussion,
	subExamId,
	locale,
}: {
	RatingPopUp: boolean;
	SubExamNameSlug: string;
	ExamNameSlug: string;
	data: {
		user: {
			id: string;
			createdAt: string;
			rating: number;
			title: string;
			comment: string;
			totalLikes: string;
			userId: {
				UserInformation: { firstName: string; lastName: string }[];
			};
		};
		averageRating: number;
		totalReviews: number;
		Rating: [];
		subExamReview: {
			userId: { UserInformation: { firstName: string; lastName: string }[] };
			createdAt: string;
			rating: number;
			comment: string;
			title: string;
			totalLikes: string;
		}[];
	};
	examDiscussion?: {
		id: string;
		comment: string;
		createdAt: string;
		totalLikes: string;
		userId: { UserInformation: { firstName: string; lastName: string }[] };
	}[];
	subExamId: string;
} & Locale) => {
	interface Tab {
		id: string;
		label: React.ReactNode;
		content: React.ReactNode;
	}

	const t = locale === "en" ? SubExamEn : SubExamAr;
	// console.log(data, "sdfg");
	const tabsData: Tab[] = [
		// {
		// 	id: "History",
		// 	label: (
		// 		<>
		// 			<Flexbox align="center">
		// 				<CalnderIcon />
		// 				<Taps label={t.taps.testHistory} />
		// 			</Flexbox>
		// 		</>
		// 	),
		// 	content: (
		// 		<>
		// 			<ExamHistoryy ExamHistoryResponse={ExamHistoryResponse} locale={locale} />
		// 		</>
		// 	),
		// },
		{
			id: "Rate_Exam",
			label: (
				<>
					<Flexbox $align="center">
						<Staricon />
						<Taps label={t.taps.rating} />
					</Flexbox>
				</>
			),
			content: <RatingPage locale={locale} data={data} />,
		},
		{
			id: "FAQ",
			label: (
				<>
					<Flexbox $align="center">
						<ChatIcon />
						<Taps label={t.taps.discussion} />
					</Flexbox>
				</>
			),
			content: <QA locale={locale} subExamId={subExamId} examDiscussion={examDiscussion} />,
		},
	];
	const [activeTab, setActiveTab] = useState("Rate_Exam");

	const handleTabClick = (tabId: string) => {
		setActiveTab(tabId);
	};

	return (
		<>
			<TabsContainer>
				<TabList>
					{tabsData.map(tab => (
						<TabItem key={tab.id} active={tab.id === activeTab}>
							<a onClick={() => handleTabClick(tab.id)}>{tab.label}</a>
						</TabItem>
					))}
				</TabList>
				<TabContent>
					{tabsData.map(tab => (
						<div className={tab.id === activeTab ? "" : "displayNone"} key={tab.id}>
							{tab.content}
						</div>
					))}
				</TabContent>
			</TabsContainer>
		</>
	);
};

export default TabsComponent;
