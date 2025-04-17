import React from "react";
import AddStudentToExam from "@/Library/pages/AddStudentToExam/AddStudentToExam";
import { GetData } from "@/Utils/AxiosFetch";

const Page = async () => {
	const users = await GetData(`/user`);
	const exams = await GetData(`/exam`);
	// @ts-ignore
	return <AddStudentToExam examsData={exams.data.data} usersData={users.data.data} />;
};

export default Page;
