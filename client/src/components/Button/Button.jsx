const Button = (props) => {
  return <button className={props.buttonClass} onClick={props.onButtonClicked}>{props.buttonText}</button>;
};

export default Button;
