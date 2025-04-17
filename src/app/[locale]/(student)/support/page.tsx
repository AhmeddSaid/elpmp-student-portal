import React, { Suspense } from "react";
import { Locale } from "@/Global";
import PageSkeleton from "@/Library/Common/skeleton/PageSkeleton/PageSkeleton";
import SettingPage from "@/Library/pages/SettingPage/SettingPage";

const page = ({ params }: { params: Locale }) => {
	return (
		<Suspense fallback={<PageSkeleton />}>
			<SettingPage locale={params.locale} />
		</Suspense>
	);
};
export default page;
