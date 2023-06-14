import Navbar from '@/components/Navbar'
import Headbar from '@/components/Headbar'
import Footer from '@/components/Footer'

import Image from "next/image";


const about = () => {
    return (
        <>
            <Headbar />
            <Navbar />
            <section class="flex-grow bg-gray-100 min-h-screen text-center text-2xl p-20 font-bold">
                <h1>about page</h1>
                {/* <Image src="/about.png" width="500" height="300" alt='image'></Image> */}

                <Image src="https://mediaslide-us.storage.googleapis.com/imgmodels/pictures/6573/100580/large-1686588015-98f3999e5fe6dc91eee4dda25ab71f06.jpg" width="500" height="300" alt='image'></Image>
            </section>
            <Footer />
        </>
    )
}

export default about
