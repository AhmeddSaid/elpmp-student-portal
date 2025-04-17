import React, { ReactNode } from "react";
import { TableCellCustomStyle, TableCellText } from "@/Library/Common/Table/TableCell.styles";

const TableCell = ({
	children,
	LeadingIcon,
	TailingIcon,
	Size = "sm",
	Type = "Table-Body",
	center = false,
	width,
}: {
	children: React.ReactNode;
	LeadingIcon?: ReactNode;
	TailingIcon?: ReactNode;
	Text?: string;
	Size?: "lg" | "md" | "sm" | "xs";
	Type?: "Table-Head" | "Table-Body";
	center?: boolean;
	width?: number;
}) => {
	return (
		<>
			<TableCellCustomStyle width={width} Type={Type} as={Type === "Table-Body" ? "td" : "th"}>
				{LeadingIcon}
				<TableCellText center={center} Size={Size}>
					{children}
				</TableCellText>
				{TailingIcon}
			</TableCellCustomStyle>
		</>
	);
};

export default TableCell;
