'use client';

import { useBlog } from '@/hooks/BlogContext';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useEffect } from 'react';
import { BiArrowBack, BiCalendar } from 'react-icons/bi';

export default function BlogPage() {
  const { blog } = useParams();
  const { blogData, setCurrentBlogSlug } = useBlog();

  useEffect(() => {
    setCurrentBlogSlug(blog);
  }, [blog, setCurrentBlogSlug]);

  if(blogData){
    console.log(blogData.content)
  }
  const updatedContent = blogData?.content.map((block) => {
    // Check if the block is an image type and contains a URL to update
    if (block.type === 'paragraph') {
      return {
        ...block,
        data: {
          ...block.data,
          content: block.data.content.replace('/storage/', 'https://api.mstyenterprises.com/storage/')
          
        }
      };
    }
  
    // If it's a paragraph or heading or any other type, return as-is
    return block;
  });
  console.log(updatedContent);
  return (
    <section className='container mx-auto overflow-hidden'>
      <div className='relative overflow-hidden flex max-sm:flex-col justify-between lg:flex-row gap-6'>
        <aside className="sticky top-0 bg-sky-50 w-full lg:w-3/12 border border-gray-300 rounded-lg shadow-lg py-4 px-4 mt-10 h-full lg:h-screen">
          <Link href="/blogs">
            <div className="flex items-center gap-2 font-bold text-sm py-2 lg:text-base text-blue-800 cursor-pointer">
              <BiArrowBack /> Back to Blogs
            </div>
          </Link>
          <h2 className="text-lg lg:text-2xl font-semibold mb-4">Table of Contents</h2>

          <ul className="list-none bg-white py-2 rounded-2xl border border-[#979797]">
            {updatedContent?.map((item, index) =>
              item.type === 'heading' ? (
                <li key={index} className="text-[14px] pb-2 px-1 ml-2">
                  <a href={`#${item.data.content}`} className="hover:text-black text-gray-600">
                    {item.data.content}
                  </a>
                </li>
              ) : null
            )}
          </ul>
        </aside>

        <div className='w-full'>
          <div className="px-4 lg:px-28 py-10 max-sm:py-5 2xl:w-[85%] mx-auto bg-white">
            {blogData?.image_url && (
              <img
                src={`${process.env.NEXT_PUBLIC_IMG_URL}${blogData.image_url}`}
                alt={blogData?.title || 'Blog Image'}
                className="w-full mx-auto rounded-2xl"
              />
            )}

            <div className="px-8 my-4 mb-10 rounded-2xl shadow-lg w-full">
              <h1 className="text-4xl max-sm:text-2xl text-[#121212] font-bold mb-2">{blogData?.title}</h1>
              <span className="flex items-center gap-2 pb-4 text-gray-600">
                <BiCalendar />
                {blogData?.created_at?.slice(0, 10)}
              </span>
            </div>

            {updatedContent?.map((item, index) => {
              switch (item.type) {
                case 'paragraph':
                  return (
                    <p
                      key={index}
                      className="text-gray-800 text-[16px] lg:text-base font-regular leading-7 bg-img"
                      dangerouslySetInnerHTML={{ __html: item.data.content }}
                    />
                  );
                case 'heading':
                  return (
                    <h2
                      key={index}
                      id={item.data.content}
                      className="scroll-mt-28 text-lg lg:text-3xl font-semibold pt-6 pb-4"
                    >
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
                      className="w-full mx-auto my-8 rounded-2xl border"
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
  );
}