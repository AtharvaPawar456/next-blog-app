// import Image from 'next/image'
// import { Inter } from 'next/font/google'
// import styles from '@/styles/Home.module.css'
import Navbar from '@/components/Navbar'
import Headbar from '@/components/Headbar'
import Footer from '@/components/Footer'

import MainBody from '@/components/MainBody'

// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Headbar />

      <main className='class="flex flex-col min-h-screen"'>

        <Navbar />
        <MainBody />
        <Footer />

      </main>



    </>
  )
}
