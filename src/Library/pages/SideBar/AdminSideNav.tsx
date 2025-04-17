"use client";
import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import {
	AdminSideNavTranslationAr,
	AdminSideNavTranslationEn,
} from "../../../../messages/Admin/AdminSideNav";
import { Locale } from "@/Global";
import CustomLink from "@/Library/Common/CustomLink/CustomLink";
import styles from "@/Library/Common/Grids/Spaces.module.css";
import HomeIcon from "@/Library/Common/Icongraphy/HomeIcon/HomeIcon";
import Invoice from "@/Library/Common/Icongraphy/Invoice/Invoice";
import LeftArrow from "@/Library/Common/Icongraphy/LeftArrow/LeftArrow";
import SideBarItem from "@/Library/Common/SideBarItem/SideBarItem";
import SideBarSubTitle from "@/Library/Common/sideBarSubTitle/SideBarSubTitle";
import SideBar from "@/Library/pages/SideBar/SideBar";
import { MainLogo } from "@/Library/pages/SideBar/SideBar.styles";
import { setSidebarState } from "@/lib/OpenAndCloseSideBar";
import { MainRootState } from "@/lib/Store";

const AdminSideNav = ({ locale }: Locale) => {
	const t = locale === "en" ? AdminSideNavTranslationEn : AdminSideNavTranslationAr;
	const dispatch = useDispatch();
	const { isOpen } = useSelector((state: MainRootState) => state.OpenAndCloseSideBar);
	useEffect(() => {
		const savedState = JSON.parse("true");
		dispatch(setSidebarState(savedState));
	}, [dispatch]);

	return (
		<>
			<SideBar locale={locale}>
				<MainLogo href={"/"}>
					{!isOpen ? (
						<svg
							width="26"
							height="33"
							viewBox="0 0 26 33"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M8.06938 0.120117V7.24955H0.939941V32.2011H11.6356V25.0716H18.7651V17.9422H25.8945V0.120117H8.06938ZM15.2018 21.5084H11.6356V14.379H8.06938V28.6379H4.50618V10.8128H15.2018V21.5084ZM18.7651 14.379V7.24955H11.6356V3.68332H22.3313V14.379H18.7651Z"
								fill="#4F29F3"
							/>
						</svg>
					) : (
						<svg
							width="151"
							height="33"
							viewBox="0 0 151 33"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M8.06938 0.120117V7.24955H0.939941V32.2011H11.6356V25.0716H18.7651V17.9422H25.8945V0.120117H8.06938ZM15.2018 21.5084H11.6356V14.379H8.06938V28.6379H4.50618V10.8128H15.2018V21.5084ZM18.7651 14.379V7.24955H11.6356V3.68332H22.3313V14.379H18.7651Z"
								fill="#4F29F3"
							/>
							<path
								d="M38.2733 6.67827H50.0492V10.6929H42.7637V14.1531H50.0492V18.1678H42.7637V21.9446H50.0492V25.9593H38.2733V6.67676V6.67827Z"
								fill="#4F29F3"
							/>
							<path
								d="M64.8866 21.9446V25.9593H52.7366V6.67676H57.2269V21.9446H64.8866Z"
								fill="#4F29F3"
							/>
							<path
								d="M81.6803 13.5987C81.6803 17.8254 79.1442 20.6508 75.3674 20.6508H72.0663V25.9593H67.5759V6.67676H75.3674C79.1442 6.67676 81.6803 9.45067 81.6803 13.5971V13.5987ZM76.899 13.6517C76.899 11.8822 75.8689 10.6929 74.31 10.6929H72.0648V16.6362H74.31C75.8689 16.6362 76.899 15.4469 76.899 13.6517Z"
								fill="#4F29F3"
							/>
							<path
								d="M100.217 25.9595L99.6887 18.168L94.6696 24.3748H94.406L89.3869 18.168L88.8582 25.9595H84.3678L85.4237 6.36035H85.6873L94.5363 17.5075L103.385 6.36035H103.65L104.706 25.9595H100.216H100.217Z"
								fill="#4F29F3"
							/>
							<path
								d="M121.501 13.5987C121.501 17.8254 118.965 20.6508 115.188 20.6508H111.886V25.9593H107.395V6.67676H115.187C118.964 6.67676 121.5 9.45067 121.5 13.5971L121.501 13.5987ZM116.72 13.6517C116.72 11.8822 115.69 10.6929 114.131 10.6929H111.886V16.6362H114.131C115.69 16.6362 116.72 15.4469 116.72 13.6517Z"
								fill="#4F29F3"
							/>
							<path
								d="M121.501 25.0143C121.501 24.4598 121.925 24.0356 122.512 24.0356C123.098 24.0356 123.522 24.4598 123.522 25.0143C123.522 25.537 123.098 25.9597 122.512 25.9597C121.925 25.9597 121.501 25.5355 121.501 25.0143Z"
								fill="#4F29F3"
							/>
							<path
								d="M124.598 22.325C124.598 20.0434 126.016 18.6572 128.184 18.6572C128.95 18.6572 129.814 18.9011 130.385 19.2602L129.814 20.3192C129.341 20.0752 128.82 19.9449 128.331 19.9449C127.108 19.9449 126.26 20.8903 126.26 22.3083C126.26 23.7263 127.108 24.6883 128.331 24.6883C128.837 24.6883 129.358 24.5914 129.814 24.3459L130.385 25.3731C129.864 25.7321 129.015 25.9594 128.184 25.9594C126.047 25.9594 124.598 24.5247 124.598 22.3235V22.325Z"
								fill="#4F29F3"
							/>
							<path
								d="M131.46 22.3083C131.46 20.1237 132.878 18.6572 135.046 18.6572C137.214 18.6572 138.632 20.1237 138.632 22.3083C138.632 24.4929 137.181 25.9594 135.046 25.9594C132.912 25.9594 131.46 24.508 131.46 22.3083ZM136.97 22.3083C136.97 20.8418 136.22 19.9449 135.046 19.9449C133.872 19.9449 133.122 20.8418 133.122 22.3083C133.122 23.7748 133.889 24.6883 135.046 24.6883C136.204 24.6883 136.97 23.7915 136.97 22.3083Z"
								fill="#4F29F3"
							/>
							<path
								d="M150.94 21.8022V25.7956H149.261V21.8824C149.261 20.5947 148.707 19.9751 147.778 19.9751C147.192 19.9751 146.572 20.3493 146.083 20.8235L146.1 21.0189C146.148 21.2628 146.165 21.5249 146.165 21.8022V25.7956H144.486V21.8824C144.486 20.5947 143.932 19.9751 143.003 19.9751C142.448 19.9751 141.894 20.269 141.39 20.7417V25.7956H139.711V18.8343H141.39V19.6327C141.976 19.0298 142.808 18.6541 143.541 18.6541C144.535 18.6541 145.318 19.1434 145.757 19.9751C146.442 19.2252 147.436 18.6541 148.316 18.6541C149.914 18.6541 150.94 19.8933 150.94 21.8006V21.8022Z"
								fill="#4F29F3"
							/>
						</svg>
					)}
				</MainLogo>
				<CustomLink
					className={`${styles.marginTop32} ${styles.marginBottom32}`}
					startIcon={<LeftArrow />}
					href={"/"}
					type={"primary"}
					size={"sm"}
					Label={t.dashboard}
				/>
				<SideBarItem href={"/admin/students"} icon={<HomeIcon />} title={t.items.item1.title} />
				<SideBarItem href={"/admin/invoices"} icon={<Invoice />} title={t.items.item2.title} />
				<SideBarItem
					href={"/admin/addStudentToExam"}
					icon={<Invoice />}
					title={"add student to exam"}
				/>
				<SideBarSubTitle body={t.items.item3.title} />
				<SideBarItem
					href={"/admin/exams"}
					icon={<HomeIcon />}
					title={t.items.item3.subTitles.subTitle1}
				/>{" "}
				<SideBarItem href={"/admin/sub-exam"} icon={<HomeIcon />} title={"sub Exams"} />
				<SideBarSubTitle body={t.items.item4.title} />
				<SideBarItem href={"/admin/exams/tag"} icon={<HomeIcon />} title={"Tags"} />
				<SideBarItem
					href={"/admin/exams/tag/addTagToQuestion"}
					icon={<HomeIcon />}
					title={t.items.item4.subTitles.subTitle2}
				/>
				<SideBarSubTitle body={t.items.item5.title} />
				<SideBarItem
					href={"/admin/exams/question"}
					icon={<HomeIcon />}
					title={t.items.item5.subTitles.subTitle1}
				/>
				<SideBarItem
					href={"/admin/exams/assignQuestionToExam"}
					icon={<HomeIcon />}
					title={t.items.item5.subTitles.subTitle2}
				/>
				<SideBarItem
					href={"/admin/promo"}
					icon={<HomeIcon />}
					title={t.items.item5.subTitles.subTitle3}
				/>
			</SideBar>
		</>
	);
};

export default AdminSideNav;
