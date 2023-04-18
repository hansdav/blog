const TextInput = ({ props }) => {
  return (
    <div>
      <label>{labelTextInput}</label>
      <input
        type="text"
        value={textInputValue}
        onChange={onTextInputChanged}
      ></input>
    </div>
  );
};

export default TextInput;
