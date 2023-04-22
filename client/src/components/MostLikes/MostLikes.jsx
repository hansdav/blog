import './MostLikes.css';
import MiniBlog from '../MiniBlog/MiniBlog';
import { useState, useEffect } from 'react';

const MostLikes = ({ blogs }) => {
  const [bestBlogs, setBestBlogs] = useState(blogs);

  useEffect(() => {
    if (blogs.length > 0) {
      const sortedBlogs = blogs.sort((a, b) => b.likes - a.likes);
      const bestTwoBlogs = sortedBlogs.slice(0, 2);
      setBestBlogs(bestTwoBlogs);
    }
  }, [blogs]);
  console.log();
  ////nothinggg
  return (
    <div>
      <div className='main-likes'>
        <h2>
          <u>Most liked blogs</u>
        </h2>
      </div>
      <div className='liked-blogs'>
        {bestBlogs.map((blog) => (
          <MiniBlog
            key={blog._id}
            id={blog._id}
            title={blog.title}
            author={blog.author}
            likes={blog.likes}
            post={blog.post}
            date={blog.created.slice(0, 10)}
          ></MiniBlog>
        ))}
      </div>
    </div>
  );
};

export default MostLikes;
