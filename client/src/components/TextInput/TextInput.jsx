const TextInput = (props) => {
  return (
    <div>
      <label>{props.labelTextInput}</label>
      <input
        type="text"
        value={props.textInputValue}
        onChange={props.onTextInputChange}
      ></input>
    </div>
  );
};

export default TextInput;
