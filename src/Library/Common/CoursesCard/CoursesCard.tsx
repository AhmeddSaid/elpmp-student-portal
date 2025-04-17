import React, { ReactNode } from "react";
import {
	CourseCardCaption,
	CourseCardDescription,
	CourseCardFooter,
	CourseCardShell,
	CourseCardTitle,
} from "@/Library/Common/CoursesCard/CoursesCard.styles";
import { Flexbox } from "@/Library/Common/Grids/Grids";

const CourseCard = ({
	badge,
	icon,
	title,
	description,
	level,
	duration,
}: {
	badge?: ReactNode;
	icon?: ReactNode;
	title: string;
	description: string;
	level: string;
	duration: string;
}) => {
	return (
		<>
			<CourseCardShell>
				<Flexbox $justify={"space-between"}>
					{icon}
					{badge}
				</Flexbox>

				<CourseCardCaption>
					<CourseCardTitle>{title}</CourseCardTitle>

					<CourseCardDescription>{description}</CourseCardDescription>

					<CourseCardFooter>
						<span>{level} . </span>

						<span>{duration}</span>
					</CourseCardFooter>
				</CourseCardCaption>
			</CourseCardShell>
		</>
	);
};

export default CourseCard;
