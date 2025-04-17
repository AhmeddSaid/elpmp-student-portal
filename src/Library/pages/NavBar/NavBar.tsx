"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import { AvatarMenuAr, AvatarMenuEn } from "../../../../messages/AvatarMenu/AvatarMenu";
import { Locale } from "@/Global";
import Avatar from "@/Library/Common/Avatar/Avatar";
import { Col, Flexbox, Row, SmallSection } from "@/Library/Common/Grids/Grids";
import CrossIcon from "@/Library/Common/Icongraphy/CrossIcon/CrossIcon";
import GlobalIcon from "@/Library/Common/Icongraphy/GlobalIcon/GlobalIcon";
import LeadIcon from "@/Library/Common/Icongraphy/LeadIcon/LeadIcon";
import LineSetting from "@/Library/Common/Icongraphy/LineSettenig/LineSetting";
import Logout from "@/Library/Common/Icongraphy/Logout/Logout";

import Mail from "@/Library/Common/Icongraphy/Mail/Mail";
import SaFlag from "@/Library/Common/Icongraphy/SaFlag/SaFlag";
import SupportIcon from "@/Library/Common/Icongraphy/SupportIcon/SupportIcon";
import UsFlag from "@/Library/Common/Icongraphy/UsFlag/UsFlag";
import LanguageSwitcher from "@/Library/Common/LanguageSwitcher/LanguageSwitcher";
import {
	AvatarContainer,
	AvatarMenu,
	ItemBody,
	LangBox,
	MailIconShell,
	NavBarHeader,
	NavBarShell,
} from "@/Library/pages/NavBar/NavBar.styles";

