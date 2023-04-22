import { useState, useEffect } from "react";
import BlogPage from "./BlogPage";
import "./ContentPage.css";

import Pagination from "../components/Pagination/Pagination";

const fetchBlogs = () => {
	return fetch("http://localhost:5050/api/blogs").then((res) => res.json());
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

	const handleSortDate = (value) => {
		const sortedBlogs = [...blogs];
		if (value === "Sort by new") {
			sortedBlogs.sort((a, b) => {
				return new Date(a.created) - new Date(b.created);
			});
			setBlogs(sortedBlogs);
		} else if (value === "Sort by old") {
			sortedBlogs.sort((a, b) => {
				return new Date(b.created) - new Date(a.created);
			});
			setBlogs(sortedBlogs);
		}
	};

	const handleSortLikes = (value) => {
		const sortedBlogs = [...blogs];
		if (value === "Sort by most likes") {
			sortedBlogs.sort((a, b) => {
				return b.likes - a.likes;
			});
			setBlogs(sortedBlogs);
		} else if (value === "Sort by least likes") {
			sortedBlogs.sort((a, b) => {
				return a.likes - b.likes;
			});
			setBlogs(sortedBlogs);
		}
	};

	const indexOfLastRecord = currentPage * recordsPerPage;
	const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
	const currentRecords = blogs.slice(indexOfFirstRecord, indexOfLastRecord);
	const nPages = Math.ceil(blogs.length / recordsPerPage);

	return (
		<div>
			<BlogPage
				blogs={currentRecords}
				sortDate={handleSortDate}
				sortLikes={handleSortLikes}
			/>
			<Pagination
				nPages={nPages}
				currentPage={currentPage}
				setCurrentPage={setCurrentPage}
			/>
		</div>
	);
};

export default ContentPage;
