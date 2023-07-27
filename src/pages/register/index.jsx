import Head from "next/head";
import UserRegisterForm from "../../components/register/UserRegisterForm";

const RegisterView = () => {
    return (
        <>
            <Head>
                <title>Register</title>
            </Head>
            <div className="py-section">
                <div className="container">
                    <div className="grid grid-cols-12">
                        <div className="col-span-8 col-start-3">
                            <UserRegisterForm />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default RegisterView;
