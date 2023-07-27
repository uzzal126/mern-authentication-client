import Link from "next/link";
import Cookies from "js-cookie";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { FcBusinessman } from "react-icons/fc";
import { useEffect, useState } from "react";
import { setUnauthenticated } from "../../service/authSlice";
import useAuth from "../../hooks/useAuth";
import { getProfile } from "../../api/userApi";

const Header = () => {
    useAuth();
    const router = useRouter();
    const dispatch = useDispatch();
    const { isAuthenticated } = useSelector((state) => state.auth);
    const [profile, setProfile] = useState({});

    const fetchProfile = async () => {
        const res = await getProfile();
        setProfile(res);
    };

    useEffect(() => {
        if (isAuthenticated) {
            fetchProfile();
        }
    }, [isAuthenticated, dispatch, profile]);

    const logoutHandler = () => {
        router.push("/");
        toast.success("Logout successfully!");
        dispatch(setUnauthenticated());
        Cookies.remove("jwToken");
    };

    return (
        <div className="header-bottom py-3 lg:py-0 hidden lg:block border-b">
            <div className="container">
                <div className="grid grid-cols-12 items-center">
                    <div className="col-span-2">
                        <div className="logo w-12 h-12 leading-none">
                            <Link href="/">
                                <img src="/images/logo/logo.png" alt="Uzzal" />
                            </Link>
                        </div>
                    </div>
                    <div className="col-span-8">
                        <nav className="navigation-menu">
                            <ul className="flex justify-center">
                                <li className="relative mr-12 group">
                                    <Link
                                        href="/"
                                        className="block font-semibold group-hover:text-primary py-5"
                                    >
                                        Home
                                    </Link>
                                </li>

                                {!isAuthenticated ? (
                                    <li className="relative mr-12 group">
                                        <Link
                                            href="/register"
                                            className="block font-semibold group-hover:text-primary py-5"
                                        >
                                            Register
                                        </Link>
                                    </li>
                                ) : null}
                                {isAuthenticated ? (
                                    <li className="relative mr-12 group">
                                        <Link
                                            href="/profile"
                                            className="block font-semibold group-hover:text-primary py-5"
                                        >
                                            Profile
                                        </Link>
                                    </li>
                                ) : null}

                                <li className="relative mr-12 group">
                                    {isAuthenticated ? (
                                        <button
                                            type="button"
                                            onClick={logoutHandler}
                                            className="block font-semibold group-hover:text-primary py-5"
                                        >
                                            Logout
                                        </button>
                                    ) : (
                                        <Link
                                            href="/login"
                                            className="block font-semibold group-hover:text-primary py-5"
                                        >
                                            Login
                                        </Link>
                                    )}
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className="col-span-2">
                        <div className="w-9 h-9 leading-9 bg-white rounded-full overflow-hidden ms-auto">
                            {!isAuthenticated ? (
                                <Link href="/login">
                                    <FcBusinessman className="inline-block text-3xl w-full" />
                                </Link>
                            ) : (
                                <div>
                                    {!profile?.avatar ? (
                                        <img
                                            src="https://en.gravatar.com/userimage/185001528/9196761815bee6e1f683f4eef11f9b55.jpeg"
                                            alt={profile?.name}
                                            className="w-full h-full object-cover"
                                        />
                                    ) : (
                                        <Link href="/profile">
                                            <img
                                                src={profile?.avatar}
                                                alt={profile?.name}
                                                className="w-full h-full object-cover"
                                            />
                                        </Link>
                                    )}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
