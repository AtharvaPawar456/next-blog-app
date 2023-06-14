// import Link from "next/link"
import Headbar from '@/components/Headbar'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'


import { useRouter } from 'next/router';
import { useEffect } from 'react';

const ErrorPage = () => {
    const router = useRouter();

    useEffect(() => {
        // router.push("/");
        setTimeout(() => {
            router.push("/");
        }, 3000);

    }, []);


    return (
        <>
            <Headbar />
            <Navbar />

            <main className="h-screen w-full flex flex-col justify-center items-center bg-[#1A2238]">
                <h1 className="text-9xl font-extrabold text-white tracking-widest">
                    404
                </h1>
                <div className="bg-[#FF6A3D] px-2 text-sm rounded rotate-12 absolute">
                    Page Not Found
                </div>
                <button className="mt-5">
                    <div className="relative inline-block text-sm font-medium text-[#FF6A3D] group active:text-orange-500 focus:outline-none focus:ring">
                        <span className="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-[#FF6A3D] group-hover:translate-y-0 group-hover:translate-x-0"></span>

                        <span className="relative block px-8 py-3 bg-[#1A2238] border border-current">
                            {/* <Link href="/">Go Home</Link> */}
                            <a onClick={() => router.push("/")}>Go Home</a>
                        </span>
                    </div>
                </button>
            </main>

            <Footer />
        </>
    );
};

export default ErrorPage;
