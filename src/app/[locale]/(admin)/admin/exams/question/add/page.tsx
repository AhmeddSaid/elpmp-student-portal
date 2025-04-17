import React from "react";
import { Locale } from "@/Global";
import AddQuestion from "@/Library/pages/AddQuestion/AddQuestion";

const Page = ({ params }: { params: Locale }) => {
	return <AddQuestion locale={params.locale} />;
};

export default Page;
