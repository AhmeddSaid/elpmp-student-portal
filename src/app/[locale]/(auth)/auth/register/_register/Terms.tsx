import Link from "next/link";
import React from "react";
import { Paragraph } from "@/Library/Common/Typograhy/Typography";

const Terms = () => {
	return (
		<>
			<Paragraph color={"secondary"}>
				By signing up, I accept and agree to the{" "}
				<Link target={"_blank"} href={"https://www.elpmp.com/terms"}>
					Terms of Service
				</Link>{" "}
				and{" "}
				<Link target={"_blank"} href={"https://www.elpmp.com/privacy"}>
					Privacy Policy
				</Link>
				.
			</Paragraph>
		</>
	);
};

export default Terms;
