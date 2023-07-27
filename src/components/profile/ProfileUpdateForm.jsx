import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import { getProfile, updateProfile } from "../../api/userApi";
import LoadingSpinner from "../elements/LoadingSpinner";

const UserRegisterForm = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [profile, setProfile] = useState({});
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        bio: "",
        avatar: null,
    });

    const router = useRouter();

    const changeHandler = (e) => {
        if (e.target.name === "avatar") {
            setFormData({
                ...formData,
                avatar: e.target.files[0],
            });
        } else {
            setFormData({ ...formData, [e.target.name]: e.target.value });
        }
    };

    const fetchProfile = async () => {
        try {
            const res = await getProfile();
            setProfile(res);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchProfile();
    }, []);

    // Update the form fields when the profile is fetched
    useEffect(() => {
        setFormData({
            name: profile?.name || "",
            phone: profile?.phone || "",
            bio: profile?.bio || "",
            avatar: null,
        });
    }, [profile]);

    const submitHandler = async (e) => {
        e.preventDefault();

        const formDataToSend = new FormData();
        formDataToSend.append("name", formData.name);
        formDataToSend.append("bio", formData.bio);
        formDataToSend.append("phone", formData.phone);
        formDataToSend.append("avatar", formData.avatar);

        setIsLoading(true);
        const data = await updateProfile(formDataToSend);
        setIsLoading(true);
        if (data.success) {
            toast.success("Profile Update Successfully!");
        } else {
            toast.error(data.message);
        }

        if (data.success) {
            router.push("/profile");
        }
    };

    return (
        <div className="register-form">
            <form
                className="border p-10 space-y-5 rounded-md"
                onSubmit={submitHandler}
            >
                <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    className="w-full h-12 px-5 py-3 border rounded-md outline-1 outline-primary focus:outline"
                    value={formData.name}
                    onChange={changeHandler}
                />
                <input
                    type="text"
                    name="bio"
                    placeholder="Biography"
                    className="w-full h-12 px-5 py-3 border rounded-md outline-1 outline-primary focus:outline"
                    value={formData.bio}
                    onChange={changeHandler}
                />
                <input
                    type="number"
                    name="phone"
                    placeholder="Phone Number"
                    className="w-full h-12 px-5 py-3 border rounded-md outline-1 outline-primary focus:outline"
                    value={formData.phone}
                    onChange={changeHandler}
                />
                <input
                    type="file"
                    name="avatar"
                    placeholder="Upload Photo"
                    className="w-full h-12 px-5 py-3 border rounded-md outline-1 outline-primary focus:outline"
                    onChange={changeHandler}
                />
                <button
                    type="submit"
                    className="bg-primary rounded-md text-white w-full py-2.5 hover:bg-light flex justify-center items-center"
                >
                    Update Profile
                    {isLoading ? <LoadingSpinner /> : null}
                </button>
            </form>
        </div>
    );
};

export default UserRegisterForm;
