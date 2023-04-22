import "./TextInput.css";

const TextInput = ({ className, textInputLabel, onChange }) => {
	return (
		<div className={className}>
			<label>{textInputLabel}</label>
			<input type="text" onChange={onChange}></input>
		</div>
	);
};

export default TextInput;
