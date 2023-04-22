import "./TextInput.css";

const TextInput = ({ className, textInputLabel, textInputValue, onChange }) => {
	return (
		<div className={className}>
			<label>{textInputLabel}</label>
			<input type="text" value={textInputValue} onChange={onChange}></input>
		</div>
	);
};

export default TextInput;
