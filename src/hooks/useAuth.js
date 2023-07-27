import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Cookies from "js-cookie";

import { setAuthenticated, setUnauthenticated } from "../service/authSlice";

const useAuth = () => {
    const dispatch = useDispatch();

    const isAuthenticated = Cookies.get("jwToken");
    useEffect(() => {
        if (isAuthenticated) {
            dispatch(setAuthenticated());
        } else {
            dispatch(setUnauthenticated());
        }
    }, [isAuthenticated]);
};

export default useAuth;
