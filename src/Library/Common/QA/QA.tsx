"use client";
import { useFormik } from "formik";
import React from "react";
import { toast } from "sonner";
import * as yup from "yup";
import { SubExamAr, SubExamEn } from "../../../../messages/Exam/SubExam";
import {
	Comment,
	CommentActions,
	CommentAuthor,
	CommentContent,
	CommentInput,
	CommentList,
	CommentSection,
	CommentText,
	Header,
	Helpful,
	Input,
	PageWrapper,
	SubmitButton,
	Title,
} from "./QAstyled";
import Avatar from "@/Library/Common/Avatar/Avatar";
import Like from "@/Library/Common/Icongraphy/Like/Like";
import DateFormatter from "@/Utils/DateFormatter";
import uuid from "@/Utils/uuid";
import { addDiscussion } from "@/app/[locale]/(exams)/exam/[examName]/[subExamName]/addDiscussion/action";

const QA = ({
	examDiscussion,
	subExamId,
	locale,
}: {
	examDiscussion?: {
		id: string;
		comment: string;
		createdAt: string;
		totalLikes: string;
		userId: { UserInformation: { firstName: string; lastName: string }[] };
	}[];
	subExamId: string;
	locale: string;
}) => {
	const t = locale === "en" ? SubExamEn : SubExamAr;

	const validationSchema = yup.object({
		comment: yup.string().required("Please enter comment"),
	});

	const initialValues = {
		comment: "",
	};

	async function handleAddDiscussion(formValues: { comment: string }) {
		const action = await addDiscussion(formValues, subExamId);
		if (action.status.message.en === "Done") {
			toast.success("discussion added successfully");
			// eslint-disable-next-line @typescript-eslint/no-use-before-define
			formik.values.comment = "";
		} else {
			toast.error("discussion add Failed");
		}
	}

	const formik = useFormik({ initialValues, validationSchema, onSubmit: handleAddDiscussion });

	return (
		<PageWrapper>
			<Header>
				<Title>{t.taps.discussion}</Title>
				{/*<SortButton>Newest questions</SortButton>*/}
			</Header>
			<CommentSection>
				<form onSubmit={formik.handleSubmit}>
					<CommentInput>
						<Avatar Size={"md"} Name={"a"} />
						<Input
							name={"comment"}
							id={"comment"}
							type={"text"}
							value={formik.values.comment}
							onBlur={formik.handleBlur}
							onChange={formik.handleChange}
							placeholder="Write a Comment..."
						/>
						<SubmitButton type={"submit"}>➤</SubmitButton>
					</CommentInput>
				</form>

				{examDiscussion?.map(
					(item: {
						id: string;
						comment: string;
						createdAt: string;
						totalLikes: string;
						userId: { UserInformation: { firstName: string; lastName: string }[] };
					}) => {
						return (
							<CommentList key={uuid()}>
								<Comment>
									<Avatar Size={"md"} Name={"a"} />
									<CommentContent>
										<CommentAuthor>
											{item.userId.UserInformation[0].firstName}{" "}
											{item.userId.UserInformation[0].lastName}{" "}
										</CommentAuthor>
										<CommentText>{item.comment}</CommentText>
										<CommentActions>
											{/*<span>Reply</span>*/}
											<span>{DateFormatter(item.createdAt, locale)}</span>
										</CommentActions>
										<Helpful>
											Was this helpful? <Like /> {item.totalLikes}
											{/*<Dislike />*/}
										</Helpful>
										{/*<ViewReplies>View replies (10)</ViewReplies>*/}
									</CommentContent>
								</Comment>
							</CommentList>
						);
					},
				)}
			</CommentSection>
		</PageWrapper>
	);
};

export default QA;
