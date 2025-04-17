"use client";
import React, { ReactNode, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import SideBarIcon from "@/Library/Common/Icongraphy/SideBarIcon/SideBarIcon";
import Tags from "@/Library/Common/Tags/Tags";
import {
	AsideNAvBar,
	MainLogo,
	OpenButton,
	Overlay,
	ValuesChild,
} from "@/Library/pages/SideBar/SideBar.styles";
import { OpenAndClose, setSidebarState } from "@/lib/OpenAndCloseSideBar";
import { MainRootState } from "@/lib/Store";

const BetaTag = styled.div`
	display: flex;
	justify-content: end;

	& > *,
	& > * > * {
		color: white !important;
	}
`;

const SideBar = ({
	children,
	locale,
	collapse = true,
}: {
	children: ReactNode;
	locale: string;
	collapse?: boolean;
}) => {
	const dispatch = useDispatch();
	const { isOpen } = useSelector((state: MainRootState) => state.OpenAndCloseSideBar);
	useEffect(() => {
		const savedState = JSON.parse("true");
		dispatch(setSidebarState(savedState));
	}, [dispatch]);
	const handleClickOutside = () => {
		if (isOpen) {
			dispatch(OpenAndClose());
		}
	};

	return (
		<aside>
			{isOpen && <Overlay onClick={handleClickOutside} />}
			<AsideNAvBar className={"AsideNAvBar"} $language={locale} $isOpen={isOpen}>
				<ValuesChild>{children}</ValuesChild>
			</AsideNAvBar>
		</aside>
	);
};

export default SideBar;
