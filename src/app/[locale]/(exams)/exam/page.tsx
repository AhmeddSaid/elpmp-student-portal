"use server";

import { redirect } from "next/navigation";

const Page = () => {
	return redirect("/exams");
};

export default Page;
