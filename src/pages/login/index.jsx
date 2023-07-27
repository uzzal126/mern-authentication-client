import Head from "next/head";
import UserLoginForm from "../../components/login/UserLoginForm";
import useAuth from "../../hooks/useAuth";

const LoginView = () => {
    useAuth();
    return (
        <>
            <Head>
                <title>Login</title>
            </Head>
            <div className="py-section">
                <div className="container">
                    <div className="grid grid-cols-12">
                        <div className="col-span-8 col-start-3">
                            <UserLoginForm />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default LoginView;
