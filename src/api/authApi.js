import axios from "../utils/axios";

export const userRegister = async (formData) => {
    try {
        const { data } = await axios.post("/api/auth/register", formData);
        return data;
    } catch (error) {
        throw new Error(error);
    }
};

export const userLogin = async (formData) => {
    try {
        const { data } = await axios.post("/api/auth/login", formData);
        return data;
    } catch (error) {
        throw new Error(error.response.data.message);
    }
};
