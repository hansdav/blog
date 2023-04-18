import DateInput from "../DateInput/DateInput.jsx";
import TextInput from "../TextInput/TextInput.jsx";
import Textarea from "../Textarea/Textarea.jsx";
import Button from "../Button.jsx";

const Form = ({ props }) => {
  return (
    <div>
      <TextInput
        labelTextInput="Title: "
        textInputValue={props.titleValue}
        onTextInputChange={props.onTitleChange}
      />
      <DateInput
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
      <Button onButtonClicked={props.onPostButtonClicked} buttonText="Post" />
      <Button onButtonClicked={onCancelButtonClicked} buttonText="Cancel" />
    </div>
  );
};

export default Form;
