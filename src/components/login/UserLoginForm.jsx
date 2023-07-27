import { useState } from "react";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
import { userLogin } from "../../api/authApi";
import { setAuthenticated } from "../../service/authSlice";

const UserLoginForm = () => {
    const router = useRouter();
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({
        username: "",
        password: "",
    });

    const changeHandler = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const submitHandler = async (e) => {
        e.preventDefault();
        try {
            const res = await userLogin(formData);
            if (res.success) {
                Cookies.set("jwToken", res.token);
                dispatch(setAuthenticated());
                toast.success(res.message);
                router.push("/profile");
            }
        } catch (error) {
            toast.error(error.message);
        }
    };

    return (
        <div className="login-form">
            <form
                className="border p-10 space-y-5 rounded-md"
                onSubmit={submitHandler}
            >
                <input
                    type="text"
                    name="username"
                    placeholder="User name"
                    required
                    className="w-full h-12 px-5 py-3 border rounded-md outline-1 outline-primary focus:outline"
                    value={formData.username}
                    onChange={changeHandler}
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    required
                    className="w-full h-12 px-5 py-3 border rounded-md outline-1 outline-primary focus:outline"
                    value={formData.password}
                    onChange={changeHandler}
                />
                <button
                    type="submit"
                    className="bg-primary rounded-md text-white w-full py-2.5 hover:bg-light"
                >
                    Login
                </button>
            </form>
        </div>
    );
};

export default UserLoginForm;
