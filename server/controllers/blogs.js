import Blog from "../db/blog.model";
import mongoose from "mongoose";

export const getBlogs = async (req, res, next) => {
	try {
		const blogs = await Blog.find().sort({ created: "desc" });
		return res.json(blogs);
	} catch (error) {
		next(error);
	}
};

export const createBlog = async (req, res, next) => {
	const blog = req.body;

	try {
		const saved = await Blog.create(blog);
		return res.json(saved);
	} catch (err) {
		return next(err);
	}
};

export const updateBlog = async (req, res, next) => {
	try {
		const blogs = await Blog.findOneAndUpdate(
			{ _id: req.params.id },
			{ $set: { ...req.body } },
			{ new: true }
		);
		return res.json(blogs);
	} catch (err) {
		return next(err);
	}
};

export const deleteBlog = async (req, res, next) => {
	try {
		const blogs = await Blog.findById(req.params.id);
		const deleted = await blogs.delete();
		return res.json(deleted);
	} catch (err) {
		return next(err);
	}
};
