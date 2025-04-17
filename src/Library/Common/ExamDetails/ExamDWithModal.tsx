"use client";
import Link from "next/link";
import React, { useState } from "react";
import { ContentWrapper, CopyStatus, InviteLink, ModalTitle } from "./Modal.styles";
import { IconStyles } from "@/Library/Common/Answer/Answer.styles";
import Button from "@/Library/Common/Button/Button";
import { Flexbox } from "@/Library/Common/Grids/Grids";
import styles from "@/Library/Common/Grids/Spaces.module.css";
import Calculator from "@/Library/Common/Icongraphy/Calculator/Calculator";
import WhiteBoard from "@/Library/Common/Icongraphy/WhiteBoared/WhiteBoard";
import Modal from "@/Library/Common/Modal/Modal";
import ExamDetails from "@/Library/pages/ExamPage/ExamDetails";
import { ExamPageShell, ExamSubTitle, ExamTitle } from "@/Library/pages/ExamPage/ExamPage.styles";

const ExamDWithModal = () => {
	const [isModalOpen, setModalOpen] = useState(false);
	const [copySuccess, setCopySuccess] = useState("");
	const handleLinkClick = async () => {
		const inviteLink = "https://elpmp/invite";
		try {
			await navigator.clipboard.writeText(inviteLink);
			setCopySuccess("Link copied!");
		} catch (err) {
			setCopySuccess("Failed to copy!");
		}
	};
	const toggleModal = () => {
		setModalOpen(!isModalOpen);
	};
	const renderModalContent = (): React.ReactNode => {
		if (!isModalOpen) return null;
		return (
			<>
				<ExamPageShell>
					<Flexbox $justify="end">
						<Button
							buttonType={"button"}
							size={"medium"}
							body="Exit"
							bgcolor="danger"
							onclick={toggleModal}
						></Button>
					</Flexbox>
					<ExamTitle>Exam Title</ExamTitle>
					<Flexbox $align={"center"} $justify={"space-between"}>
						<ExamSubTitle>
							Improve your design skills through interactive, hands-on professional courses.
						</ExamSubTitle>
					</Flexbox>
					<ContentWrapper>
						<ModalTitle>Invite a Friend</ModalTitle>
						<Flexbox $align={"center"} $justify={"space-around"}>
							<InviteLink onClick={handleLinkClick}>{"https://elpmp.com/invite"}</InviteLink>
							{copySuccess && <CopyStatus>{copySuccess}</CopyStatus>}
							<div className={styles.marginInlinet16}>
								<Flexbox $gap={12}>
									<IconStyles>
										<Link target={"_blank"} href={"https://calculator.elpmp.com"}>
											<WhiteBoard />
										</Link>
									</IconStyles>
									<IconStyles>
										<Link target={"_blank"} href={"https://calculator.elpmp.com"}>
											<Calculator />
										</Link>
									</IconStyles>
									<IconStyles>
										<Link target={"_blank"} href={"https://calculator.elpmp.com"}>
											<WhiteBoard />
										</Link>
									</IconStyles>
								</Flexbox>
							</div>
						</Flexbox>
					</ContentWrapper>
				</ExamPageShell>
			</>
		);
	};
	return (
		<>
			<div className={`${styles.marginTop16} ${styles.marginBottom16}`}>
				<Button
					buttonType={"button"}
					size={"medium"}
					body="Open Modal"
					onclick={toggleModal}
				></Button>
				{/* Passing the modal content */}
				<Modal isOpen={isModalOpen} onClose={toggleModal}>
					{renderModalContent()}
				</Modal>
			</div>
			<ExamDetails />
		</>
	);
};

export default ExamDWithModal;
