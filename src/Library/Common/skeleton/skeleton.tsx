import React from "react";
import { SkeletonShape } from "@/Library/Common/skeleton/Skeleton.styles";

const Skeleton = ({
	SkeletonType = "rectangle",
	Height = 24,
}: {
	SkeletonType?: "rectangle" | "circle";
	Height?: number;
}) => {
	return (
		<>
			<SkeletonShape SkeletonType={SkeletonType} Height={Height} />
		</>
	);
};

export default Skeleton;
