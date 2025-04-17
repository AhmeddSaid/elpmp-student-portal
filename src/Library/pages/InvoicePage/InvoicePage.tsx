import { randomUUID } from "node:crypto";
import React from "react";
import PageHeader from "@/Library/Common/PageHeader/PageHeader";
import Table from "@/Library/Common/Table/Table";
import TableCell from "@/Library/Common/Table/TableCell";
import uuid from "@/Utils/uuid";

const InvoicePage = ({
	data,
}: {
	data: { invoiceRef: string; total: string; paymentDate: string; paymentProvider: string }[];
}) => {
	return (
		<>
			<PageHeader subTitle={"Body"} title={"Invoice"} />

			<Table>
				<thead>
					<tr>
						{data?.map(item => {
							return (
								<TableCell key={uuid()} Type={"Table-Head"}>
									{item.total}
								</TableCell>
							);
						})}
					</tr>
				</thead>

				<tbody>
					{data?.map(item => {
						return (
							<tr key={randomUUID()}>
								<TableCell>{item.invoiceRef}</TableCell>
								<TableCell>{item.total}</TableCell>
								<TableCell>{item.paymentDate}</TableCell>
								<TableCell>{item.paymentProvider}</TableCell>
							</tr>
						);
					})}
				</tbody>
			</Table>
			<p>wait till invoices data added uncomment it</p>
		</>
	);
};

export default InvoicePage;
