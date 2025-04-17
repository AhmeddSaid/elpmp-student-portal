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
import { promoAction } from "@/app/[locale]/(admin)/admin/promo/add/action";

interface FormValues {
	code: string;
	usageLimit: string;
	startDate: string;
	endDate: string;
	firstUse: false;
	discount: string;
	maxDiscount: string;
	isDeleted: boolean;
}

const Promo = () => {
	const discount = [
		{ name: "VALUE", id: "VALUE" },
		{ name: "PERCENTAGE", id: "PERCENTGE" },
	];
	const validationSchema = yup
		.object()
		.shape({
			code: yup
				.string()
				.required("Please enter code")
				.trim("Code must not contain leading or trailing spaces")
				.min(3, "Min 3 characters")
				.max(30, "max 30 characters")
				.matches(/[a-zA-Z0-9]+/g, "Enter a valid code"),
			usageLimit: yup.number().notRequired().positive().integer().min(1),
			startDate: yup
				.date()
				.required("Please enter start date")
				.typeError("Please enter valid start date"),
			endDate: yup
				.date()
				.default(null)
				.required("Please enter end date")
				.when(
					"startDate",
					(started, yuper) => started && yuper.min(started, "End time cannot be before start time"),
				)
				.typeError("Please enter valid end date"),
			firstUse: yup.boolean().default(false).required("Please enter first use"),
			maxDiscount: yup.number().positive().integer().min(1).required("Please enter max discount"),
			isDeleted: yup.boolean().default(false).notRequired(),
			exam: yup.string().notRequired(),
		})
		.noUnknown(true, { noExtensions: true, message: "Unknown field" })
		.strict(false);

	const initialValues: FormValues = {
		code: "",
		usageLimit: "",
		startDate: new Date().toISOString(),
		endDate: new Date().toISOString(),
		firstUse: false,
		discount: "",
		maxDiscount: "",
		isDeleted: false,
	};

	async function handelPromo(formValues: FormValues) {
		const updatedFormValues: FormValues = {
			...formValues,
			startDate: new Date(formValues.startDate).toISOString(),
			endDate: new Date(formValues.endDate).toISOString(),
		};
		// const action =	await promoAction(updatedFormValues);

		try {
			const { failed } = await promoAction({ updatedFormValues });
			if (!failed) {
				toast.success("✔ promo added successfully");
				// revalidatePath("/admin/exams");
				// redirect("/admin/exams");
			} else {
				toast.error("❌ promo add Failed");
			}
		} catch (error) {
			toast.error("❌ promo add Failed");
		}

		// if (action.status === 200) {
		// 	toast.success("Promo added successfully");
		// } else {
		// 	toast.error("Promo  add Failed");
		// }
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
										option={discount}
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
										body={"ADD+"}
										buttonType={"submit"}
										bgcolor={"primary"}
										disabled={false}
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

export default Promo;
