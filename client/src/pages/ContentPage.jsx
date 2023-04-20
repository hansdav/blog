import { useState, useEffect } from 'react';
import BlogPage from './BlogPage';
import './ContentPage.css';

import Pagination from '../components/Pagination/Pagination';

const fetchBlogs = () => {
  return fetch('http://localhost:5050/api/blogs').then((res) => res.json());
};

const ContentPage = () => {
  const [blogs, setBlogs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage] = useState(6);

  useEffect(() => {
    fetchBlogs().then((blogs) => {
      console.log(blogs);
      setBlogs(blogs);
    });
  }, []);

  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = blogs.slice(indexOfFirstRecord, indexOfLastRecord);
  const nPages = Math.ceil(blogs.length / recordsPerPage);

  return (
    <div>
      <BlogPage blogs={currentRecords} />
      <Pagination
        nPages={nPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};

export default ContentPage;
