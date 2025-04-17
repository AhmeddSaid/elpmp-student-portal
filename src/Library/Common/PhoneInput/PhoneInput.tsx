import React from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { PhoneInputComponentShell } from "@/Library/Common/ContinuCard/ContinuCard.styles";
import Label from "@/Library/Common/TextInput/Label";
import {
	TextInputCaption,
	TextInputErrorMessage,
} from "@/Library/Common/TextInput/TextInput.styles";

const PhoneInputComponent = ({
	initialCountry = null,
	size,
	caption,
	statusss,
	errorMessage,
	...rest
}: {
	initialCountry: string | null;
	size?: "small" | "medium" | "large";
	caption?: string;
	statusss?: "error" | "Success";
	errorMessage?: string;
}) => {
	return (
		<PhoneInputComponentShell size={size} statusss={statusss}>
			<Label label={"Phone no.*"} />
			<PhoneInput
				preferredCountries={["eg", "ae", "qa", "sa"]}
				enableSearch={true}
				autoFormat={false}
				disableSearchIcon={true}
				country={initialCountry ?? "eg"}
				countryCodeEditable={false}
				{...rest}
			/>
			{caption && <TextInputCaption>{caption}</TextInputCaption>}
			{errorMessage && <TextInputErrorMessage>{errorMessage}</TextInputErrorMessage>}
		</PhoneInputComponentShell>
	);
};

export default PhoneInputComponent;
