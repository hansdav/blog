import express from "express";
import {
	createBlog,
	deleteBlog,
	getBlogs,
	updateBlog,
} from "../controllers/blogs.js";

const blogsRouter = express.Router();

blogsRouter.route("/").get(getBlogs).post(createBlog);

blogsRouter.route("/:id").patch(updateBlog).delete(deleteBlog);

export default blogsRouter;
