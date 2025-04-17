import * as yup from "yup";
import { ExamValuesType } from "@/Library/pages/AddExams/AddExams";

export const addExamInitialValues: ExamValuesType = {
	nameEn: "",
	nameAr: "",
	descriptionEn: "",
	descriptionAr: "",
	slug: "",
	image: "",
	priceUSD: "",
	priceEGP: "",
	discountedPriceUSD: "",
	discountedPriceEGP: "",
	period: "",
	isDeleted: true,
};

const PriceValidationSchema = yup
	.number()
	.positive("Price must be positive")
	.min(0.01, "Price must be greater than or equal to 0.01")
	.max(1000000, "Price must be less than or equal to 1,000,000")
	.required("Please enter price");

const NameArRegex: RegExp =
	/^(?!^\d+$)(?!^[\u0660-\u0669]+$)(?!^\s+$)(?!.*[\u0620\uFEFF\n\r\t\u00A0\u2003])(?=.{2,})(?=.*[\u0600-\u06FF])(?=.*[0-9\u0660-\u0669\s])[\u0600-\u06FF\u0750-\u077F\uFB50-\uFDFF\uFE70-\uFEFF0-9\u0660-\u0669\s،؟]+$/;

export const addExamValidationSchema = yup
	.object()
	.shape({
		nameEn: yup
			.string()
			.trim()
			.min(3, "Min 3 characters")
			.max(1024, "Max 1024 characters")
			.matches(/^[a-zA-Z\s]+$/, "Exam's name must contain only English letters")
			.required("Exam's name is required"),
		nameAr: yup
			.string()
			.trim()
			.min(3, "Min 3 characters")
			.matches(NameArRegex, "Exam's name must contain only Arabic letters")
			.required("Exam's name is required"),
		descriptionEn: yup
			.string()
			.trim()
			.min(3, "Min 3 characters")
			.max(1024, "Max 1024 characters")
			.matches(/^[a-zA-Z\s]+$/, "Description must contain only English letters")
			.required("Description is required"),
		descriptionAr: yup
			.string()
			.trim("No leading or trailing spaces")
			.min(3, "Min 3 characters")
			.matches(NameArRegex, "Description must contain only Arabic letters")
			.required("Description is required"),
		slug: yup
			.string()
			.trim()
			.required("Slug is Required")
			.min(3, "Min 3 characters")
			.matches(/^[a-zA-Z0-9_-]+$/, "Only letters, numbers, underscores, and hyphens are allowed"),
		isDeleted: yup.boolean().default(false).notRequired(),
		image: yup.string().trim().required("Image is required"),
		priceUSD: PriceValidationSchema,
		priceEGP: PriceValidationSchema,
		discountedPriceUSD: PriceValidationSchema,
		discountedPriceEGP: PriceValidationSchema,
		period: yup.number().integer().positive().notRequired(),
	})
	.noUnknown(true, {
		noExtensions: true,
		message: "Unknown field",
	})
	.strict(true);
