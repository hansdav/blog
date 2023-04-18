const DateInput = ({ props }) => {
  return (
    <input
      type="date"
      value={dateInputValue}
      onChange={onChangeDateInput}
    ></input>
  );
};

export default DateInput;
