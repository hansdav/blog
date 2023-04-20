import Select from "../Select/Select";
import TextInput from "../TextInput/TextInput";
import "./QueryPanel.css";

const QueryPanel = () => {
	return (
		<div className="QueryPanel">
			<TextInput></TextInput>
			<TextInput></TextInput>
			<Select></Select>
			<Select></Select>
		</div>
	);
};
