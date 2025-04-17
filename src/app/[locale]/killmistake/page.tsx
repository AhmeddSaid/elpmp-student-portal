import { redirect } from "next/navigation";
import React from "react";

const Page = () => {
	redirect("/404");
	return <>heloooooo</>;
};

export default Page;
