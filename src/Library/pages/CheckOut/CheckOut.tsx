// "use client";
// import { PaymentElement, useElements, useStripe } from "@stripe/react-stripe-js";
// import React, { useEffect, useState } from "react";
// import convertToSubCurrncy from "../../../../StripeLib/ConvertToSubCurrncy";
// import { Col, Row } from "@/Library/Common/Grids/Grids";
//
// const CheckOut = ({ amount }: { amount: number }) => {
// 	const stripe = useStripe();
// 	const elements = useElements;
//
// 	const [errorMessage, setErrorMessage] = useState<string>();
// 	const [clientSecret, setClientSecret] = useState("aaa");
// 	const [loading, setLoading] = useState(false);
//
// 	useEffect(() => {
// 		fetch("api/create-payment-intent", {
// 			method: "POST",
// 			headers: { "Content-Type": "application/json" },
// 			body: JSON.stringify({ amount: convertToSubCurrncy(amount) }),
// 		})
// 			.then(async res => res.json())
// 			.then(data => setClientSecret(data.clientSecret));
// 	}, [amount]);
//
// 	// const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
// 	// 	event.preventDefault();
// 	// 	setLoading(true);
// 	// 	if (!stripe || !elements) {
// 	// 		return;
// 	// 	}
// 	//
// 	// 	const { errorM: submitError } = await elements.submit();
// 	//
// 	// 	if (submitError) {
// 	// 		setErrorMessage(submitError.message);
// 	// 		setLoading(false);
// 	// 		return;
// 	// 	}
// 	//
// 	// 	const { error } = await stripe.confirmPayment({
// 	// 		elements,
// 	// 		clientSecret,
// 	// 		confirmParams: {
// 	// 			return_url: `http://localhost:3000/payment-success?amount=${amount}`,
// 	// 		},
// 	// 	});
// 	// };
//
// 	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
// 		event.preventDefault();
// 		setLoading(true);
//
// 		if (!stripe || !elements) {
// 			return;
// 		}
//
// 		const { error: submitError } = await elements.submit();
//
// 		if (submitError) {
// 			setErrorMessage(submitError.message);
// 			setLoading(false);
// 			return;
// 		}
//
// 		const { error } = await stripe.confirmPayment({
// 			elements,
// 			clientSecret,
// 			confirmParams: {
// 				return_url: `http://www.localhost:3000/payment-success?amount=${amount}`,
// 			},
// 		});
//
// 		if (error) {
// 			// This point is only reached if there's an immediate error when
// 			// confirming the payment. Show the error to your customer (for example, payment details incomplete)
// 			setErrorMessage(error.message);
// 		} else {
// 			// The payment UI automatically closes with a success animation.
// 			// Your customer is redirected to your `return_url`.
// 		}
//
// 		setLoading(false);
// 	};
//
// 	return (
// 		<>
// 			<Row justify="center">
// 				<Col md={4}>
// 					<form onSubmit={handleSubmit}>
// 						{clientSecret && <PaymentElement />}
//
// 						{errorMessage && <div>{errorMessage}</div>}
//
// 						<button type={"submit"}>pay</button>
// 					</form>
// 				</Col>
// 			</Row>
// 		</>
// 	);
// };
//
// export default CheckOut;

"use client";

import { PaymentElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";
import convertToSubCurrncy from "../../../../StripeLib/ConvertToSubCurrncy";

const CheckoutPage = ({ amount }: { amount: number }) => {
	const stripe = useStripe();
	const elements = useElements();
	const [errorMessage, setErrorMessage] = useState<string>();
	const [clientSecret, setClientSecret] = useState("1");
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		fetch("/api/create-payment-intent", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ amount: convertToSubCurrncy(amount) }),
		})
			.then(res => res.json())
			.then(data => setClientSecret(data.clientSecret));
	}, [amount]);

	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		setLoading(true);

		if (!stripe || !elements) {
			return;
		}

		const { error: submitError } = await elements.submit();

		if (submitError) {
			setErrorMessage(submitError.message);
			setLoading(false);
			return;
		}

		const { error } = await stripe.confirmPayment({
			elements,
			clientSecret,
			confirmParams: {
				// eslint-disable-next-line
				return_url: `http://www.localhost:3000/payment-success?amount=${amount}`,
			},
		});

		if (error) {
			setErrorMessage(error.message);
		} else {
			// The payment UI automatically closes with a success animation.
			// Your customer is redirected to your `return_url`.
		}

		setLoading(false);
	};

	if (!clientSecret || !stripe || !elements) {
		return (
			<div className="flex items-center justify-center">
				<div
					className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white"
					role="status"
				>
					<span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
						Loading...
					</span>
				</div>
			</div>
		);
	}

	return (
		<form onSubmit={handleSubmit} className="bg-white p-2 rounded-md">
			{clientSecret && <PaymentElement />}

			{errorMessage && <div>{errorMessage}</div>}

			<button
				disabled={!stripe || loading}
				className="text-white w-full p-5 bg-black mt-2 rounded-md font-bold disabled:opacity-50 disabled:animate-pulse"
			>
				{!loading ? `Pay $${amount}` : "Processing..."}
			</button>
		</form>
	);
};

export default CheckoutPage;
