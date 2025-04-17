"use client";
import { useRouter } from "next/navigation";
import React, { useCallback, useEffect, useState } from "react";
import styles from "./../../../../../Library/Common/Grids/Spaces.module.css";

import { Flexbox } from "@/Library/Common/Grids/Grids";
import ErrorIcon from "@/Library/Common/Icongraphy/ErrorIcon/ErrorIcon";
import Notifications from "@/Library/Common/Notification/Notification";
import { BigParagraph } from "@/Library/Common/Typograhy/Typography";
import QuestionSpinner from "@/Library/Common/skeleton/QuestionSpinner";
import logoutAction from "@/app/[locale]/(auth)/auth/logout/action";

function Page() {
	const router = useRouter();
	const [error, setError] = useState<boolean>(false);
	const performLogout = useCallback(async () => {
		await logoutAction();
		router.push("/auth/login");
	}, [router]);

	useEffect(() => {
		const logoutAsync = async () => {
			try {
				await performLogout();
			} catch {
				setError(prev => !prev);
			}
		};

		logoutAsync().then(r => r);
	}, [performLogout]);

	return (
		<>
			<div className={styles.marginTop54}>
				{!error ? (
					<div className={styles.marginTop54}>
						<Flexbox $justify="center">
							<QuestionSpinner />
						</Flexbox>
						<BigParagraph center bold>
							Logging out...
						</BigParagraph>
					</div>
				) : (
					<div className={styles.marginTop54}>
						<Notifications
							className={styles.marginBottom16}
							caption={"Something went wrong while logging you out, please try again later."}
							tittle={"Error logging out"}
							type={"error"}
							icon={<ErrorIcon />}
						/>
					</div>
				)}
			</div>
		</>
	);
}

export default Page;
