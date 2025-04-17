import React, { ReactNode } from "react";
import AuthLayout from "@/Library/pages/Auth/Layout/AuthLayout";

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>): ReactNode {
	return <AuthLayout>{children}</AuthLayout>;
}
