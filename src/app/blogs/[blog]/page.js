import React from 'react'
import BlogPage from './_section/BlogPage';

export async function generateMetadata({ params }) {
  const blogSlug = params.blog;

  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/blog/${blogSlug}`);
    if (!res.ok) throw new Error('Failed to fetch');

    const blog = await res.json();

    return {
      title: blog.meta_title || blog.title || 'My Blog',
      description: blog.meta_description || 'Default blog description',
      keywords: blog.meta_keywords || 'blogs, articles, news',
      openGraph: {
        title: blog.meta_title || blog.title,
        description: blog.meta_description,
        images: [
          {
            url: `${process.env.NEXT_PUBLIC_IMG_URL}${blog.image_url}`,
            alt: blog.title,
          },
        ],
      },
      other: {
        // For adding structured data via script manually (if needed)
        'script[type="application/ld+json"]': JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": blog.title,
          "image": `${process.env.NEXT_PUBLIC_IMG_URL}${blog.image_url}`,
          "datePublished": blog.created_at,
          "author": {
            "@type": "Person",
            "name": blog.author || "Unknown Author",
          },
          "publisher": {
            "@type": "Organization",
            "name": "My blogs",
            "logo": {
              "@type": "ImageObject",
              "url": `${process.env.NEXT_PUBLIC_IMG_URL}/logo.png`,
            },
          },
        }),
      },
    };
  } catch (err) {
    console.error(err);
    return {
      title: 'Blog Not Found',
      description: 'The blog post you are looking for could not be loaded.',
    };
  }
}


const page = () => {
  return (
    <>
    <BlogPage />
    </>
  )
}

export default page



