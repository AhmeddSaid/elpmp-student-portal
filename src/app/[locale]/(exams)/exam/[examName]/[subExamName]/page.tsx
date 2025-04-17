import React, { Suspense } from "react";
import { Locale } from "@/Global";
import PageSkeleton from "@/Library/Common/skeleton/PageSkeleton/PageSkeleton";
import Exam2Page from "@/Library/pages/ExamPage/Exam2Page";
import { GetData } from "@/Utils/AxiosFetch";

export const dynamic = "force-dynamic";

const Page = async ({ params }: { params: { subExamName: string; examName: string } & Locale }) => {
	const subExam = (await GetData(`/subExam/slug/${params.subExamName}`)) as {
		data: {
			data: {
				data: {
					tagId: { questionsCount: number };
					examId: { questionsCount: string };
					durationPerQuestion: string;
					passingScore: string;
					nameEn: string;
					descriptionEn: string;
					id: string;
				};
			};
		};
	};
	console.log(subExam.data.data.data, "subexam");
	const subExamReview = (await GetData(`/subExamReview/${params.subExamName}`)) as {
		data: {
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
		};
	};

	const res = (await GetData(`/subExam/slug/${params.subExamName}`)) as {
		data: {
			data: {
				data: { id: string };
			};
		};
	};

	const subExamDiscussion = (await GetData(`/subExamDiscussion/${params.subExamName}`)) as {
		data: { data: { data: { data: { ExamDiscussion: [] } } } };
	};

	const ActiveSubExam = await GetData(`/exam-session/sub-exam/${subExam?.data?.data?.data.id}`);
	// const responseData = (await GetData("/exam-history/user")) as {
	// 	data: {
	// 		data: {
	// 			data: {
	// 				subExam: string;
	// 				score: number;
	// 				timeSpent: string;
	// 				subExamId: {
	// 					nameEn: string;
	// 					nameAr: string;
	// 					examId: { nameEn: string; nameAr: string };
	// 				};
	// 			}[];
	// 		};
	// 	};
	// };

	const arr = [];
	// @ts-ignore
	if (!(ActiveSubExam?.data?.data === null)) {
		// @ts-ignore
		arr.push(ActiveSubExam.data.data);
	}

	const totalTime =
		parseInt(String(subExam.data.data.data.tagId.questionsCount)) *
		parseInt(subExam.data?.data?.data.durationPerQuestion);

	return (
		<Suspense fallback={<PageSkeleton />}>
			<Exam2Page
				activeSubExam={arr}
				// @ts-ignore
				questionsCount={subExam.data.data.data.tagId.questionsCount}
				durationPrtExam={(totalTime / 60).toString()}
				PassingScore={subExam.data?.data?.data.passingScore}
				data={subExamReview.data?.data}
				examDiscussion={subExamDiscussion.data?.data?.data.data.ExamDiscussion}
				name={subExam.data?.data?.data?.nameEn}
				desc={subExam.data?.data?.data.descriptionEn}
				subExamId={subExam.data?.data?.data?.id}
				locale={params.locale}
				ExamNameSlug={params.examName}
				SubExamNameSlug={params.subExamName}
				res={res}
			/>
		</Suspense>
	);
};

export default Page;
