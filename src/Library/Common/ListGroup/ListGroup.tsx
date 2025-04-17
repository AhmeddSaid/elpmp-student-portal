import React from "react";
import { Flexbox } from "@/Library/Common/Grids/Grids";
import TestIcon from "@/Library/Common/Icongraphy/TestIcon/TestIcon";
import { ListGroupShell } from "@/Library/Common/ListGroup/ListGroup.styles";

const ListGroup = () => {
	return (
		<>
			<ListGroupShell>
				<Flexbox $gap={8}>
					<TestIcon />
					<p>text</p>
				</Flexbox>

				<div>
					<TestIcon />
				</div>
			</ListGroupShell>
		</>
	);
};

export default ListGroup;
