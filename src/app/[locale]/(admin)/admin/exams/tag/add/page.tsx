import React from "react";
import { Locale } from "@/Global";
import AddTag from "@/Library/pages/AddTag/AddTag";

const Page = ({ params }: { params: Locale }) => {
	return <AddTag locale={params.locale} />;
};

export default Page;
