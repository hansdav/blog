import { useState, useEffect } from "react";
import BlogPage from "./BlogPage";
import "./ContentPage.css";

const fetchBlogs = () => {
	return fetch("http://localhost:5050/api/blogs").then((res) => res.json());
};

const ContentPage = () => {
	const [blogs, setBlogs] = useState([]);

	useEffect(() => {
		fetchBlogs().then((blogs) => {
			console.log(blogs);
			setBlogs(blogs);
		});
	}, []);

	return <BlogPage blogs={blogs} />;
};

export default ContentPage;
