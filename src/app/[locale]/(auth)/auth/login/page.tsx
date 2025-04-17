import { Metadata } from "next";
import React from "react";
import { Locale } from "@/Global";
import styles from "@/Library/Common/Grids/Spaces.module.css";
import { MetaTags } from "@/Library/Common/Metatags/Metatags";
import Login from "@/Library/pages/Auth/Login/Login";

export const metadata: Metadata = MetaTags({
	title: "Login",
	description: "Login",
	keywords: "Login",
	url: `${process.env.DOMAIN}/login`,
	language: "en-us",
	image: "/dist/logo.png",
});

const Page = ({ params }: { params: Locale }) => {
	return (
		<div className={styles.marginBottom80}>
			<Login locale={params.locale} />
		</div>
	);
};

export default Page;
