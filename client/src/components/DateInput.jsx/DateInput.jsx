const DateInput = (props) => {
  return (
    <div>
      <label>{props.labelDateInput}</label>
      <input
        type="date"
        value={props.dateInputValue}
        onChange={props.onChangeDateInput}
      ></input>
    </div>
  );
};

export default DateInput;
