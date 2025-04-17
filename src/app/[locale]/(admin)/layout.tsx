import { redirect } from "next/navigation";

const Layout = () => {
	return redirect("/404");
	// return <AdminLayout locale={params.locale}>{children}</AdminLayout>;
};

export default Layout;
