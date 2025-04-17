import { redirect } from "next/navigation";

const Page = () => {
	redirect("/404");
	// return (
	// 	<Suspense fallback={<PageSkeleton />}>
	// 		<Notification />
	// 	</Suspense>
	// );
};

export default Page;
