import { useState, useEffect } from 'react';
import BlogPage from './BlogPage';
import './ContentPage.css';

const fetchBlogs = () => {
  return fetch('/api/blogs').then((res) => res.json());
};

const ContentPage = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetchBlogs().then((blogs) => {
      console.log(blogs);
      setBlogs(blogs);
    });
  }, []);

  return (
    <div className='main-content'>
      <BlogPage blogs={blogs} />
    </div>
  );
};

export default ContentPage;
