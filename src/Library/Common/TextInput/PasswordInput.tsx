"use client";
import React, { ReactNode, useState } from "react";
import styled from "styled-components";
import InputError from "./InputError";
import { InputShell, InputStyles, InputType } from "./InputStyles";
import Label from "./Label";
import PasswordChecker from "./PasswordChecker";
import uuid from "@/Utils/uuid";

const Relative = styled.div<{ locale?: "en" | "ar" }>`
	position: relative;

	& > svg {
		position: absolute;
		right: ${({ locale }) => (locale === "en" ? "2.5rem" : "")}; //3rem;
		left: ${({ locale }) => (locale === "en" ? "" : "2.5rem")}; //3rem;
		top: 25%;
		background-color: transparent;
		display: flex;
		align-items: center;
		justify-content: center;
		cursor: pointer;
	}

	button {
		position: absolute;
		right: ${({ locale }) => locale === "en" && "0"};
		left: ${({ locale }) => locale === "ar" && "0"};
		top: 0;
		background-color: transparent;
		width: 3rem;
		height: 3rem;
		display: flex;
		align-items: center;
		justify-content: center;
		cursor: pointer;
	}
`;

const Pass = styled(InputStyles)`
	&::placeholder {
		color: var(--Text-text-primary-muted, #a2abb8);
		font-variant-numeric: lining-nums proportional-nums;
		font-size: 0.875rem;
		font-style: normal;
		font-weight: 500;
		line-height: 1rem;
	}

	border-radius: var(--corner-03, 0.5rem);
	border: 1px solid var(--Border-border-primary-hover, #a2abb8);
`;

const PasswordInput = ({
	name,
	disabled = false,
	autoComplete = "no",
	readOnly = false,
	label,
	id,
	className,
	ErrorMessage,
	placeholder,
	value,
	checker = false,
	locale,
	...rest
}: InputType & { checker?: boolean }): ReactNode => {
	const [showPassword, setShowPassword] = useState(false);
	const errorId = `${name || label || uuid()}-error`;
	const [isFocused, setFocused] = useState(false);
	const handleFocus = () => setFocused(true);
	return (
		<>
			<InputShell>
				<Label label={label} />
				<Relative locale={locale}>
					<Pass
						onFocus={handleFocus}
						name={name || label}
						placeholder={placeholder}
						id={id}
						className={`${ErrorMessage && "error"} ${className}`}
						type={showPassword ? "text" : "password"}
						disabled={disabled}
						value={value}
						autoComplete={autoComplete}
						readOnly={readOnly}
						required={false}
						aria-invalid={!!ErrorMessage}
						aria-describedby={ErrorMessage ? errorId : undefined}
						{...rest}
					/>

					{ErrorMessage && (
						<svg xmlns="http://www.w3.org/2000/svg" width="21" height="23" viewBox="0 0 21 23">
							<g id="Group_106649" data-name="Group 106649" transform="translate(-1245 -468)">
								<circle
									id="Ellipse_2795"
									data-name="Ellipse 2795"
									cx="10.5"
									cy="10.5"
									r="10.5"
									transform="translate(1245 469)"
									fill="#d41a1a"
								/>
								<text
									id="_"
									data-name="!"
									transform="translate(1253 485)"
									fill="#fff"
									fontSize="16"
									fontFamily="Poppins-Regular, Poppins"
								>
									<tspan x="0" y="0">
										!
									</tspan>
								</text>
							</g>
						</svg>
					)}
					<button
						aria-label={showPassword ? "show password" : "hide password"}
						type={"button"}
						onClick={() => setShowPassword(prevState => !prevState)}
					>
						{!showPassword ? (
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="19.7"
								height="15.804"
								viewBox="0 0 19.7 15.804"
							>
								<g
									id="Iconly_Light_Show"
									data-name="Iconly/Light/Show"
									transform="translate(0.6 0.6)"
								>
									<g id="Show" transform="translate(-0.75 -0.751)">
										<path
											id="Stroke_1"
											data-name="Stroke 1"
											d="M6.323,3.162A3.162,3.162,0,1,1,3.161,0,3.162,3.162,0,0,1,6.323,3.162Z"
											transform="translate(6.839 4.891)"
											fill="none"
											stroke="#27252a"
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeMiterlimit="10"
											strokeWidth="1.2"
										/>
										<path
											id="Stroke_3"
											data-name="Stroke 3"
											d="M9.248,14.6c3.808,0,7.291-2.738,9.252-7.3C16.539,2.738,13.056,0,9.248,0h0C5.444,0,1.961,2.738,0,7.3c1.961,4.564,5.444,7.3,9.252,7.3Z"
											transform="translate(0.75 0.751)"
											fill="none"
											stroke="#27252a"
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeMiterlimit="10"
											strokeWidth="1.2"
										/>
									</g>
								</g>
							</svg>
						) : (
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="19.7"
								height="17.471"
								viewBox="0 0 19.7 17.471"
							>
								<g
									id="Iconly_Light_Hide"
									data-name="Iconly/Light/Hide"
									transform="translate(0.6 0.849)"
								>
									<g id="Hide" transform="translate(-0.75 -0.75)">
										<path
											id="Stroke_1"
											data-name="Stroke 1"
											d="M.925,5.395A3.123,3.123,0,0,1,0,3.166,3.16,3.16,0,0,1,5.394.925"
											transform="translate(6.836 5.472)"
											fill="none"
											stroke="#1a191a"
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeMiterlimit="10"
											strokeWidth="1.2"
										/>
										<path
											id="Stroke_3"
											data-name="Stroke 3"
											d="M2.537,0A3.158,3.158,0,0,1,0,2.542"
											transform="translate(10.568 9.199)"
											fill="none"
											stroke="#1a191a"
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeMiterlimit="10"
											strokeWidth="1.2"
										/>
										<path
											id="Stroke_5"
											data-name="Stroke 5"
											d="M3.9,12.638A13.43,13.43,0,0,1,0,7.3,13.592,13.592,0,0,1,3.934,1.938,8.534,8.534,0,0,1,9.25,0a8.554,8.554,0,0,1,5.336,1.957"
											transform="translate(0.75 1.334)"
											fill="none"
											stroke="#1a191a"
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeMiterlimit="10"
											strokeWidth="1.2"
										/>
										<path
											id="Stroke_7"
											data-name="Stroke 7"
											d="M9.98,0a15.359,15.359,0,0,1,1.8,3.146c-1.967,4.557-5.443,7.3-9.25,7.3A7.981,7.981,0,0,1,0,10.035"
											transform="translate(7.468 5.491)"
											fill="none"
											stroke="#1a191a"
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeMiterlimit="10"
											strokeWidth="1.2"
										/>
										<path
											id="Stroke_9"
											data-name="Stroke 9"
											d="M15.774,0,0,15.774"
											transform="translate(2.113 0.75)"
											fill="none"
											stroke="#1a191a"
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeMiterlimit="10"
											strokeWidth="1.2"
										/>
									</g>
								</g>
							</svg>
						)}
					</button>
				</Relative>
				{ErrorMessage && (
					<InputError
						message={checker ? "Password should follow these requirements" : ErrorMessage}
					/>
				)}
				{(isFocused || ErrorMessage) && checker && <PasswordChecker password={value} />}
			</InputShell>
		</>
	);
};

export default PasswordInput;

PasswordInput.displayName = "Password Input";
