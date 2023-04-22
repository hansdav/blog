import Select from "../Select/Select";
import TextInput from "../TextInput/TextInput";
import "./QueryPanel.css";

const QueryPanel = ({ sortLikes, sortDate }) => {
	return (
		<div className="QueryPanel">
			<TextInput
				className={"AuthorSearch"}
				textInputLabel={"Search by Author"}
				textInputValue={""}
				onChange={(event) => setBlogs(event.target.value)}
			></TextInput>
			<TextInput
				className={"TitleSearch"}
				textInputLabel={"Search by Title"}
				textInputValue={""}
				onChange={(event) => setBlogs(event.target.value)}
			></TextInput>
			<Select
				className="DateSort"
				onChange={(event) => sortDate(event.target.value)}
				values={["Choose an option", "Sort by new", "Sort by old"]}
			></Select>
			<Select
				className="LikesSort"
				value=""
				onChange={(event) => sortLikes(event.target.value)}
				values={[
					"Choose an option",
					"Sort by most likes",
					"Sort by least likes",
				]}
			></Select>
		</div>
	);
};

export default QueryPanel;
