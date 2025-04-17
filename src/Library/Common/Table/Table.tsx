import React, { ReactNode } from "react";
import { TableCustomStyles } from "@/Library/Common/Table/Table.styles";

const Table = ({ children }: { children: ReactNode }) => {
	return (
		<>
			<TableCustomStyles>{children}</TableCustomStyles>
		</>
	);
};

export default Table;
