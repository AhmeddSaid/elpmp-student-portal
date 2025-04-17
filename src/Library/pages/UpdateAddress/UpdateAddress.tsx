"use client";
import { useFormik } from "formik";
import isEqual from "lodash.isequal";
import React, { useMemo } from "react";
import { toast } from "sonner";
import {
	BillingAddressTranslationAr,
	BillingAddressTranslationEn,
} from "../../../../messages/Settings/BillingAddress";
import { Locale } from "@/Global";
import Button from "@/Library/Common/Button/Button";
import { Col, Flexbox, Row, Section } from "@/Library/Common/Grids/Grids";
import styles from "@/Library/Common/Grids/Spaces.module.css";
import PhoneInputComponent from "@/Library/Common/PhoneInput/PhoneInput";
import Select from "@/Library/Common/Select/Select";
import TextInput from "@/Library/Common/TextInput/TextInput";
import settingsAddressValidation from "@/app/[locale]/settings/address/_settingsAddress/SettingsAddress.validation";
import { updateBillingAddressAction } from "@/app/[locale]/settings/address/action";

const UpdateAddress = ({
	data,
	locale,
	countryRes,
}: {
	data: {
		address1: string;
		address2: string;
		city: string;
		country: string;
		state: string;
		zipCode: string;
		companyName: string;
		phoneNumber: string;
		phoneExt: string;
	};
	countryRes: { nameEn: string; nameAr: string; id: string }[];
} & Locale) => {
	const t = useMemo(
		() => (locale === "en" ? BillingAddressTranslationEn : BillingAddressTranslationAr),
		[locale],
	);

	const { address1, address2, city, country, state, zipCode, companyName, phoneNumber, phoneExt } =
		data;

	const Countries = countryRes.map(item => {
		return {
			name:
				locale === "en"
					? item.nameEn[0].toUpperCase() + item.nameEn.substring(1).toLowerCase()
					: item.nameAr,
			id: item.id,
		};
	});

	const initialValues = {
		address1,
		address2,
		city,
		country,
		state,
		zipCode,
		companyName,
		phoneNumber,
		phoneExt,
	};

	async function handelUpdateAddressForm(formvalues: {
		address1: string;
		address2: string | null;
		city: string;
		country: string;
		state: string | null;
		zipCode: string;
		companyName: string | null;
		phoneNumber: string;
		phoneExt: string;
	}) {
		formvalues.address2 = formvalues.address2 ? formvalues.address2 : null;
		formvalues.companyName = formvalues.companyName ? formvalues.companyName : null;
		formvalues.state = formvalues.state ? formvalues.state : null;

		const action = await updateBillingAddressAction(formvalues);
		if (action.status === 200) {
			toast.success("Address added successfully");
		} else {
			toast.error("Address  add Failed");
		}
	}

	const formik = useFormik({
		initialValues,
		validationSchema: settingsAddressValidation(locale),
		onSubmit: handelUpdateAddressForm,
	});

	const isFormChanged = isEqual(formik.values, formik.initialValues);
	const hasErrors = Object.keys(formik.errors).length > 0;

	// @ts-ignore
	return (
		<>
			{/*<PageHeader subTitle={t.Body} title={t.Header} />*/}
			<Section>
				<Row>
					<Col $lg={10}>
						<form onSubmit={formik.handleSubmit}>
							<div className={styles.marginBottom16}>
								<TextInput
									type={"text"}
									label={t.Form.FormInputs.Input1.Label}
									placeholder={t.Form.FormInputs.Input1.PlaceHolder}
									id={"address1"}
									name={"address1"}
									value={formik.values.address1}
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
									errorMessage={
										formik.touched.address1 && formik.errors.address1
											? `${formik.errors.address1}`
											: ""
									}
								/>
							</div>
							<div className={styles.marginBottom16}>
								<TextInput
									type={"text"}
									label={t.Form.FormInputs.Input2.Label}
									placeholder={t.Form.FormInputs.Input2.PlaceHolder}
									id={"address2"}
									name={"address2"}
									value={formik.values.address2}
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
									errorMessage={
										formik.touched.address2 && formik.errors.address2
											? `${formik.errors.address2}`
											: ""
									}
								/>
							</div>
							<Row className={styles.marginBottom16}>
								<Col $md={6}>
									<Select
										label={t.Form.FormSelectOptions.CountrySelectOption.Label}
										option={Countries}
										id={"country"}
										name={"country"}
										value={formik.values.country}
										onChange={formik.handleChange}
										onBlur={formik.handleBlur}
										locale={locale}
									/>
								</Col>

								<Col $md={6}>
									<TextInput
										label={t.Form.FormInputs.Input3.Label}
										placeholder={t.Form.FormInputs.Input3.PlaceHolder}
										type={"text"}
										id={"city"}
										name={"city"}
										value={formik.values.city}
										onChange={formik.handleChange}
										onBlur={formik.handleBlur}
										errorMessage={
											formik.touched.city && formik.errors.city ? `${formik.errors.city}` : ""
										}
									/>
								</Col>
							</Row>
							<Row className={styles.marginBottom16}>
								<Col $md={6}>
									<TextInput
										label={t.Form.FormInputs.Input4.Label}
										placeholder={t.Form.FormInputs.Input4.PlaceHolder}
										type={"text"}
										id={"state"}
										name={"state"}
										value={formik.values.state}
										onChange={formik.handleChange}
										onBlur={formik.handleBlur}
										errorMessage={
											formik.touched.state && formik.errors.state ? `${formik.errors.state}` : ""
										}
									/>
								</Col>
								<Col $md={6}>
									<TextInput
										label={t.Form.FormInputs.Input5.Label}
										placeholder={t.Form.FormInputs.Input5.PlaceHolder}
										type={"text"}
										id={"zipCode"}
										name={"zipCode"}
										value={formik.values.zipCode}
										onChange={formik.handleChange}
										onBlur={formik.handleBlur}
										errorMessage={
											formik.touched.zipCode && formik.errors.zipCode
												? `${formik.errors.zipCode}`
												: ""
										}
									/>
								</Col>
							</Row>
							<Row className={styles.marginBottom16}>
								<Col $md={6}>
									<TextInput
										label={t.Form.FormInputs.Input6.Label}
										placeholder={t.Form.FormInputs.Input6.PlaceHolder}
										type={"text"}
										id={"companyName"}
										name={"companyName"}
										value={formik.values.companyName}
										onChange={formik.handleChange}
										onBlur={formik.handleBlur}
										errorMessage={
											formik.touched.companyName && formik.errors.companyName
												? `${formik.errors.companyName}`
												: ""
										}
									/>
								</Col>

								<Col $md={6}>
									<PhoneInputComponent
										//@ts-ignore
										onBlur={formik.handleBlur}
										onChange={(value: string, selectedCountry: { dialCode: string }) => {
											formik.setFieldValue("phoneExt", selectedCountry.dialCode);
											formik.setFieldValue(
												"phoneNumber",
												value.slice(selectedCountry.dialCode.length),
											);
										}}
										value={`${formik.values.phoneExt}${formik.values.phoneNumber}`}
										errorMessage={
											formik.touched.phoneNumber && formik.errors.phoneNumber
												? `${formik.errors.phoneNumber}`
												: ""
										}
									/>
								</Col>
							</Row>
							<Flexbox className={`${styles.marginTop32}`} $justify={"start"}>
								<Button
									buttonType={"submit"}
									body={t.Form.FormButtonBody}
									bgcolor={"primary"}
									size="medium"
									disabled={isFormChanged || hasErrors}
									loading={formik.isSubmitting}
								/>
							</Flexbox>
						</form>
					</Col>
				</Row>
			</Section>
		</>
	);
};

export default UpdateAddress;
