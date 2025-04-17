import { redirect } from "next/navigation";
import React from "react";
import OnBoarding from "@/Library/pages/OnBoarding/OnBoarding";

const onboarding = () => {
	redirect("/404");
	return <OnBoarding />;
};

export default onboarding;
