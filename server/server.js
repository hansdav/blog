import dotenv from "dotenv";
import cors from "cors";
import express from "express";
import mongoose from "mongoose";
import blogsRouter from "./routes/blogs.js";

dotenv.config({ path: "./.env" });

const { MONGO_URL, PORT = 5050 } = process.env;

if (!MONGO_URL) {
	console.error("Missing MONGO_URL environment variable");
	process.exit(1);
}

const app = express();
app.use(express.json());
app.use(cors());

app.use("/api/blogs", blogsRouter);

const main = async () => {
	await mongoose.connect(MONGO_URL);

	app.listen(PORT, () => {
		console.log("App is listening on 5050");
		console.log("Try /api/blogs route right now");
	});
};

main().catch((err) => {
	console.error(err);
	process.exit(1);
});
