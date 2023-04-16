import dotenv from "dotenv";
import mongoose from "mongoose";
import titles from "./titles.json" assert { type: "json" };
import authors from "./authors.json" assert { type: "json" };
import posts from "./posts.json" assert { type: "json" };
import Blog from "../db/blog.model.js";

dotenv.config({
	path: "/Users/hans/repos/projects/blog/server/.env",
});

const mongoUrl = process.env.MONGO_URL;

if (!mongoUrl) {
	console.error("Missing MONGO_URL environment variable");
	process.exit(1);
}

const pick = (from) => from[Math.floor(Math.random() * (from.length - 0))];

const populateBlogs = async () => {
	await Blog.deleteMany({});

	const blogs = authors.map((author) => ({
		author: author,
		title: pick(titles),
		post: pick(posts),
		likes: 0,
		date: Date.now,
	}));

	await Blog.create(...blogs);
	console.log("Blog posts created");
};

const main = async () => {
	await mongoose.connect(mongoUrl);

	await populateBlogs();

	await mongoose.disconnect();
};

main().catch((error) => {
	console.error(error);
	process.exit(1);
});
