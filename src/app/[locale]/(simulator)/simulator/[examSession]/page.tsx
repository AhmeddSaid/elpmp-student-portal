import React from "react";
import { Locale } from "@/Global";
import { SimulatorProvide } from "@/Library/pages/SimulatorExam/SimulatorProvide";

export const dynamic = "force-dynamic";

const Page = ({ params }: { params: { examSession: string } & Locale }) => {
	return (
		<>
			<SimulatorProvide params={params} />
		</>
	);
};

export default Page;
