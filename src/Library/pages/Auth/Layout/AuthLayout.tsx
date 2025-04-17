"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { ReactNode } from "react";
import { Child, Shell, Side } from "./Styles";
import Button from "@/Library/Common/Button/Button";
import { Col, Flexbox, Row, Section } from "@/Library/Common/Grids/Grids";
import styles from "@/Library/Common/Grids/Spaces.module.css";
import Logo from "@/Library/Common/Logo/Logo";
import { Heading2 } from "@/Library/Common/Typograhy/Typography";

const AuthLayout = ({ children }: { children: ReactNode }): ReactNode => {
	const path = usePathname();
	const register = path === "/auth/register" || path.startsWith("/auth/reset-password");
	const logout = path === "/auth/logout";
	return (
		<Shell>
			<Side>
				<Heading2 color={"white"}>Welcome to ELPMP.COM</Heading2>
			</Side>
			<Child className={styles.marginTop48}>
				<Section as={"div"}>
					<Row $justify={"center"} $align={"center"}>
						<Col $lg={10} $md={9} $xs={12}>
							<Flexbox $align={"center"} $justify={"space-between"}>
								<Logo />
								{!logout && (
									<Flexbox $align={"center"}>
										<div className={styles.marginTop16}>
											<Link href={register ? "/auth/login" : "/auth/register"}>
												<Button size={"medium"} body={register ? "Login" : "Sign up"} />
											</Link>
										</div>
									</Flexbox>
								)}
							</Flexbox>
							{children}
						</Col>
					</Row>
				</Section>
			</Child>
		</Shell>
	);
};

export default AuthLayout;
