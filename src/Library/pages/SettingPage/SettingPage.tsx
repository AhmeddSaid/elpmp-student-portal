"use client";
import Link from "next/link";
import React from "react";
import { SupportAr, SupportEn } from "../../../../messages/Support/Support";
import styles from "./../../Common/Grids/Spaces.module.css";
import {
	AboutSection,
	AboutSectionSlice,
	Container,
	SocialGrid,
	SocialIcon,
	SocialItem,
	SocialSectionSlice,
	SocialSubtitle,
	SocialText,
	SocialTitle,
} from "./SettingPage.styles";
import Facebook from "@/Library/Common/Icongraphy/FaceBook/FaceBook";
import SnapChat from "@/Library/Common/Icongraphy/SnapChat/SnapChat";
import SolidX from "@/Library/Common/Icongraphy/SolidX/SolidX";
import Youtube from "@/Library/Common/Icongraphy/Youtube/Youtube";
import PageHeader from "@/Library/Common/PageHeader/PageHeader";
import { Heading3, SmallParagraph } from "@/Library/Common/Typograhy/Typography";

const SettingPage = ({ locale }: { locale: string }) => {
	const t = locale === "en" ? SupportEn : SupportAr;
	const socialAccounts = [
		{
			title: t.socialMedia.socialMedia1.title,
			subtitle: t.socialMedia.socialMedia1.subtitle,
			icon: <Facebook />,
			href: "/",
		},
		{
			title: t.socialMedia.socialMedia2.title,
			subtitle: t.socialMedia.socialMedia2.subtitle,
			icon: <SolidX />,
			href: "/",
		},
		{
			title: t.socialMedia.socialMedia3.title,
			subtitle: t.socialMedia.socialMedia3.subtitle,
			icon: (
				<svg
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<g clipPath="url(#clip0_500_48)">
						<path
							d="M7.44432 1.07693C6.27391 1.13215 5.47464 1.31893 4.77592 1.5935C4.05277 1.87532 3.43984 2.2535 2.83 2.86555C2.22015 3.4776 1.84461 4.09096 1.56476 4.81521C1.29394 5.51548 1.11046 6.3154 1.05876 7.48648C1.00706 8.65755 0.995618 9.03397 1.00134 12.0212C1.00706 15.0084 1.02026 15.3828 1.07702 16.5563C1.1329 17.7265 1.31902 18.5255 1.59358 19.2245C1.87585 19.9476 2.25359 20.5603 2.86586 21.1704C3.47812 21.7805 4.09105 22.1551 4.81706 22.4354C5.51666 22.7058 6.31681 22.8902 7.48766 22.9414C8.65852 22.9927 9.03538 23.0046 12.0217 22.9988C15.008 22.9931 15.384 22.9799 16.5573 22.9243C17.7305 22.8686 18.5254 22.6812 19.2246 22.4079C19.9477 22.125 20.5609 21.7479 21.1705 21.1354C21.7801 20.5229 22.1554 19.9091 22.4351 19.1844C22.7061 18.4848 22.8902 17.6847 22.9411 16.5147C22.9923 15.3406 23.0044 14.9657 22.9987 11.9789C22.993 8.99217 22.9796 8.61773 22.9239 7.44468C22.8682 6.27162 22.6819 5.475 22.4076 4.77561C22.1249 4.05246 21.7475 3.4402 21.1355 2.82969C20.5235 2.21918 19.9092 1.84408 19.1847 1.56512C18.4847 1.29429 17.685 1.10971 16.5141 1.05911C15.3433 1.00851 14.9664 0.995531 11.979 1.00125C8.9916 1.00697 8.6176 1.01973 7.44432 1.07693ZM7.57281 20.9625C6.50029 20.9159 5.91795 20.7377 5.52986 20.5885C5.01594 20.3905 4.64986 20.1511 4.26309 19.7681C3.87633 19.3851 3.63872 19.0177 3.43808 18.5048C3.28738 18.1168 3.10588 17.5351 3.05572 16.4626C3.00116 15.3034 2.98972 14.9553 2.98334 12.0185C2.97696 9.08171 2.98818 8.73411 3.039 7.57448C3.08476 6.50285 3.26406 5.91984 3.413 5.53198C3.611 5.01739 3.84949 4.65197 4.23339 4.26542C4.61729 3.87888 4.9836 3.64084 5.49686 3.4402C5.88451 3.28883 6.46619 3.10887 7.53826 3.05783C8.69834 3.00283 9.04594 2.99183 11.9823 2.98545C14.9187 2.97907 15.2672 2.99007 16.4277 3.04111C17.4993 3.08775 18.0825 3.26529 18.47 3.41512C18.9841 3.61312 19.35 3.85094 19.7365 4.2355C20.1231 4.62007 20.3613 4.98505 20.562 5.49942C20.7135 5.88596 20.8935 6.46743 20.9441 7.54016C20.9993 8.70023 21.0119 9.04805 21.0171 11.9842C21.0224 14.9204 21.0121 15.2691 20.9613 16.4282C20.9144 17.5008 20.7366 18.0833 20.5873 18.4718C20.3893 18.9856 20.1506 19.3519 19.7664 19.7382C19.3823 20.1245 19.0164 20.3625 18.503 20.5632C18.1158 20.7143 17.5334 20.8947 16.4622 20.9458C15.3021 21.0003 14.9545 21.0118 12.0171 21.0182C9.0796 21.0245 8.7331 21.0127 7.57302 20.9625H7.57281ZM16.5403 6.12092C16.5408 6.38202 16.6186 6.63711 16.764 6.85396C16.9095 7.0708 17.1159 7.23964 17.3573 7.33914C17.5987 7.43863 17.8642 7.4643 18.1202 7.41291C18.3762 7.36151 18.6111 7.23536 18.7954 7.0504C18.9797 6.86544 19.105 6.62999 19.1555 6.37381C19.2059 6.11764 19.1793 5.85226 19.0789 5.61124C18.9785 5.37021 18.8089 5.16437 18.5915 5.01974C18.3742 4.87511 18.1188 4.79819 17.8577 4.79871C17.5077 4.79941 17.1723 4.93909 16.9252 5.18704C16.6782 5.43499 16.5397 5.77091 16.5403 6.12092V6.12092ZM6.35201 12.011C6.35817 15.1307 8.89172 17.6539 12.0107 17.6479C15.1297 17.642 17.6546 15.1087 17.6487 11.989C17.6427 8.86941 15.1085 6.34555 11.9891 6.35171C8.86972 6.35787 6.34607 8.89185 6.35201 12.011ZM8.33335 12.0071C8.33192 11.2819 8.54557 10.5725 8.94728 9.96871C9.349 9.36492 9.92074 8.89381 10.5902 8.61495C11.2597 8.3361 11.9968 8.26202 12.7084 8.4021C13.4199 8.54217 14.074 8.89011 14.5878 9.4019C15.1016 9.91369 15.4521 10.5664 15.595 11.2774C15.7379 11.9884 15.6668 12.7258 15.3906 13.3963C15.1144 14.0669 14.6455 14.6405 14.0433 15.0446C13.4411 15.4487 12.7326 15.6652 12.0074 15.6666C11.5258 15.6676 11.0488 15.5738 10.6036 15.3904C10.1583 15.207 9.75351 14.9377 9.41233 14.5979C9.07115 14.2581 8.80026 13.8543 8.61513 13.4098C8.43 12.9653 8.33425 12.4886 8.33335 12.0071"
							fill="black"
						/>
					</g>
					<defs>
						<clipPath id="clip0_500_48">
							<rect width="24" height="24" fill="white" />
						</clipPath>
					</defs>
				</svg>
			),
			href: "/",
		},
		{
			title: t.socialMedia.socialMedia4.title,
			subtitle: t.socialMedia.socialMedia4.subtitle,
			icon: (
				<svg
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<g clipPath="url(#clip0_500_51)">
						<path
							d="M19.7407 19.7407H16.4815V14.6481C16.4815 13.4259 16.4475 11.8642 14.7839 11.8642C13.0864 11.8642 12.8148 13.1883 12.8148 14.5463V19.7407H9.55556V9.25H12.679V10.6759H12.713C13.358 9.58951 14.5463 8.94444 15.8025 8.97839C19.0957 8.97839 19.7068 11.1512 19.7068 13.9691L19.7407 19.7407ZM5.88889 7.82407C4.83642 7.82407 3.98765 6.97531 3.98765 5.92284C3.98765 4.87037 4.83642 4.0216 5.88889 4.0216C6.94136 4.0216 7.79012 4.87037 7.79012 5.92284C7.79012 6.97531 6.94136 7.82407 5.88889 7.82407ZM7.51852 19.7407H4.25926V9.25H7.51852V19.7407ZM21.3704 1H2.62963C1.74691 1 1 1.71296 1 2.59568V21.4043C1 22.287 1.74691 23 2.62963 23H21.3704C22.2531 23 23 22.287 23 21.4043V2.59568C23 1.71296 22.2531 1 21.3704 1Z"
							fill="#0A66C2"
						/>
					</g>
					<defs>
						<clipPath id="clip0_500_51">
							<rect width="24" height="24" fill="white" />
						</clipPath>
					</defs>
				</svg>
			),
			href: "/",
		},
		{
			title: t.socialMedia.socialMedia5.title,
			subtitle: t.socialMedia.socialMedia5.subtitle,
			icon: <SnapChat />,
			href: "/",
		},
		{
			title: t.socialMedia.socialMedia6.title,
			subtitle: t.socialMedia.socialMedia6.subtitle,
			icon: <Youtube />,
			href: "/",
		},
	];
	return (
		<Container>
			<PageHeader title={t.supportHeading} subTitle={t.supportSubHeading} />

			<SocialSectionSlice border={true}>
				<Heading3>ELPMP.com Social Media</Heading3>
				<SocialGrid>
					{socialAccounts.map(account => (
						<SocialItem key={account.title} href={account.href}>
							<div>
								<SocialIcon className={styles.marginBottom16}>{account.icon}</SocialIcon>

								<SocialText>
									<SocialTitle>{account.title}</SocialTitle>
									<SocialSubtitle>{account.subtitle}</SocialSubtitle>
								</SocialText>
							</div>
						</SocialItem>
					))}
				</SocialGrid>
			</SocialSectionSlice>

			<SocialSectionSlice>
				<Heading3>Mustafa Maher&#39;s Social Media</Heading3>
				<SocialGrid>
					{socialAccounts.map(account => (
						<SocialItem key={account.title} href={account.href}>
							<div>
								<SocialIcon className={styles.marginBottom16}>{account.icon}</SocialIcon>

								<SocialText>
									<SocialTitle>{account.title}</SocialTitle>
									<SocialSubtitle>{account.subtitle}</SocialSubtitle>
								</SocialText>
							</div>
						</SocialItem>
					))}
				</SocialGrid>
			</SocialSectionSlice>

			<AboutSection>
				<AboutSectionSlice>
					<Heading3>Live Chat</Heading3>
					<SmallParagraph color={"secondary"} className={"supportParagraph"}>
						{" "}
						For real-time assistance, use our live chat feature available at the bottom right corner
						of this page. 💬 Click the chat icon to connect with a support representative instantly.
					</SmallParagraph>
				</AboutSectionSlice>

				<AboutSectionSlice>
					<Heading3>Email Support</Heading3>
					<SmallParagraph color={"secondary"} className={"supportParagraph"}>
						{" "}
						For detailed inquiries or issues requiring further attention, contact us via email at:
						📧 <Link href="mailto:support@ELPMP.com">support@ELPMP.com</Link> We’ll respond within
						24–48 hours to ensure you get the support you need.
					</SmallParagraph>
				</AboutSectionSlice>

				{/*<AboutSectionSlice>*/}
				{/*	<Heading3>Our Working Hours</Heading3>*/}
				{/*	<SmallParagraph color={"secondary"} className={"supportParagraph"}>*/}
				{/*		Monday to Friday: 9:00 AM – 6:00 PM*/}
				{/*	</SmallParagraph>*/}
				{/*	<SmallParagraph color={"secondary"} className={"supportParagraph"}>*/}
				{/*		Saturday: 10:00 AM – 4:00 PM*/}
				{/*	</SmallParagraph>*/}

				{/*	<SmallParagraph color={"secondary"} className={"supportParagraph"}>*/}
				{/*		Saturday - Sunday: Closed*/}
				{/*	</SmallParagraph>*/}

				{/*	<SmallParagraph className={"supportParagraph"}>*/}
				{/*		We’re dedicated to providing support during these hours, and you can always leave us a*/}
				{/*		message after hours.*/}
				{/*	</SmallParagraph>*/}
				{/*</AboutSectionSlice>*/}

				<AboutSectionSlice>
					<Heading3>Our Vision</Heading3>
					<SmallParagraph color={"secondary"} className={"supportParagraph"}>
						To create a world where ambitious professionals confidently achieve their project
						management goals, equipped with the skills and knowledge to drive real-world impact.
					</SmallParagraph>
				</AboutSectionSlice>

				<AboutSectionSlice border={true}>
					<Heading3>Our Mission</Heading3>
					<SmallParagraph color={"secondary"} className={"supportParagraph"}>
						ELPMP.com provides accessible, flexible, and high-quality project management education
						that blends theoretical knowledge with practical application, empowering learners to get
						certified and gain real-world skills relevant to their careers.
					</SmallParagraph>
				</AboutSectionSlice>
			</AboutSection>
		</Container>
	);
};

export default SettingPage;
