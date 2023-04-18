const DateInput = ({ props }) => {
  return (
    <input
      type="date"
      value={props.dateInputValue}
      onChange={props.onChangeDateInput}
    ></input>
  );
};

export default DateInput;
