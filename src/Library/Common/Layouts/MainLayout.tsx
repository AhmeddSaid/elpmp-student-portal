"use client";
import Script from "next/script";
import React from "react";
import { Provider } from "react-redux";
import { GlobalStyle } from "./../Globals/Globals";
import StyledComponentsRegistry from "@/Library/Common/Globals/Registery";
import MainApp from "@/Library/Common/Layouts/MainApp";
import MicrosoftClarity from "@/Utils/MicrosoftClarity";
import GoogleAnalytics from "@/Utils/googleAnalytics";
import { Store1 } from "@/lib/Store";

const MainLayout = ({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) => {
	return (
		<>
			<StyledComponentsRegistry>
				<GlobalStyle />
				<Provider store={Store1}>
					<Script
						id={"chatwoot-src"}
						strategy="afterInteractive"
						nonce={"nonce"}
					>{`(function(d, t) {
															var BASE_URL = "https://support.elpmp.com";
															var g = d.createElement(t), s = d.getElementsByTagName(t)[0];
															g.src = BASE_URL + "/packs/js/sdk.js";
															g.defer = true;
															g.async = true;
															s.parentNode.insertBefore(g, s);
															g.onload = function() {
															window.chatwootSDK.run({
															websiteToken: "cmRKjN1WDNTXgbe4tc2Bg8yj",
															baseUrl: BASE_URL,
															});
															};
					})(document, "script");`}</Script>

					<GoogleAnalytics id={"G-FF7SMX1L92"} />
					<MicrosoftClarity />
					<MainApp>{children}</MainApp>
				</Provider>
			</StyledComponentsRegistry>
		</>
	);
};

export default MainLayout;
