import Cookies from "js-cookie";
import axios from "../utils/axios";

const getConfigHeaders = () => {
    const jwtTokenUpdate = Cookies.get("jwToken");
    return {
        headers: {
            Authorization: `Bearer ${jwtTokenUpdate}`,
        },
    };
};

export const getProfile = async () => {
    const { data } = await axios.get("/api/profile", getConfigHeaders());
    return data;
};

export const updateProfile = async (formData) => {
    const { data } = await axios.put(
        "/api/profile/update",
        formData,
        getConfigHeaders()
    );
    return data;
};
