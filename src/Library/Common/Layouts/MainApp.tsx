import { usePathname } from "next/navigation";
import NextTopLoader from "nextjs-toploader";
import React, { ReactNode } from "react";
import { useSelector } from "react-redux";
import { Toaster } from "sonner";
import { MainRootState } from "@/lib/Store";

const MainApp = ({ children }: { children: ReactNode }) => {
	const { isLight } = useSelector((state: MainRootState) => state.ChangeTheme);
	const path = usePathname();
	return (
		<body className={!isLight ? "dark" : "light"}>
			<main
				id={`${path.startsWith("/simulator") || path.startsWith("/history-details") ? "examSimulatorPage" : ""}`}
			>
				<Toaster position="top-center" richColors />
				{children}
				<NextTopLoader
					color="#4F29F3"
					initialPosition={0.08}
					crawlSpeed={200}
					height={4}
					crawl={true}
					showSpinner={false}
					easing="ease-in-out"
					speed={200}
					shadow="0 0 10px #4F29F3,0 0 5px #4F29F3"
					zIndex={160000}
					showAtBottom={false}
				/>
			</main>
		</body>
	);
};

export default MainApp;
