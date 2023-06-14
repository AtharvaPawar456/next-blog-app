import Navbar from '@/components/Navbar'
import Headbar from '@/components/Headbar'
import Footer from '@/components/Footer'


// import { useRouter } from 'next/router'


export const getStaticPaths = async () => {
  const res = await fetch("https://test1.atharvapawar.repl.co/mytestdata");
  const data = await res.json();

  const paths = data.map((curElem) => {
    return {
      params: {
        pageNo: curElem.id.toString(),
      }
    }
  })

  return {
    paths,
    fallback: false,
  }
}



export const getStaticProps = async (context) => {
  const id = context.params.pageNo;
  const res = await fetch(`https://test1.atharvapawar.repl.co/mytestdata/${id}`);
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
};

const pageNo = ({ data }) => {
  // const router = useRouter();
  // const pageNumber = router.query.pageNo;
  // const dataId = pageNumber.toString();
  const { id, title, body} = data;
  return (
    <>
      <Headbar />
      <Navbar />
      <section class="flex-grow bg-gray-100 min-h-screen text-center text-2xl p-20 font-bold">
        {/* <h1>my blog {pageNumber} content</h1> */}
        {/* body  */}
        <div className='flex items-center justify-center'>
          <div className="p-4 mb-4 text-xl text-blue-800 w-5/6" role="alert">
            <span className="font-medium">Info id: {id}</span>
            <span className=''>{title}</span>
            <p>{body}</p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default pageNo

// dynamic routeing