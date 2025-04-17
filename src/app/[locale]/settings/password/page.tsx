import React, { Suspense } from "react";
import { Locale } from "@/Global";
import PageSkeleton from "@/Library/Common/skeleton/PageSkeleton/PageSkeleton";
import Password from "@/Library/pages/passwordPage/password";

export const dynamic = "force-dynamic";

const Page = ({ params }: { params: Locale }) => {
	return (
		<Suspense fallback={<PageSkeleton />}>
			<Password locale={params.locale} />
		</Suspense>
	);
};

export default Page;
