import React, { ReactNode } from "react";
import { TagContanier, TagTitle } from "@/Library/Common/Tags/Tags.styles";

const Tags = ({
	tagtittle,
	size = "large",
	StartIcon,
	TailingIcon,
	disable = false,
	bgcolor,
	fcolor,
}: {
	bgcolor?: "primary" | "success" | "error";
	fcolor?: "primary" | "success" | "error";
	tagtittle: string;
	size?: "xsmall" | "small" | "medium" | "large" | "fullwidth";
	StartIcon?: ReactNode;
	TailingIcon?: ReactNode;
	disable?: boolean;
}) => {
	return (
		<>
			<TagContanier bgcolor={bgcolor} size={size}>
				{StartIcon}
				<TagTitle disable={disable} fcolor={fcolor} size={size}>
					{tagtittle}
				</TagTitle>
				{TailingIcon}
			</TagContanier>
		</>
	);
};

export default Tags;
