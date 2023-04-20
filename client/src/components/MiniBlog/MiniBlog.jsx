import "./MiniBlog.css";

const MiniBlog = ({ title, author, date, post }) => {
	return (
		<div className="container">
			<img
				className="wallpaper"
				style={{ width: "20%" }}
				src="../src/assets/office-table-with-cup-coffee-keyboard-notepad.jpg"
			></img>
			<div className="title">{title}</div>
			<div className="author">By: {author}</div>
			<div className="date">Date: {date}</div>
			<div className="text-content">{post}</div>
		</div>
	);
};

export default MiniBlog;
