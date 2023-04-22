const DateInput = (props) => {
  return (
    <div className="DateInputClass">
      <label>{props.labelDateInput}</label>
      <br/>
      <input
        type="date"
        value={props.dateInputValue}
        onChange={props.onChangeDateInput}
      ></input>
    </div>
  );
};

export default DateInput;
