import styled from "styled-components";

export const PageWrapper = styled.div`
	padding: 1rem;
`;

export const Header = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 20px;
`;

export const Title = styled.h1`
	font-size: 24px;
	font-weight: bold;
`;

export const SortButton = styled.button`
	background-color: #f0f0f0;
	color: #000;
	border: none;
	padding: 8px 12px;
	border-radius: 5px;
	cursor: pointer;
`;

export const CommentSection = styled.div`
	margin-top: 16px;
`;

export const CommentInput = styled.div`
	display: flex;
	align-items: center;
	gap: 16px;
	margin-bottom: 24px;
`;

export const Input = styled.input`
	flex-grow: 1;
	padding: 12px 16px;
	border: 1px solid #eaeaea;
	border-radius: 20px;
	background-color: #f7f7f7;
	font-size: 16px;
`;

export const SubmitButton = styled.button`
	background-color: #3259e8;
	color: white;
	border: none;
	padding: 8px 12px;
	border-radius: 50%;
	cursor: pointer;
	font-size: 18px;
`;

export const CommentList = styled.div`
	display: flex;
	flex-direction: column;
	gap: 24px;
	margin-bottom: 8px;
`;

export const Comment = styled.div`
	display: flex;
	gap: 16px;
`;

export const CommentAvatar = styled.img`
	width: 48px;
	height: 48px;
	border-radius: 50%;
`;

export const CommentContent = styled.div`
	flex-grow: 1;
`;

export const CommentAuthor = styled.h4`
	font-size: 16px;
	font-weight: bold;
`;

export const CommentText = styled.p`
	margin-top: 8px;
	font-size: 14px;
`;

export const CommentActions = styled.div`
	display: flex;
	align-items: center;
	gap: 16px;
	margin-top: 8px;
	font-size: 14px;
	color: grey;
`;

export const Helpful = styled.div`
	display: flex;
	align-items: center;
	gap: 8px;
	margin-top: 8px;
	font-size: 14px;
	color: grey;

	svg {
		cursor: pointer;
	}
`;

export const ViewReplies = styled.p`
	margin-top: 12px;
	color: grey;
	cursor: pointer;
`;

export const Replies = styled.div`
	margin-left: 64px;
	margin-top: 24px;
	display: flex;
	flex-direction: column;
	gap: 16px;
	position: relative;

	/* Vertical line connecting comment to replies */
	&::before {
		content: "";
		position: absolute;
		left: -32px; /* Adjust this value to control the horizontal position */
		top: 0;
		bottom: 0;
		width: 2px;
		background-color: #e0e0e0;
	}
`;

export const Reply = styled.div`
	display: flex;
	gap: 16px;
`;

export const ReplyAvatar = styled.img`
	width: 36px;
	height: 36px;
	border-radius: 50%;
`;

export const ReplyContent = styled.div`
	flex-grow: 1;
`;

export const ReplyAuthor = styled.h4`
	font-size: 14px;
	font-weight: bold;
`;

export const ReplyText = styled.p`
	margin-top: 4px;
	font-size: 14px;
`;

export const ReplyActions = styled.div`
	display: flex;
	align-items: center;
	gap: 16px;
	margin-top: 4px;
	font-size: 12px;
	color: grey;
`;
