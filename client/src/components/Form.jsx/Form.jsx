import DateInput from "../DateInput/DateInput.jsx";
import TextInput from "../TextInput/TextInput.jsx";
import Textarea from "../Textarea/Textarea.jsx";
import Button from "../Button/Button.jsx";

const Form = (props) => {
  const onCancelButtonClicked = () => {
    console.log("cancel");
  };
  return (
    <div>
      <TextInput
        labelTextInput="Title: "
        textInputValue={props.titleValue}
        onTextInputChange={props.onTitleChange}
      />
      <DateInput
        labelDateInput="Date: "
        dateInputValue={props.dateInputValue}
        onChangeDateInput={props.onChangeDateInput}
      />
      <TextInput
        labelTextInput="Author: "
        textInputValue={props.authorValue}
        onTextInputChange={props.onAuthorChange}
      />
      <Textarea
        labelTextarea="Blog Content: "
        textareaValue={props.textareaValue}
        onTextareaChange={props.onTextareaChange}
      />
      <Button
        onButtonClicked={props.onPostButtonClicked}
        buttonText={props.postButtonText}
      />
      <Button onButtonClicked={onCancelButtonClicked} buttonText="Cancel" />
    </div>
  );
};

export default Form;
