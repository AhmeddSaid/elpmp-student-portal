import React, { Suspense } from "react";
import { Locale } from "@/Global";
import ErrorFetchingData from "@/Library/Common/ErrorFetching/ErrorFetchingData";
import PageSkeleton from "@/Library/Common/skeleton/PageSkeleton/PageSkeleton";
import SocialPage from "@/Library/pages/socialPage/SocialPage";
import { GetData } from "@/Utils/AxiosFetch";

const SOCIAL_API_ENDPOINT = "/social";

type SocialData = {
	instagram: string;
	facebook: string;
	linkedin: string;
	twitterX: string;
	snapchat: string;
};

const fetchSocialData = async (): Promise<{ data: SocialData | null; error: boolean }> => {
	return GetData<SocialData>(SOCIAL_API_ENDPOINT);
};

const Page = async ({ params }: { params: Locale }) => {
	const { data, error } = (await fetchSocialData()) as { data: SocialData; error: boolean };

	if (error) {
		return <ErrorFetchingData />;
	}

	return (
		<Suspense fallback={<PageSkeleton />}>
			<SocialPage locale={params.locale} data={data} />
		</Suspense>
	);
};

export default Page;
