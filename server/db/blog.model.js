import mongoose from "mongoose";
const { Schema, model } = mongoose;

const BlogSchema = new Schema({
	//_id: String,
	author: String,
	title: String,
	post: String,
	likes: Number,
	created: { type: Date, default: Date.now },
});

const Blog = model("Blog", BlogSchema);

export default Blog;
