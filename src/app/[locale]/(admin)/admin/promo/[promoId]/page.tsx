"use server";
import React from "react";
import UpdatePromo from "@/Library/pages/UpdatePromo/UpdatePromo";
import { GetData } from "@/Utils/AxiosFetch";

const Page = async ({ params }: { params: { promoId: string } }) => {
	// const option = {
	// 	url: `promo/${params.promoId}`,
	// 	method: "GET",
	// };

	const { data } = (await GetData(`promo/${params.promoId}`)) as {
		data: {
			data: {
				id: string;
				code: string;
				endDate: Date;
				firstUse: boolean;
				isDeleted: boolean;
				maxDiscount: string;
				startDate: Date;
				usageLimit: string;
				discount: string;
			};
		};
	};
	return (
		<>
			<UpdatePromo data={data.data} />
		</>
	);
};

export default Page;
