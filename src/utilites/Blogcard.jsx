import Image from 'next/image'
import Link from 'next/link'



function Blogcard({ item, index }) {

  return (
    <li className=' hover:bg-[#e1e1e1] group max-sm:w-full lg:w-8/25 md:w-2/5  rounded-2xl    '>
      <Link href={`/blogs/${item.slug}`}>
        <div className="img mb-6 overflow-hidden rounded-2xl group-hover:rounded-b-none">
          <Image
            src={`${process.env.NEXT_PUBLIC_IMG_URL}${item.image_url}`}
            width={600}
            height={600}
            alt='msty image'

            className="transition-transform duration-300 group-hover:scale-110 aspect-[5/3]"
          />
        </div>
        <div className="pr-[15px] transition-[padding-left] duration-300 ease-in-out group-hover:pl-[15px] ">
          <h1 className='text-[20px] !overflow-hidden  line-clamp-2 font-bold text-[#121212] mt-7 mb-4 border-b border-solid border-[#b6b6b6]  '>{item.title}</h1>

          <div className="flex justify-between group-hover:pl-[15px] pr-[15px]">
            <h5 className='text-[#121212] text-[18px]  transition-all duration-300 mb-6 '>{new Date(item.created_at).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}</h5>
            <h6 className='text-[#121212]  text-sm  transition-all duration-300 mb-6 underline'>Read More</h6>
          </div>
        </div>


      </Link>
    </li>
  )
}

export default Blogcard