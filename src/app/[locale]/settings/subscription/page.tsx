import Link from "next/link";
import React, { Suspense } from "react";
import { SubscriptionAr, SubscriptionEn } from "../../../../../messages/Settings/Subscription";
import { Locale } from "@/Global";
import ErrorFetchingData from "@/Library/Common/ErrorFetching/ErrorFetchingData";
import { Flexbox } from "@/Library/Common/Grids/Grids";
import Table from "@/Library/Common/Table/Table";
import TableCell from "@/Library/Common/Table/TableCell";
import { Paragraph } from "@/Library/Common/Typograhy/Typography";
import PageSkeleton from "@/Library/Common/skeleton/PageSkeleton/PageSkeleton";
import { GetData } from "@/Utils/AxiosFetch";
import formatDate from "@/Utils/formatDate";
import uuid from "@/Utils/uuid";

export const dynamic = "force-dynamic";

const fetchSubscriptions = async () => {
	try {
		return (await GetData("/enroll/enroll")) as {
			data: {
				data: {
					createdAt: string;
					ActivatedAt: string;
					ActiveUntil: string;
					isActivate: boolean;
					examId: { nameEn: string; nameAr: string; slug: string };
				}[];
			};
			error?: boolean;
		};
	} catch {
		return { error: true };
	}
};

const Page = async ({ params }: { params: Locale }) => {
	const { locale } = params;
	const t = locale === "en" ? SubscriptionEn : SubscriptionAr;

	const res = await fetchSubscriptions();

	if (res.error) {
		return <ErrorFetchingData />;
	}

	const subscriptions = "data" in res ? res.data.data || [] : [];

	return (
		<Suspense fallback={<PageSkeleton />}>
			{/*<PageHeader subTitle={t.Header} title={t.Title} />*/}

			{subscriptions.length === 0 ? (
				<Paragraph center color="secondary">
					You don&apos;t have any subscriptions yet.
				</Paragraph>
			) : (
				<Table>
					<thead>
						<tr>
							{t.HeaderTable.map((item: string) => (
								<TableCell Size={"sm"} key={uuid()} Type="Table-Head">
									{item}
								</TableCell>
							))}
						</tr>
					</thead>
					<tbody>
						{subscriptions.map(item => (
							<tr key={uuid()}>
								<TableCell>
									<Link href={`/my-learning/${item.examId.slug}`}>
										{locale === "en" ? item.examId.nameEn : item.examId.nameAr}
									</Link>
								</TableCell>
								<TableCell>
									<p>{formatDate(item.createdAt)}</p>
								</TableCell>
								<TableCell>
									<p>{formatDate(item.ActivatedAt)}</p>
								</TableCell>

								<TableCell>
									<p>{formatDate(item.ActiveUntil)}</p>
								</TableCell>
								<TableCell>
									<Flexbox $align={"center"} $gap={4}>
										{item.isActivate && (
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width="12"
												height="12"
												viewBox="0 0 12 12"
												fill="none"
											>
												<circle cx="6" cy="6" r="6" fill="#6EB481" />
											</svg>
										)}
										<p>{item.isActivate ? "Active" : "In-active"}</p>
									</Flexbox>
								</TableCell>
							</tr>
						))}
					</tbody>
				</Table>
			)}
		</Suspense>
	);
};

export default Page;
