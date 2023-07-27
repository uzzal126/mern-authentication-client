import "../styles/globals.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

import { Provider } from "react-redux";
import store from "../store/store";
import Header from "../components/header/Header";

const MyApp = ({ Component, pageProps }) => {
    return (
        <Provider store={store}>
            <Header />
            <Component {...pageProps} />
            <ToastContainer position="top-center" autoClose={2000} />
        </Provider>
    );
};

export default MyApp;
