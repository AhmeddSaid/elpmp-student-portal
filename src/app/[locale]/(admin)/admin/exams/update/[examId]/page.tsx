import React from "react";

const Page = async ({ params }: { params: { examId: string } }) => {
	// const data = await fetch(`http://localhost:5050/exam/${params.examId}`);
	// if (data.status === 404) {
	// 	return null;
	// }
	return (
		<>
			<p>{params.examId}</p>
			{/*<UpdateExams locale={params.locale} />*/}
		</>
	);
};

export default Page;
