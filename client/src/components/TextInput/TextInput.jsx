import './TextInput.css';

const TextInput = ({ className, textInputLabel, textInputValue, onChange }) => {
  return (
    <div id='input-boxes' className={className}>
      <label>{textInputLabel}</label>
      <br/>
      <input type='text' value={textInputValue} onChange={onChange}></input>
    </div>
  );
};

export default TextInput;
