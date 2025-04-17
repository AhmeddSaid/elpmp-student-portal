import React, { Suspense } from "react";
import ErrorFetchingData from "@/Library/Common/ErrorFetching/ErrorFetchingData";
import PageHeader from "@/Library/Common/PageHeader/PageHeader";
import Table from "@/Library/Common/Table/Table";
import TableCell from "@/Library/Common/Table/TableCell";
import { Paragraph, SmallParagraph } from "@/Library/Common/Typograhy/Typography";
import PageSkeleton from "@/Library/Common/skeleton/PageSkeleton/PageSkeleton";
import { GetData } from "@/Utils/AxiosFetch";
import uuid from "@/Utils/uuid";

export const dynamic = "force-dynamic";

const fetchInvoices = async () => {
	try {
		const response = await GetData<{
			data: { invoiceRef: string; total: string; paymentDate: string; paymentProvider: string }[];
		}>("/invoice");
		return {
			data: response.data?.data || null,
			error: response.error,
		};
	} catch {
		return { error: true };
	}
};

const Page = async () => {
	const res = await fetchInvoices();

	if (res.error) {
		return <ErrorFetchingData />;
	}

	const HeaderTable = ["#", "Date", "Subtotal", "Total"];

	const invoicesData = res.data && !res.error ? res.data : [];
	return (
		<>
			<Suspense fallback={<PageSkeleton />}>
				<PageHeader
					subTitle={"Access, download, and manage all your invoices in one convenient place."}
					title={"Invoices"}
				/>
				{invoicesData.length === 0 ? (
					<Paragraph center color="secondary">
						You don&apos;t have any invoices yet.
					</Paragraph>
				) : (
					<Table>
						<thead>
							<tr>
								{HeaderTable.map((item: string) => (
									<TableCell key={uuid()} Type="Table-Head">
										{item}
									</TableCell>
								))}
							</tr>
						</thead>
						<tbody>
							{invoicesData.map(() => (
								<tr key={uuid()}>
									<TableCell>
										<SmallParagraph>Hello</SmallParagraph>
									</TableCell>
								</tr>
							))}
						</tbody>
					</Table>
				)}
			</Suspense>
		</>
	);
};

export default Page;
