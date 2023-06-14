import Navbar from '@/components/Navbar'
import Headbar from '@/components/Headbar'
import Footer from '@/components/Footer'


const product = () => {
    return (
        <>
            <Headbar />
            <Navbar />
            <section class="flex-grow bg-gray-100 min-h-screen text-center text-2xl p-20 font-bold">
                <h1>product page</h1>
            </section>
            <Footer />
        </>
    )
}

export default product
