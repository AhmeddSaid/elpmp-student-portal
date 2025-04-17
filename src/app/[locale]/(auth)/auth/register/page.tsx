import { Metadata } from "next";
import React from "react";
import { Locale } from "@/Global";
import styles from "@/Library/Common/Grids/Spaces.module.css";
import { MetaTags } from "@/Library/Common/Metatags/Metatags";
import EmailRegister from "@/Library/pages/Auth/Register/EmailRegister";

export const metadata: Metadata = MetaTags({
	title: "Register",
	description: "Register",
	keywords: "Register",
	url: `${process.env.DOMAIN}/register`,
	language: "en-us",
	image: "/dist/logo.png",
});

const Page = ({ params }: { params: Locale }) => {
	return (
		<div className={styles.marginBottom80}>
			<EmailRegister locale={params.locale} />
		</div>
	);
};

export default Page;