const NavBar = ({ locale }: Locale) => {
	// const dispatch = useDispatch();
	// const { isLight } = useSelector((state: MainRootState) => state.ChangeTheme);
	const [open, setOpen] = useState(false);
	const [openLanguage, setOpenLanguage] = useState(false);
	// const [notificationOpen, setNotificationOpen] = useState(false);
	const menuRef = useRef<HTMLDivElement>(null);
	// const notificationRef = useRef<HTMLDivElement>(null);
	const langRef = useRef<HTMLDivElement>(null);
	const pathname = usePathname();
	const originalPathname = pathname.replace(/^\/(en|ar)\//, "/");
	const router = useRouter();
	const PathName = usePathname();

	const changeLang = (lang: "en" | "ar") => {
		const destination = originalPathname === "/en" ? "/" : originalPathname;
		if (lang === "en") {
			router.push(`/en${destination}`);
		} else {
			router.push(`/ar${destination}`);
		}
		router.refresh();
	};
	const isOpen = () => {
		setOpen(prev => !prev);
		// if (openLanguage) setOpenLanguage(false);
	};
	const handleLanguageClick = () => {
		setOpenLanguage(prev => !prev);
		setOpen(false);
	};

	// const router = useRouter();
	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
				setOpen(false);
			}
			// if (notificationRef.current && !notificationRef.current.contains(event.target as Node)) {
			// 	setNotificationOpen(false);
			// }
			if (langRef.current && !langRef.current.contains(event.target as Node)) {
				setOpenLanguage(false);
			}
		};
		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, []);

	const t = locale === "en" ? AvatarMenuEn : AvatarMenuAr;
	// const tt = locale === "en" ? NotificationMenuEn : NotificationMenuAr;

	return (
		<>
			<nav>
				<SmallSection>
					{/*{openLanguage && (*/}
					{/*	<LangBox>*/}
					{/*		<Row as={"ul"} className={"langRow"}>*/}
					{/*			<button className={"exit"} onClick={handleLanguageClick}>*/}
					{/*				<CrossIcon />*/}
					{/*			</button>*/}
					{/*			<Col as={"li"} $xs={4}>*/}
					{/*				{locale === "en" ? (*/}
					{/*					<Flexbox*/}
					{/*						$direction={"column"}*/}
					{/*						$align={"center"}*/}
					{/*						as={"div"}*/}
					{/*						$gap={4}*/}
					{/*						className={"language-name"}*/}
					{/*					>*/}
					{/*						<UsFlag />*/}
					{/*						<p>English</p>*/}
					{/*					</Flexbox>*/}
					{/*				) : (*/}
					{/*					<Flexbox*/}
					{/*						$direction={"column"}*/}
					{/*						$align={"center"}*/}
					{/*						as={"div"}*/}
					{/*						className={"lang-name"}*/}
					{/*						$gap={4}*/}
					{/*						onClick={() => changeLang("en")}*/}
					{/*					>*/}
					{/*						<UsFlag />*/}
					{/*						<button>English</button>*/}
					{/*					</Flexbox>*/}
					{/*				)}*/}
					{/*			</Col>*/}
					{/*			<Col as={"li"} $xs={4}>*/}
					{/*				{locale === "ar" ? (*/}
					{/*					<Flexbox*/}
					{/*						$direction={"column"}*/}
					{/*						$align={"center"}*/}
					{/*						as={"div"}*/}
					{/*						$gap={4}*/}
					{/*						className={"language-name"}*/}
					{/*					>*/}
					{/*						<SaFlag />*/}
					{/*						<p>عربي</p>*/}
					{/*					</Flexbox>*/}
					{/*				) : (*/}
					{/*					<Flexbox*/}
					{/*						$direction={"column"}*/}
					{/*						$align={"center"}*/}
					{/*						as={"div"}*/}
					{/*						className={"lang-name"}*/}
					{/*						$gap={4}*/}
					{/*						onClick={() => changeLang("ar")}*/}
					{/*					>*/}
					{/*						<SaFlag />*/}
					{/*						<button>عربي</button>*/}
					{/*					</Flexbox>*/}
					{/*				)}*/}
					{/*			</Col>*/}
					{/*		</Row>*/}
					{/*	</LangBox>*/}
					{/*)}*/}

					<NavBarShell>
						<Flexbox className={"NavBarContainer"} $align={"center"} $justify={"space-between"}>
							<NavBarHeader>
								{PathName === "/exams" && "Exams"}
								{PathName === "/settings" && "Settings"}
								{PathName === "/history" && "History"}
								{PathName === "/my-learning" && "My Learning"}
								{PathName === `/my-learning` && "My Learning"}
								{PathName === "/" && "My learning"}
							</NavBarHeader>
							<Flexbox $align={"center"} $gap={20}>
								{/*<NotificationBox*/}
								{/*	ref={notificationRef}*/}
								{/*	onClick={() => setNotificationOpen(prev => !prev)}*/}
								{/*>*/}
								{/*	{notificationContent.length > 0 ? <NotificationDot /> : <NotificationIcon />}*/}
								{/*	<NotificationMenu notificationOpen={notificationOpen} locale={locale}>*/}
								{/*		<div className={"positionRelative"}>*/}
								{/*			<NotificationHeadingShell>*/}
								{/*				<NotificationHeading>{tt.notification}</NotificationHeading>*/}
								{/*				<MarkAll>{tt.markAsRead}</MarkAll>*/}
								{/*			</NotificationHeadingShell>*/}
								{/*		</div>*/}
								{/*		<div>*/}
								{/*			{notificationContent.length === 0 ? (*/}
								{/*				<Row>*/}
								{/*					<EmptyDivStar>*/}
								{/*						<p>{tt.noNotification}</p>*/}
								{/*						<Bell />*/}
								{/*					</EmptyDivStar>*/}
								{/*				</Row>*/}
								{/*			) : (*/}
								{/*				notificationContent.map((notification, index) => (*/}
								{/*					<NotificationContainer key={index}>*/}
								{/*						<TestIcon />*/}
								{/*						<NotificationBody>*/}
								{/*							<p>*/}
								{/*								<NotificationBodySpan>*/}
								{/*									{notification.body.split("\n")[0]}*/}
								{/*								</NotificationBodySpan>{" "}*/}
								{/*								released a new course &nbsp;*/}
								{/*								<NotificationBodySpan>*/}
								{/*									{notification.body.split("\n")[2]}*/}
								{/*								</NotificationBodySpan>*/}
								{/*							</p>*/}
								{/*							<NotificationInfo>{notification.date}</NotificationInfo>*/}
								{/*						</NotificationBody>*/}
								{/*						<TestIcon />*/}
								{/*					</NotificationContainer>*/}
								{/*				))*/}
								{/*			)}*/}
								{/*		</div>*/}
								{/*	</NotificationMenu>*/}
								{/*</NotificationBox>*/}
								<AvatarContainer>
									<Flexbox $gap={12}>
										{/*<MailIconShell>*/}
										{/*	<Mail />*/}
										{/*</MailIconShell>*/}

										<div onClick={isOpen}>
											<Avatar Size={"sm"} AvatarType={"Icon"} />
										</div>

										<Flexbox $align={"center"}>
											<LanguageSwitcher locale={locale} />
										</Flexbox>
									</Flexbox>
									{open && (
										<AvatarMenu locale={locale} ref={menuRef}>
											<ItemBody>
												<Flexbox $gap={10}>
													<LineSetting />
													<Link href={"/settings"}>
														<p>{t.setting}</p>
													</Link>
												</Flexbox>
											</ItemBody>
											<ItemBody>
												<Flexbox $gap={10}>
													<LeadIcon />
													<Link href={"/support"}>
														<p>{t.support}</p>
													</Link>
												</Flexbox>
											</ItemBody>
											{/*<ItemBody>*/}
											{/*	<Flexbox onClick={handleLanguageClick} $gap={50} $justify={"space-between"}>*/}
											{/*		<Flexbox $gap={10}>*/}
											{/*			<GlobalIcon />*/}
											{/*			<p>{t.language}</p>*/}
											{/*		</Flexbox>*/}
											{/*	</Flexbox>*/}
											{/*</ItemBody>*/}

											<ItemBody
												onClick={() => router.push("/auth/logout") as unknown as () => void}
											>
												<Flexbox $gap={10}>
													<Logout />
													<p>{t.signOut}</p>
												</Flexbox>
											</ItemBody>
										</AvatarMenu>
									)}
									{/*{openLanguage && (*/}
									{/*	<AvatarMenu locale={locale} ref={menuRef}>*/}
									{/*		<div>*/}
									{/*			<Flexbox gap={10}>*/}
									{/*				<button onClick={() => changeLang("en")}>English</button>*/}
									{/*				<button onClick={() => changeLang("ar")}>عربي</button>*/}
									{/*				<button onClick={handleLanguageClick}>Back</button>*/}
									{/*			</Flexbox>*/}
									{/*		</div>*/}
									{/*	</AvatarMenu>*/}
									{/*)}*/}
								</AvatarContainer>
							</Flexbox>
						</Flexbox>
					</NavBarShell>
				</SmallSection>
			</nav>
		</>
	);
};

export default NavBar;
