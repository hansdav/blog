import miniBlog from "../components/Miniblog/miniblog";

const BlogPage = ({ blogs }) => {
	return (
		<div className="BlogPage">
			{blogs.map((blog) => (
				<miniBlog
					title={blog.title}
					author={blog.author}
					post={blog.post}
					date={blog.date}
				></miniBlog>
			))}
		</div>
	);
};

export default BlogPage;
