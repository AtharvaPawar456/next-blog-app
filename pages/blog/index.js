import Navbar from '@/components/Navbar'
import Headbar from '@/components/Headbar'
import Footer from '@/components/Footer'

import Link from "next/link"


// import { useRouter } from 'next/router'

export const getStaticProps = async () => {
    const res = await fetch("https://test1.atharvapawar.repl.co/mytestdata");
    const data = await res.json();

    return {
        props: {
            "gta": data,
        },
    };
};


const index = ({ gta }) => {
    return (
        <>
            <Headbar />
            <Navbar />
            <section class="flex-grow bg-gray-100 min-h-screen text-center text-2xl p-20 font-bold">
                <h1 className='m-10 uppercase text-2xl'>my blog content</h1>
                {/* body  */}
                {
                    gta.slice(0,5).map((currentElement) => {
                    // gta.map((currentElement) => {
                        return <div key={currentElement.id}>
                            {/* <h2>{currentElement.id}</h2> */}
                            {/* <h2>{currentElement.title}</h2> */}
                            {/* <h2>{currentElement.id}</h2> */}

                            <Link href={`/blog/${currentElement.id}`}>
                                <div className='flex items-center justify-center'>
                                    <div className="p-4 mb-4 text-xl text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400 w-5/6" role="alert">
                                        <span className="font-medium">Info id: {currentElement.id}</span>
                                        <span className=''> {currentElement.title}</span>
                                    </div>
                                </div>
                            </Link>

                        </div>
                    })
                }
            </section>
            <Footer />
        </>
    )
}

export default index
