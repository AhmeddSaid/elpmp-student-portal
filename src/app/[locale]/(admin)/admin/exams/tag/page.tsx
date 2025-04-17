"use server";
import Link from "next/link";
import React from "react";
import {
	adminExamsTagAr,
	adminExamsTagEn,
} from "../../../../../../../messages/AdminExamsTag/AdminExamsTag";
import { Locale } from "@/Global";
import Button from "@/Library/Common/Button/Button";
import { Flexbox } from "@/Library/Common/Grids/Grids";
import PageHeader from "@/Library/Common/PageHeader/PageHeader";
import Table from "@/Library/Common/Table/Table";
import TableCell from "@/Library/Common/Table/TableCell";
import Tags from "@/Library/Common/Tags/Tags";
import { GetData } from "@/Utils/AxiosFetch";
import uuid from "@/Utils/uuid";

const Page = async ({ params }: { params: Locale }) => {
	const t = params.locale === "en" ? adminExamsTagEn : adminExamsTagAr;

	const tagHeader: string[] = [
		t.TableTag.data1,
		t.TableTag.data2,
		t.TableTag.data3,
		t.TableTag.data4,
		t.TableTag.data5,
	];

	const { data } = (await GetData("tag/")) as {
		data: {
			data: {
				id: string;
				nameEn: string;
				nameAr: string;
				descriptionEn: string;
				descriptionAr: string;
				isDeleted: boolean;
			}[];
		};
	};
	return (
		<>
			<Flexbox $justify={"space-between"}>
				<PageHeader subTitle={"sub title"} title={"Tag"} />
				<Link href={"/admin/exams/tag/add"}>
					<Button body={"Add"} />
				</Link>
			</Flexbox>

			<Table>
				<thead>
					<tr>
						{tagHeader.map(item => {
							return (
								<TableCell key={uuid()} Type={"Table-Head"}>
									{item}
								</TableCell>
							);
						})}
					</tr>
				</thead>

				<tbody>
					{data.data.map(
						(item: {
							id: string;
							nameEn: string;
							nameAr: string;
							descriptionEn: string;
							descriptionAr: string;
							isDeleted: boolean;
						}) => {
							return (
								<tr key={uuid()}>
									<TableCell>{item.nameEn}</TableCell>

									<TableCell>{item.nameAr}</TableCell>

									<TableCell>{item.descriptionEn}</TableCell>

									<TableCell>{item.descriptionAr}</TableCell>

									<TableCell>
										<Tags
											tagtittle={item.isDeleted ? "Deleted" : "Active"}
											size={"small"}
											fcolor={!item.isDeleted ? "success" : "error"}
											bgcolor={!item.isDeleted ? "success" : "error"}
										/>
									</TableCell>

									<TableCell>
										<Link href={`/admin/exams/tag/${item.id}`}>
											<Button body={"View"} size={"xsmall"} bgcolor={"gost"} />
										</Link>
									</TableCell>
								</tr>
							);
						},
					)}
				</tbody>
			</Table>
		</>
	);
};

export default Page;
