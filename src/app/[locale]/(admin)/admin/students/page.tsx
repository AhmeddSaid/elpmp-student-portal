import { randomUUID } from "node:crypto";
import Link from "next/link";
import React from "react";
import Table from "@/Library/Common/Table/Table";
import TableCell from "@/Library/Common/Table/TableCell";
import Tags from "@/Library/Common/Tags/Tags";
import { GetData } from "@/Utils/AxiosFetch";

const Page = async () => {
	const users = (await GetData(`/user`)) as {
		data: {
			data: {
				firstName: string;
				email: string;
				lastLogin: string;
				createdAt: string;
				ltv: string;
				role: string;
				isVerified: string;
			}[];
		};
	};

	const studentHeader: string[] = [
		"Student",
		"Last Login",
		"Joined",
		"is verified",
		"LTV",
		"Tenant",
	];

	return (
		<>
			<Table>
				<thead>
					<tr>
						{studentHeader.map(item => {
							return (
								<TableCell key={randomUUID()} Type={"Table-Head"}>
									{item}
								</TableCell>
							);
						})}
					</tr>
				</thead>

				<tbody>
					{users.data.data.map(
						(item: {
							firstName: string;
							email: string;
							lastLogin: string;
							createdAt: string;
							ltv: string;
							role: string;
							isVerified: string;
						}) => {
							return (
								<tr key={randomUUID()}>
									<TableCell>
										<Link href={"students/details"}>
											<p>{item.firstName}</p>
											<p>{item.email}</p>
										</Link>
									</TableCell>

									{item.lastLogin === null ? (
										<TableCell>Never</TableCell>
									) : (
										<TableCell>{item.lastLogin}</TableCell>
									)}

									{/*<TableCell>{item.lastLogin}</TableCell>*/}
									<TableCell>{item.createdAt}</TableCell>

									{item.isVerified ? (
										<TableCell>
											<Tags
												tagtittle={"Verified"}
												bgcolor={"success"}
												fcolor={"success"}
												size={"xsmall"}
											/>
										</TableCell>
									) : (
										<TableCell>
											<Tags
												tagtittle={"not Verified"}
												bgcolor={"error"}
												fcolor={"error"}
												size={"xsmall"}
											/>
										</TableCell>
									)}
									<TableCell>{item.ltv}</TableCell>
									<TableCell>{item.role}</TableCell>
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
