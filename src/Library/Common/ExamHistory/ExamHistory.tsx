import React from "react";
import ExamHistory from "@/Library/pages/ExamHistory/ExamHistory";

const ExamHistoryy = async ({
	locale,
	ExamHistoryResponse,
}: {
	locale: string;
	ExamHistoryResponse: {
		data: {
			data: {
				data: {
					subExam: string;
					score: number;
					timeSpent: string;
					createdAt: string; // Add this line
					subExamId: {
						nameEn: string;
						nameAr: string;
						examId: { nameEn: string; nameAr: string };
					};
				}[];
				lastPage: number;
			};
		};
	};
}) => {
	// @ts-ignore
	return (
		<>
			<ExamHistory
				// @ts-ignore
				data={ExamHistoryResponse?.data?.data?.data}
				locale={locale}
				url={""}
				lastPage={0}
			/>
		</>
	);
};

export default ExamHistoryy;
