import Head from "next/head";

const HomeView = () => {
    return (
        <>
            <Head>
                <title>Home Page</title>
            </Head>
            <main>
                <div className="py-section">
                    <div className="container">
                        <div className="text-start">
                            <h1>Welcome to home page</h1>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
};

export default HomeView;
