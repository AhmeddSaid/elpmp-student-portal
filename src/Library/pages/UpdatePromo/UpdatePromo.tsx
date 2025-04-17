"use client";
import { useFormik } from "formik";
import React from "react";
import { toast } from "sonner";
import * as yup from "yup";
import Button from "@/Library/Common/Button/Button";
import Checkbox from "@/Library/Common/Checkbox/Checkbox";
import { Col, Flexbox, Row, Section } from "@/Library/Common/Grids/Grids";
import Select from "@/Library/Common/Select/Select";
import TextInput from "@/Library/Common/TextInput/TextInput";
import { PromoFormInner } from "@/Library/pages/Promo/Promo.styles";
import { updatePromoAction } from "@/app/[locale]/(admin)/admin/promo/[promoId]/action";

export interface PromoFormValues {
	code: string;
	usageLimit: string;
	startDate: string;
	endDate: string;
	firstUse: boolean;
	discount: string;
	maxDiscount: string;
	isDeleted: boolean;
}

const UpdatePromo = ({
	data,
}: {
	data: {
		id: string;
		code: string;
		endDate: Date;
		firstUse: boolean;
		isDeleted: boolean;
		maxDiscount: string;
		startDate: Date;
		usageLimit: string;
		discount: string;
	};
}) => {
	// eslint-disable-next-line
	const { id, code, endDate, firstUse, isDeleted, maxDiscount, startDate, usageLimit, discount } =
		data;
	const discountValue = [
		{ name: "VALUE", id: "VALUE" },
		{ name: "PERCENTAGE", id: "PERCENTGE" },
	];
	const validationSchema = yup.object().shape({
		code: yup
			.string()
			.notRequired()
			.trim("Code must not contain leading or trailing spaces")
			.min(3, "Min 3 characters")
			.max(30, "max 30 characters")
			.matches(/[a-zA-Z0-9]+/g, "Enter a valid code"),
		usageLimit: yup.number().notRequired().positive().integer().min(1),
		startDate: yup.date().notRequired().typeError("Please enter valid start date"),
		endDate: yup
			.date()
			.notRequired()
			.when(
				"startDate",
				(started, yuper) => started && yuper.min(started, "End time cannot be before start time"),
			)
			.typeError("Please enter valid end date"),
		firstUse: yup.boolean().default(false).notRequired(),
		maxDiscount: yup.number().positive().integer().min(1).notRequired(),

		isDeleted: yup.boolean().default(false).notRequired(),
		// discount: yup
		// 	.string()
		// 	.required("Please enter discount")
		// 	.trim("Discount must not contain leading or trailing spaces")
		// 	.oneOf(Object.values(Discount), "Enter a valid discount")
		// 	.default('PERCENTGE'),
	});

	const initialValues: PromoFormValues = {
		code: "",
		usageLimit: "",
		startDate: new Date(startDate).toISOString().slice(0, 16),
		endDate: new Date(endDate).toISOString().slice(0, 16),
		firstUse: false,
		discount,
		maxDiscount,
		isDeleted: false,
	};

	async function handelPromo(values: PromoFormValues) {
		const changedValues = {};

		Object.keys(values).forEach(key => {
			if (values[key as keyof PromoFormValues] !== initialValues[key as keyof PromoFormValues]) {
				//@ts-ignore
				changedValues[key as keyof PromoFormValues] = values[key as keyof PromoFormValues];
			}
		});

		if (Object.keys(changedValues).length > 0) {
			//@ts-ignore
			const action = await updatePromoAction(changedValues, id);
			if (action.status === 200) {
				toast.success("✔ Exam added successfully");
			} else {
				toast.error("❌ Exam add Failed");
			}
		}
	}

	const formik = useFormik({
		initialValues,
		validationSchema,
		onSubmit: handelPromo,
	});

	return (
		<>
			<Section>
				<Row $justify={"center"}>
					<Col $md={8}>
						<form onSubmit={formik.handleSubmit}>
							<PromoFormInner>
								<div>
									<TextInput
										type="text"
										size={"large"}
										placeholder={"Code"}
										label={"Code"}
										id={"code"}
										name={"code"}
										value={formik.values.code}
										onBlur={formik.handleBlur}
										onChange={formik.handleChange}
										errorMessage={
											formik.errors.code && formik.touched.code ? `${formik.errors.code}` : ""
										}
									/>
								</div>
								<div>
									<TextInput
										type="number"
										size={"large"}
										placeholder={"Usage Limit"}
										label={"Usage Limit"}
										id={"usageLimit"}
										name={"usageLimit"}
										value={formik.values.usageLimit}
										onBlur={formik.handleBlur}
										onChange={formik.handleChange}
										errorMessage={
											formik.errors.usageLimit && formik.touched.usageLimit
												? `${formik.errors.usageLimit}`
												: ""
										}
									/>
								</div>
								<div>
									<TextInput
										type="datetime-local"
										size={"large"}
										placeholder={"Start Date"}
										label={"Start Date"}
										id={"startDate"}
										name={"startDate"}
										value={formik.values.startDate}
										onBlur={formik.handleBlur}
										onChange={formik.handleChange}
										errorMessage={
											formik.errors.startDate && formik.touched.startDate
												? `${formik.errors.startDate}`
												: ""
										}
									/>
								</div>
								<div>
									{" "}
									<TextInput
										type="datetime-local"
										size={"large"}
										placeholder={"end Date"}
										label={"end Date"}
										id={"endDate"}
										name={"endDate"}
										value={formik.values.endDate}
										onBlur={formik.handleBlur}
										onChange={formik.handleChange}
										errorMessage={
											formik.errors.endDate && formik.touched.endDate
												? `${formik.errors.endDate}`
												: ""
										}
									/>
								</div>
								<div>
									<Checkbox
										label={"First Use Only"}
										id={"firstUse"}
										name={"firstUse"}
										// value={formik.values.firstUse}
										onChange={formik.handleChange}
										onBlur={formik.handleBlur}
									/>
								</div>
								<div>
									<Checkbox
										id={"isDeleted"}
										name={"isDeleted"}
										label={"is published"}
										onChange={formik.handleChange}
										onBlur={formik.handleBlur}
									/>
								</div>
								<div>
									<Select
										option={discountValue}
										label={"Discount"}
										id={"discount"}
										name={"discount"}
										value={formik.values.discount}
										onChange={formik.handleChange}
										onBlur={formik.handleBlur}
									/>
								</div>
								<div>
									<TextInput
										type="number"
										size={"large"}
										placeholder={"max discount"}
										label={"max discount"}
										id={"maxDiscount"}
										name={"maxDiscount"}
										value={formik.values.maxDiscount}
										onChange={formik.handleChange}
										onBlur={formik.handleBlur}
									/>
								</div>

								<Flexbox $gap={8}>
									<Button body={"Cancel"} buttonType={"reset"} bgcolor={"gost"} />
									<Button
										body={"Update"}
										buttonType={"submit"}
										bgcolor={"primary"}
										disabled={
											JSON.stringify(formik.values) === JSON.stringify(formik.initialValues)
										}
									/>
								</Flexbox>
							</PromoFormInner>
						</form>
					</Col>
				</Row>
			</Section>
		</>
	);
};

export default UpdatePromo;
