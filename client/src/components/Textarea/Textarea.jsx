const Textarea = (props) => {
  return (
    <div>
      <label>{props.labelTextarea}</label>
      <br/>
      <textarea
        value={props.textareaValue}
        onChange={props.onTextareaChange}
      ></textarea>
    </div>
  );
};

export default Textarea;
