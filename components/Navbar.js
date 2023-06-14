import Link from "next/link"



const Navbar = () => {
  return (
    <>
      <nav className='bg-[#1A2238] py-6'>
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex items-center justify-between h-16">
              <div class="flex-shrink-0">
                {/* Logo or brand*/}
              </div>
              <div class="flex">
                <ul>
                  <Link href="/" className='mx-2 hover:underline text-gray-300'>Home</Link>
                  <Link href="/about" className='mx-2 hover:underline text-gray-300'>About</Link>
                  <Link href="/contact" className='mx-2 hover:underline text-gray-300'>Contact</Link>
                  <Link href="/blog" className='mx-2 hover:underline text-gray-300'>Blog</Link>
                  <Link href="/product" className='mx-2 hover:underline text-gray-300'>Product</Link>
                </ul>
              </div>
            </div>
          </div>
        </nav>
    </>
  )
}

export default Navbar
