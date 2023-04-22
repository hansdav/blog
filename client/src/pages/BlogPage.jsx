import MiniBlog from "../components/MiniBlog/MiniBlog.jsx";
import QueryPanel from "../components/QueryPanel/QueryPanel.jsx";
import "./BlogPage.css";

const BlogPage = ({
	blogs,
	sortDate,
	sortLikes,
	filterAuthor,
	filterTitle,
}) => {
	return (
		<>
			<QueryPanel
				sortDate={sortDate}
				sortLikes={sortLikes}
				filterAuthor={filterAuthor}
				filterTitle={filterTitle}
			></QueryPanel>
			<div className="BlogPage">
				{blogs.map((blog) => (
					<MiniBlog
						key={blog._id}
						title={blog.title}
						author={blog.author}
						post={blog.post}
						date={blog.created.slice(0, 10)}
					></MiniBlog>
				))}
			</div>
		</>
	);
};

export default BlogPage;
