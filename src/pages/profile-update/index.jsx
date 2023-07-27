import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Cookies from "js-cookie";
import ProfileUpdateForm from "../../components/profile/ProfileUpdateForm";
import DashboardNavigation from "../../components/header/DashboardNavigation";

const ProfileUpdateView = () => {
    const router = useRouter();
    const jwToken = Cookies.get("jwToken");

    useEffect(() => {
        if (!jwToken) {
            router.push("/login");
        }
    }, []);

    return (
        <>
            <Head>
                <title>Profile Update</title>
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
                                    <ProfileUpdateForm />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
};

export default ProfileUpdateView;
