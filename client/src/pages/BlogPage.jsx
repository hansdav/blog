import MiniBlog from '../components/MiniBlog/MiniBlog.jsx';
import './BlogPage.css';

const BlogPage = ({ blogs }) => {
  return (
    <div className='BlogPage'>
      {blogs.map((blog) => (
        <MiniBlog
          title={blog.title}
          author={blog.author}
          post={blog.post}
          date={blog.date}
        ></MiniBlog>
      ))}
    </div>
  );
};

export default BlogPage;
