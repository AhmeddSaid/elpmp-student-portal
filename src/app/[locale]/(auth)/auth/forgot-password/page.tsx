import { Metadata } from "next";
import React from "react";
import { MetaTags } from "@/Library/Common/Metatags/Metatags";
import ForgotPasswordPage from "@/Library/pages/Auth/ForgotPassword/ForgotPasswordPage";

export const metadata: Metadata = MetaTags({
	title: "Forgot password",
	description: "Forgot password",
	keywords: "Forgot password",
	url: `${process.env.DOMAIN}/forgot-password`,
	language: "en-us",
	image: "/dist/logo.png",
});

const Page = () => {
	return (
		<>
			<ForgotPasswordPage />
		</>
	);
};

export default Page;
