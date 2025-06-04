'use client'
import { useBlog } from '@/hooks/BlogContext';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useEffect } from 'react';
import { BiArrowBack, BiCalendar } from 'react-icons/bi';



 async function generateMetadata({ params }) {
  const { blog } = await params;
  const {blogData, setCurrentBlogSlug} = useBlog();
  
  useEffect(() => {
    setCurrentBlogSlug(blog);
  }, [blog]);

  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": blogData?.title,
    "image": `${process.env.NEXT_PUBLIC_IMG_URL}${blogData?.image_url}`,
    "datePublished": blogData?.created_at,
    "author": {
      "@type": "Person",
      "name": blogData?.author || "Unknown Author",
    },
    "publisher": {
      "@type": "Organization",
      "name": "My Blog",
      "logo": {
        "@type": "ImageObject",
        "url": `${process.env.NEXT_PUBLIC_IMG_URL}/logo.png`
      }
    }
  };

  return {
    title: blogData?.meta_title || blogData?.title || 'My Blog Title',
    description: blogData?.meta_description || 'This is a simple blog description for testing metadata.',
    keywords: blogData?.meta_keywords || 'blog, articles, news',
    openGraph: {
      title: blogData?.meta_title || blogData?.title,
      description: blogData?.meta_description,
      images: [
        {
          url: `${process.env.NEXT_PUBLIC_IMG_URL}${blogData?.image_url}`,
          alt: blogData?.title,
        },
      ],
    },
    structuredData: blogSchema,
  };
}



export default function BlogPage() {
  const { blog } =  useParams();
  const { blogData, setCurrentBlogSlug} = useBlog();


  console.log(blogData)
  useEffect(() => {
    setCurrentBlogSlug(blog);
  }, [blog]);

    return (
      <>
      <section className='container mx-auto overflow-hidden'>
       
      <div className=' relative overflow-hidden flex max-sm:flex-col justify-between lg:flexrow gap-6'>
      <aside className=" sticky top:0 w-fit   bg-sky-50 w-3/13 border border-gray-300 rounded-lg shadow-lg py-4 px-4 mt-10 h-full lg:h-screen  ">
       <Link href="/blogs">
            <div className="flex items-center gap-2 font-bold text-sm py-2 lg:text-base text-blue-800 cursor-pointer">
              <BiArrowBack /> Back to Blogs
            </div>
          </Link>
       <h2 className="text-lg lg:text-2xl font-semibold mb-4">Table of content</h2>

       <ul className="list-none bg-white py-2  rounded-2xl sborder border-[1px] border-solid border-[#979797]">
       {blogData?.content &&
            blogData.content.map((item, index) => {
              if(item.type === 'heading') {
                return (
                  <li key={index} className="text-[14px] pb-2 mb-0.5  px-1 ml-2">
                    <a href={`#${item.data.content}`} className="hover:text-black text-gray-600">
                      {item.data.content}
                    </a>
                  </li>
                );
              }
            })
          }
        </ul>
       
        </aside>

        <div className='w-full '>
        <div className=" px-4 lg:px-28 py-10  max-sm:py-5 lg:w-[100%] 2xl:w-[85%] mx-auto bg-white">
          

          <div className=" ">
            <img
              src={`${process.env.NEXT_PUBLIC_IMG_URL}${blogData?.image_url}`}
              alt={blogData?.title || 'Blog Image'}
              className="lg:w-4/4 my-0 mx-auto rounded-2xl "
            />
          </div>

          <div className=" px-8 my-4 mb-10 rounded-2xl shadow-lg w-[110%] -translate-x-[4.5%]">
            <h1 className="text-4xl leading-tight max-sm:text-2xl text-[#121212] font-bold mb-2">{blogData?.title}</h1>
            <span className="flex items-center gap-2 pb-4">
              <BiCalendar />
              {blogData?.created_at?.slice(0, 10)}
            </span>
          </div>
          {blogData?.content &&
            blogData.content.map((item, index) => {
              switch (item.type) {
                case 'paragraph':
                  return (
                    <p
                      key={index}
                      className="blog-content text-gray-800 text-[16px]  lg:text-base font-regular leading-7"
                      dangerouslySetInnerHTML={{ __html: item.data.content }}
                    />
                  );
                case 'heading':
                  return (
                    <h2 key={index} id={item.data.content} className=" scroll-mt-28 text-lg lg:text-3xl font-semibold pt-6 pb-4 max-sm:pb-0">
                      {item.data.content}
                    </h2>
                  );
                case 'image':
                  return (
                    <Image  
                      key={index}
                      src={`${process.env.NEXT_PUBLIC_IMG_URL}${item.data.url}`}
                      alt={item.data.alt || 'Blog Image'}
                      width={800}
                      height={500}
                      className="lg:w-[100%] mx-auto my-8 rounded-2xl border"
                    />
                  );
                default:
                  return null;
              }
            })}
        </div>
        </div>
      </div>
      </section>
     
      </>
      
    );
  
}
