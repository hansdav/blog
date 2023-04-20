const miniBlog = ({ title, author, date, text }) => {
	return (
		<div className="container">
			<img
				id="wallpaper"
				src="../src/assets/office-table-with-cup-coffee-keyboard-notepad.jpg"
			></img>
			<div className="title">{title}</div>
			<div className="author">By: {author}</div>
			<div className="date">Date: {date}</div>
			<div className="text-content">{text}</div>
		</div>
	);
};

export default miniBlog;
