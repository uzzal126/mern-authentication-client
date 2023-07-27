import { useState } from "react";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import { userRegister } from "../../api/authApi";

const UserRegisterForm = () => {
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
    });

    const router = useRouter();

    const changeHandler = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const submitHandler = async (e) => {
        e.preventDefault();

        if (!formData.password || !formData.username || !formData.email) {
            return toast.error("All field is required");
        }

        const data = await userRegister(formData);
        if (data.success) {
            toast.success("User Register Successfully");
            router.push("/login");
        } else {
            toast.error(data.message);
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
                    name="username"
                    placeholder="User Name"
                    className="w-full h-12 px-5 py-3 border rounded-md outline-1 outline-primary focus:outline"
                    value={formData.username}
                    onChange={changeHandler}
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="w-full h-12 px-5 py-3 border rounded-md outline-1 outline-primary focus:outline"
                    value={formData.email}
                    onChange={changeHandler}
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    className="w-full h-12 px-5 py-3 border rounded-md outline-1 outline-primary focus:outline"
                    value={formData.password}
                    onChange={changeHandler}
                />
                <button
                    type="submit"
                    className="bg-primary rounded-md text-white w-full py-2.5 hover:bg-light"
                >
                    Register
                </button>
            </form>
        </div>
    );
};

export default UserRegisterForm;
