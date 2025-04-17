import React from "react";
import styles from "@/Library/Common/Grids/Spaces.module.css";
import ErrorIcon from "@/Library/Common/Icongraphy/ErrorIcon/ErrorIcon";
import Notifications from "@/Library/Common/Notification/Notification";

const ErrorFetchingData = () => {
	return (
		<Notifications
			className={styles.marginBottom16}
			caption={
				"We hit a snag while loading the data. Give it another shot or check back soon—we’re on it!"
			}
			tittle={"Whoops! Trouble Loading Data."}
			type={"error"}
			icon={<ErrorIcon />}
		/>
	);
};

export default ErrorFetchingData;
