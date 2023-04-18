import { useState } from 'react';

const BlogPage = (blogs) => {
  const [allBlogs, setAllBlogs] = useState(blogs);

  console.log(blogs);
  return (
    <div>
      <h1>Blog: </h1>
    </div>
  );
};

export default BlogPage;
