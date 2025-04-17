"use client";
import Image from "next/image";
import React from "react";
import { useDispatch } from "react-redux";
import { SubExamAr, SubExamEn } from "../../../../messages/Exam/SubExam";
import {
	Bar,
	BarGrayBG,
	BorderDiv,
	BreakdownRow,
	Header,
	Helpful,
	PageWrapper,
	Review,
	ReviewBreakdown,
	ReviewContent,
	ReviewDate,
	ReviewerName,
	ReviewList,
	ReviewText,
	StatLabel,
	StatValue,
	Title,
} from "./RatingPage.styles";
import Avatar from "@/Library/Common/Avatar/Avatar";
import Button from "@/Library/Common/Button/Button";
import { Col, Flexbox, Row } from "@/Library/Common/Grids/Grids";
import styles from "@/Library/Common/Grids/Spaces.module.css";
import Like from "@/Library/Common/Icongraphy/Like/Like";
import Rating from "@/Library/Common/Rating/Rating";
import DateFormatter from "@/Utils/DateFormatter";
import getInitials from "@/Utils/getInitials";
import { openAndClosePopUp } from "@/lib/OpenAndClosePopUp";

const RatingPage = ({
	// RatingPopUp,
	// SubExamNameSlug,
	// ExamNameSlug,
	data,
	locale,
}: {
	// RatingPopUp: boolean;
	// SubExamNameSlug: string;
	// ExamNameSlug: string;

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
	locale: string;
}) => {
	const t = locale === "en" ? SubExamEn : SubExamAr;
	const dispatch = useDispatch();
	const rounded = data?.averageRating <= 1 ? 1 : Math.round(data?.averageRating * 10) / 10;

	// console.log(data.user.userId.UserInformation[0].firstName, "dataaaa");
	return (
		<>
			<Header>
				<Title>{t.taps.ratingHeader}</Title>
				{data.user === null && (
					<Button
						body={"Add Rating"}
						onclick={() => {
							dispatch(openAndClosePopUp());
						}}
					/>
				)}{" "}
			</Header>

			{data?.totalReviews <= 0 && data.totalReviews === null && (
				<Flexbox $direction={"column"} $gap={16} $align={"center"} $justify={"center"}>
					<Image src={"/404.png"} alt={""} width={270} height={280} />
					<p>no reviews</p>
				</Flexbox>
			)}
			{data?.totalReviews > 0 && (
				<>
					<PageWrapper>
						<Row $justify="space-between" className={styles.marginTop48}>
							<Col $md={3}>
								<StatValue>{data.totalReviews}</StatValue>
								<StatLabel>{t.taps.totalReviewbody}</StatLabel>
							</Col>
							<Col $md={3}>
								<BorderDiv>
									<div className={"StateValue"}>
										<StatValue>{rounded}</StatValue>
										<Rating rating={rounded} />
										<StatLabel>{t.taps.totalRatingBody}</StatLabel>
									</div>
								</BorderDiv>
							</Col>
							<Col $md={5}>
								<ReviewBreakdown>
									{[...Array(5)].map((_, i) => {
										return (
											<>
												<BreakdownRow>
													<Col $md={2}>
														<p>{i + 1}</p>
													</Col>

													<Col $md={6}>
														<BarGrayBG>
															<Bar
																// @ts-ignore
																width={(data.Rating[`${i + 1}star`] / data.totalReviews) * 100}
															/>
														</BarGrayBG>
													</Col>

													<Col $md={4}>
														{/*@ts-ignore*/}
														<p>{`${Math.round((data.Rating[`${i + 1}star`] / data.totalReviews) * 100)}% `}</p>
													</Col>
												</BreakdownRow>
											</>
										);
									})}
								</ReviewBreakdown>
							</Col>
						</Row>
						<ReviewList>
							{data.user?.id && (
								<>
									<Review className={"userRating"}>
										<Avatar Size={"md"} Name={""}></Avatar>
										<ReviewContent>
											<ReviewerName>
												{data.user.userId.UserInformation[0].firstName}{" "}
												{data.user.userId.UserInformation[0].lastName}
											</ReviewerName>
											<ReviewDate>{DateFormatter(data.user.createdAt, locale)}</ReviewDate>
											<Flexbox $justify={"start"}>
												<Rating rating={data.user.rating} />
											</Flexbox>
											<ReviewText>{data.user.title}</ReviewText>
											<ReviewText>{data.user.comment}</ReviewText>
											<Helpful>
												{t.taps.wasThisHelpful} <Like />
												{data.user.totalLikes}
											</Helpful>
										</ReviewContent>
									</Review>
								</>
							)}

							{data.subExamReview.map(
								(
									review: {
										userId: { UserInformation: { firstName: string; lastName: string }[] };
										createdAt: string;
										rating: number;
										title: string;
										comment: string;
										totalLikes: string;
									},
									i: number,
								) => {
									return (
										<>
											<Review>
												<Avatar
													Size={"md"}
													Name={getInitials(review.userId.UserInformation[0].firstName)}
												></Avatar>
												<ReviewContent>
													<ReviewerName>
														{`${review.userId.UserInformation[0].firstName} ${data.subExamReview[i].userId.UserInformation[0].lastName}`}
													</ReviewerName>
													<ReviewDate>{DateFormatter(review.createdAt, locale)}</ReviewDate>
													<Flexbox $justify={"start"}>
														<Rating rating={review.rating} />
													</Flexbox>
													<ReviewText>{review.title}</ReviewText>
													<ReviewText>{review.comment}</ReviewText>
													<Helpful>
														{t.taps.wasThisHelpful} <Like />
														{review.totalLikes}
													</Helpful>
												</ReviewContent>
											</Review>
										</>
									);
								},
							)}
						</ReviewList>
					</PageWrapper>
				</>
			)}
		</>
	);
};

export default RatingPage;
