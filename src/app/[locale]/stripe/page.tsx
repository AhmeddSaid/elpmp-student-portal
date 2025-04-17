"use client";
import { Elements } from "@stripe/react-stripe-js";
// eslint-disable-next-line
import { loadStripe } from "@stripe/stripe-js";
import { redirect } from "next/navigation";
import React from "react";
import ConvetToSubcurrncy from "../../../../StripeLib/ConvertToSubCurrncy";
import PmPExamCard from "@/Library/Common/ExamCard/PmPExamCard";
import { Col, Row } from "@/Library/Common/Grids/Grids";
import CheckOut from "@/Library/pages/CheckOut/CheckOut";

if (process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY === undefined) {
	throw new Error("NEXT_PUBLIC is undefined");
}
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);
const amount = 500;

const Page = () => {
	redirect("/404");
	return (
		<>
			<p>has request</p>
			<span>{amount}</span>

			<Elements
				stripe={stripePromise}
				options={{
					mode: "payment",
					amount: ConvetToSubcurrncy(amount),
					currency: "usd",
				}}
			>
				<CheckOut amount={amount} />
			</Elements>
			<Row $justify="center">
				<Col $md={4}>
					<PmPExamCard />
				</Col>
			</Row>

			{/*<ToggleButton />*/}
		</>
	);
};

export default Page;
