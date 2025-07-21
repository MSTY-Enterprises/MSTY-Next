'use client'
import React, {  createContext, useContext, useEffect, useState } from 'react'

const BlogContext = createContext();

export const useBlog = () => useContext(BlogContext)

export const BlogProvider = ({ children }) =>{
    const [blogData, setBlogData] = useState(null);
    const [blogs, setBlogs] = useState([]);
    const [currentBlogSlug, setCurrentBlogSlug] = useState('');

    const fetchBlogs = async () => {
        try {
          const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/blogs`);
          if (!response.ok) {
            throw new Error('Failed to fetch data');
          }
          const data = await response.json();
          setBlogs(data);
        } catch (error) {
          console.error(error);
        }
      };

      useEffect(() => {
        if (blogs.length > 0 && currentBlogSlug) {
          const foundBlog = blogs.find(blog => blog.slug === currentBlogSlug);
          setBlogData(foundBlog);
        }
      }, [blogs, currentBlogSlug]);
    
      useEffect(() => {
        fetchBlogs();
      }, []);


    return (
        <BlogContext.Provider value={{blogs, blogData, setCurrentBlogSlug}} >
            {children}
        </BlogContext.Provider>
    )
}