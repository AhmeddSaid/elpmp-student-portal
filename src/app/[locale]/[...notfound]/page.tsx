"use client";

import { notFound, redirect, usePathname } from "next/navigation";
import { Locale } from "@/Global";

const Page = ({ params }: { params: Locale }) => {
	const { locale } = params;
	const url: string = locale === "ar" ? "/404" : "/en/404";
	const pageFullUrl: string = usePathname();
	if (!pageFullUrl.includes("/404")) {
		redirect(url);
	}
	return notFound();
};

export default Page;
