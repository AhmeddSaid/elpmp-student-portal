"use client";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useRef } from "react";
import { Locale } from "@/Global";
import { Flexbox } from "@/Library/Common/Grids/Grids";
import Global from "@/Library/Common/Icongraphy/Global/Global";
import {
	LanguageDropdown,
	LanguageDropdownList,
	LanguageSwitchBtn,
} from "@/Library/Common/LanguageSwitcher/LanguageSwitcher.styles";
// import {
// 	LanguageDropdown,
// 	LanguageDropdownList,
// 	LanguageSwitchBtn,
// } from "@/Components/LanguageSwitcher/LanguageSwitcher.styles";
// import { Locale } from "@/Library/Globals";

const LanguageSwitcher = ({ locale }: Locale) => {
	const [openDropdown, setOpenDropdown] = React.useState(false);
	const dropdownRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
				setOpenDropdown(false);
			}
		};

		document.addEventListener("mousedown", handleClickOutside);

		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, []);

	const pathname = usePathname();
	const originalPathname = pathname.replace(/^\/(en|ar)\//, "/");
	const router = useRouter();

	const changeLang = (lang: "en" | "ar") => {
		if (lang === locale) return;
		const destination = originalPathname === "/en" ? "/" : originalPathname;
		if (lang === "en") {
			router.push(`/en${destination}`);
		} else {
			router.push(`/ar${destination}`);
		}
		router.refresh();
	};

	return (
		<div ref={dropdownRef}>
			<LanguageDropdown
				onClick={() => {
					setOpenDropdown(!openDropdown);
				}}
			>
				<Global />
				<Flexbox>
					<span className={"Language"}>{locale === "en" ? "EN" : "عربي"}</span>

					<svg
						width="16"
						height="16"
						viewBox="0 0 16 16"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M11.6673 7.5L8.00065 10.6667L4.33398 7.5"
							stroke="#42434A"
							strokeWidth="1.5"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
					</svg>
				</Flexbox>
			</LanguageDropdown>
			<LanguageDropdownList openDropdown={openDropdown}>
				<LanguageSwitchBtn
					onClick={() => changeLang("ar")}
					isDisabled={locale === "ar"}
					type={"button"}
				>
					عربي
				</LanguageSwitchBtn>
				<LanguageSwitchBtn
					onClick={() => changeLang("en")}
					isDisabled={locale === "en"}
					type={"button"}
				>
					English
				</LanguageSwitchBtn>
			</LanguageDropdownList>
		</div>
	);
};

export default LanguageSwitcher;
