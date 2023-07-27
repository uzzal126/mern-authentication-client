import Head from "next/head";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import { getProfile } from "../../api/userApi";
import DashboardNavigation from "../../components/header/DashboardNavigation";

const jwToken = Cookies.get("jwToken");

const ProfileView = () => {
    const [profileData, setProfileData] = useState({});

    const router = useRouter();

    const fetchProfile = async () => {
        try {
            const res = await getProfile();
            setProfileData(res);
        } catch (error) {
            console.log("error", error);
        }
    };

    useEffect(() => {
        if (jwToken) {
            fetchProfile();
        }
    }, []);

    useEffect(() => {
        if (!jwToken) {
            router.push("/login");
        }
    }, []);

    return (
        <>
            <Head>
                <title>Profile Page</title>
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
                                <div className="bg-white rounded p-7 border space-y-3 sm:space-y-1.5">
                                    <div className="sm:flex font-medium pr-2.5 leading-[26px] text-light">
                                        <span className="min-w-[180px] capitalize">
                                            Full Name
                                        </span>
                                        <p>{profileData?.name}</p>
                                    </div>
                                    <div className="sm:flex font-medium pr-2.5 leading-[26px] text-light">
                                        <span className="min-w-[180px] capitalize">
                                            Phone
                                        </span>
                                        <p>{profileData?.phone}</p>
                                    </div>
                                    <div className="sm:flex font-medium pr-2.5 leading-[26px] text-light">
                                        <span className="min-w-[180px] capitalize">
                                            Bio
                                        </span>
                                        <p>{profileData?.bio}</p>
                                    </div>
                                    <div className="sm:flex font-medium pr-2.5 leading-[26px] text-light">
                                        <span className="min-w-[180px] capitalize">
                                            Profile Picture
                                        </span>
                                        <div className="rounded-lg w-24 h-24 overflow-hidden border p-2">
                                            {!profileData?.avatar ? (
                                                <img
                                                    src="https://en.gravatar.com/userimage/185001528/9196761815bee6e1f683f4eef11f9b55.jpeg"
                                                    alt={profileData?.name}
                                                    className="h-full w-full object-cover"
                                                />
                                            ) : (
                                                <img
                                                    src={profileData?.avatar}
                                                    alt={profileData?.name}
                                                    className="h-full w-full object-cover"
                                                />
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
};

export default ProfileView;
