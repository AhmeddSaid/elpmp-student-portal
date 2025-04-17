"use client";
import React from "react";
import { Provider } from "react-redux";
import { Locale } from "@/Global";
import SimulatorExam from "@/Library/pages/SimulatorExam/SimulatorExam";
import { SimulatorStore } from "@/lib/Store";

export const SimulatorProvide = ({ params }: { params: { examSession: string } & Locale }) => {
	const { locale } = params;
	return (
		<>
			<Provider store={SimulatorStore}>
				<SimulatorExam exam={params.examSession} locale={locale} />
			</Provider>
		</>
	);
};
