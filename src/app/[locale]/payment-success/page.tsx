import { redirect } from "next/navigation";
import React from "react";

const Page = () => {
	redirect("/404");
	return <div>Success payment </div>;
};

export default Page;
