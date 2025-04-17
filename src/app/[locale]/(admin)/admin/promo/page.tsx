"use server";
import { randomUUID } from "node:crypto";
import Link from "next/link";
import React from "react";
import Button from "@/Library/Common/Button/Button";
import { Flexbox } from "@/Library/Common/Grids/Grids";
import PageHeader from "@/Library/Common/PageHeader/PageHeader";
import Table from "@/Library/Common/Table/Table";
import TableCell from "@/Library/Common/Table/TableCell";
import Tags from "@/Library/Common/Tags/Tags";
import { GetData } from "@/Utils/AxiosFetch";
import uuid from "@/Utils/uuid";

const Page = async () => {
	const promoHeader: string[] = ["promo code", "created at", "expired", "enabled", "usages"];

	const res = (await GetData("/promo")) as {
		data: {
			data: {
				code: string;
				startDate: string;
				endDate: string;
				isDeleted: boolean;
				discount: string;
			}[];
		};
	};
	return (
		<>
			<Flexbox $justify="space-between">
				<PageHeader title={"Promo"} subTitle={"Subtitle"} />
				<Link href={"/admin/promo/add"}>
					<Button body={"ADD"} />
				</Link>
			</Flexbox>
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
					{res.data.data.map(item => {
						return (
							// <Link key={randomUUID()} href={`/admin/promo/${item.id}`}>
							<tr key={uuid()}>
								<TableCell>{item.code}</TableCell>
								<TableCell>{item.startDate}</TableCell>
								<TableCell>{item.endDate}</TableCell>
								<TableCell>
									{
										<Tags
											tagtittle={"Tag"}
											bgcolor={item.isDeleted ? "success" : "error"}
											size={"small"}
											fcolor={item.isDeleted ? "success" : "error"}
										/>
									}
								</TableCell>
								<TableCell>{item.discount}</TableCell>
							</tr>
							// </Link>
						);
					})}
				</tbody>
			</Table>
		</>
	);
};

export default Page;
