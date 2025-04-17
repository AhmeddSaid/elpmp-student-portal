import { randomUUID } from "node:crypto";
import Link from "next/link";
import React, { ReactNode } from "react";
import {
	AdminInvoicesAr,
	AdminInvoicesEn,
} from "../../../../../../messages/AdminInvoices/AdminInvoices";
import { Locale } from "@/Global";
import PageHeader from "@/Library/Common/PageHeader/PageHeader";
import Table from "@/Library/Common/Table/Table";
import TableCell from "@/Library/Common/Table/TableCell";
import Tags from "@/Library/Common/Tags/Tags";

const Page = ({ params }: { params: Locale }) => {
	const t = params.locale === "en" ? AdminInvoicesEn : AdminInvoicesAr;

	const promoHeader: string[] = [
		t.tableDetail.data1,
		t.tableDetail.data2,
		t.tableDetail.data3,
		t.tableDetail.data4,
		t.tableDetail.data5,
	];

	const promoBody: {
		promoCode: string;
		createdAt: string;
		expired: string;
		enabled: ReactNode;
		usages: string;
	}[] = [
		{
			promoCode: "34dsf454lsjd",
			createdAt: "15 July, 2024",
			expired: "12 Jan,2025",
			enabled: <Tags fcolor={"error"} bgcolor={"error"} size={"xsmall"} tagtittle={"Tag"} />,
			usages: "ay7aga",
		},
		{
			promoCode: "34dsf454lsjd",
			createdAt: "15 July, 2024",
			expired: "12 Jan,2025",
			enabled: <Tags fcolor={"success"} bgcolor={"success"} size={"xsmall"} tagtittle={"Tag"} />,
			usages: "ay7aga",
		},
		{
			promoCode: "34dsf454lsjd",
			createdAt: "15 July, 2024",
			expired: "12 Jan,2025",
			enabled: <Tags fcolor={"error"} bgcolor={"error"} size={"xsmall"} tagtittle={"Tag"} />,
			usages: "ay7aga",
		},
	];

	return (
		<>
			<PageHeader title={t.title} subTitle={t.subTitle} />

			<Table>
				<thead>
					<tr>
						{promoHeader.map(item => {
							return (
								<TableCell key={randomUUID()} Type={"Table-Head"}>
									{item}
								</TableCell>
							);
						})}
					</tr>
				</thead>

				<tbody>
					{promoBody.map(item => {
						return (
							<tr key={randomUUID()}>
								<TableCell>
									<Link href={"students/details"}>{item.promoCode}</Link>
								</TableCell>
								<TableCell>{item.createdAt}</TableCell>
								<TableCell>{item.expired}</TableCell>
								<TableCell>{item.enabled}</TableCell>
								<TableCell>{item.usages}</TableCell>
							</tr>
						);
					})}
				</tbody>
			</Table>
		</>
	);
};

export default Page;
