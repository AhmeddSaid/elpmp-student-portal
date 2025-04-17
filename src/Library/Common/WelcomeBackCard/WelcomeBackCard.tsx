import React from "react";
import { HomeAr, HomeEn } from "../../../../messages/Home/Home";
import styles from "./../../Common/Grids/Spaces.module.css";
import Avatar from "@/Library/Common/Avatar/Avatar";
import { Flexbox } from "@/Library/Common/Grids/Grids";
import { Heading3 } from "@/Library/Common/Typograhy/Typography";

const WelcomeBackCard = ({ locale, userName }: { locale: string; userName: string }) => {
	const t = locale === "en" ? HomeEn : HomeAr;

	return (
		<>
			<Flexbox $gap={10} $direction={"column"} $align={"center"} className={styles.marginBottom16}>
				<Avatar bottomBadge={false} Size={"lg"} AvatarType={"Letter"} Name={userName} />

				<Heading3>
					{" "}
					{t.welcomeBack} , {userName}
				</Heading3>
			</Flexbox>
		</>
	);
};

export default WelcomeBackCard;
