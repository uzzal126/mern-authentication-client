import Link from "next/link";
import { BsBookmarkPlus, BsBorderAll, BsPencilSquare } from "react-icons/bs";

const DashboardNavigation = () => {
    return (
        <nav className="dashboard-menu">
            <ul className="space-y-4">
                <li className="relative">
                    <Link
                        href="/dashboard"
                        className="flex items-center font-medium hover:text-primary"
                    >
                        <BsBorderAll className="mr-2" />
                        Dashboard
                    </Link>
                </li>
                <li className="relative">
                    <Link
                        href="/profile"
                        className="flex items-center font-medium hover:text-primary "
                    >
                        <BsBookmarkPlus className="mr-2" />
                        Profile
                    </Link>
                </li>
                <li className="relative">
                    <Link
                        href="/profile-update"
                        className="flex items-center font-medium hover:text-primary "
                    >
                        <BsPencilSquare className="mr-2" />
                        Profile Update
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default DashboardNavigation;
