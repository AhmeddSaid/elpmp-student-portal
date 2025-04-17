import React, { Suspense } from "react";
import { Locale } from "@/Global";
import ErrorFetchingData from "@/Library/Common/ErrorFetching/ErrorFetchingData";
import PageSkeleton from "@/Library/Common/skeleton/PageSkeleton/PageSkeleton";
import UpdateAddress from "@/Library/pages/UpdateAddress/UpdateAddress";
import { GetData } from "@/Utils/AxiosFetch";

export const dynamic = "force-dynamic";

const Page = async ({ params }: { params: Locale }) => {
	const { data, error } = (await GetData("/billingAddress")) as {
		data: {
			data: {
				address1: string;
				address2: string;
				city: string;
				country: string;
				state: string;
				zipCode: string;
				companyName: string;
				phoneNumber: string;
				phoneExt: string;
			};
		};
		error: boolean;
	};
	const countryRes = (await GetData("/country")) as {
		data: { data: { nameEn: string; nameAr: string; id: string }[] };
		error: boolean;
	};

	if (error || countryRes.error) {
		return <ErrorFetchingData />;
	}
	return (
		<Suspense fallback={<PageSkeleton />}>
			<UpdateAddress countryRes={countryRes.data.data} data={data.data} locale={params.locale} />
		</Suspense>
	);
};

export default Page;
