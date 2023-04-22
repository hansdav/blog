import MiniBlog from '../components/MiniBlog/MiniBlog.jsx';
import QueryPanel from '../components/QueryPanel/QueryPanel.jsx';
import './BlogPage.css';

const BlogPage = ({ blogs, sortDate, sortLikes }) => {
  return (
    <>
      <QueryPanel sortDate={sortDate} sortLikes={sortLikes}></QueryPanel>
      <div className='BlogPage'>
        {blogs.map((blog) => (
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
    </>
  );
};

export default BlogPage;
