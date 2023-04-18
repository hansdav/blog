const Textarea = ({ props }) => {
  return (
    <div>
      <label>{labelTextarea}</label>
      <textarea value={textareaValue} onChange={onTextareaChanged}></textarea>
    </div>
  );
};

export default Textarea;
