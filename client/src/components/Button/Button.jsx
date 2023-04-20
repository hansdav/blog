const Button = (props) => {
  return <button onClick={props.onButtonClicked}>{props.buttonText}</button>;
};

export default Button;
