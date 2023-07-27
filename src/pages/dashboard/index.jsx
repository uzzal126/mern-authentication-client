import Head from "next/head";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import DashboardNavigation from "../../components/header/DashboardNavigation";

const DashboardView = () => {
    const router = useRouter();
    const { isAuthenticated } = useSelector((state) => state.auth);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // If the isAuthenticated state is true, no need to redirect
        if (isAuthenticated) {
            setIsLoading(false); // Set loading to false once we have the isAuthenticated state
            return;
        }

        // If the isAuthenticated state is false, redirect to the login page
        if (!isAuthenticated && isLoading) {
            router.push("/login");
        }

        // Set loading to false after the initial check
        setIsLoading(false);
    }, [isAuthenticated, isLoading, router]);

    return (
        <>
            <Head>
                <title>Dashboard Page</title>
            </Head>
            <main className="bg-gray-50">
                <div className="profile-wrapper py-section">
                    <div className="container">
                        <div className="grid grid-cols-12 gap-8">
                            <div className="col-span-3">
                                <div className="bg-white rounded p-7 border">
                                    <DashboardNavigation />
                                </div>
                            </div>
                            <div className="col-span-9">
                                <div className="bg-white rounded p-7 border">
                                    <h2>Dashboard Information</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
};

export default DashboardView;
