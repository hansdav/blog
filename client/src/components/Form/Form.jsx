import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import DateInput from "../DateInput/DateInput.jsx";
import TextInput from "../TextInput/TextInput.jsx";
import Textarea from "../Textarea/Textarea.jsx";
import Button from "../Button/Button.jsx";
import "./Form.css";

const Form = (props) => {
  const navigate = useNavigate();
  const [blogData, setBlogData] = useState(props.blogData);

  const date = (dateProp) => {
    const newDate = new Date(dateProp);
    const year = newDate.getFullYear();
    const month = (newDate.getMonth() + 1).toString().padStart(2, "0");
    const date = newDate.getDate().toString().padStart(2, "0");
    const dateValue = `${year}-${month}-${date}`;
    console.log(dateValue);
    return dateValue;
  };

  const [titleValue, setTitleValue] = useState("");
  const [dateInputValue, setDateInputValue] = useState(date(new Date()));
  const [authorValue, setAuthorValue] = useState("");
  const [contentValue, setContentValue] = useState("");

  useEffect(() => {
    if (props.blogData) {
      console.log(props.blogData);
      setTitleValue(props.blogData.title);
      setDateInputValue(date(props.blogData.created));
      setAuthorValue(props.blogData.author);
      setContentValue(props.blogData.post);
    }
  }, [props.blogData]);

  const onChangeTitle = (e) => {
    setTitleValue(e.target.value);
    setBlogData({ ...blogData, title: e.target.value });
  };

  const onChangeDate = (e) => {
    setDateInputValue(e.target.value);
    setBlogData({ ...blogData, created: e.target.value });
  };

  const onChangeAuthor = (e) => {
    setAuthorValue(e.target.value);
    setBlogData({ ...blogData, author: e.target.value });
  };

  const onChangeContent = (e) => {
    setContentValue(e.target.value);
    setBlogData({ ...blogData, post: e.target.value });
  };

  const onCancelButtonClicked = () => {
    console.log("cancel");
    navigate("/");
  };

  const onPostButtonClicked = () => {
    props.blogData
      ? props.functionFromCreateBlogPage({
          title: titleValue,
          created: dateInputValue,
          author: authorValue,
          post: contentValue,
          likes: props.blogData.likes,
          _id: props.blogData._id,
        })
      : props.functionFromCreateBlogPage({
          title: titleValue,
          created: dateInputValue,
          author: authorValue,
          post: contentValue,
        });
  };
console.log(titleValue)
  return (
    <div className="Form">
      <TextInput
        textInputLabel="Title: "
        textInputValue={titleValue}
        onChange={onChangeTitle}
      />
      <DateInput
        DateInputClass="Form-DateInput"
        labelDateInput="Date: "
        dateInputValue={dateInputValue}
        onChangeDateInput={onChangeDate}
      />
      <TextInput
        textInputLabel="Author: "
        textInputValue={authorValue}
        onChange={onChangeAuthor}
      />
      <Textarea
        labelTextarea="Blog Content: "
        textareaValue={contentValue}
        onTextareaChange={onChangeContent}
      />
      <div className="Formbuttons">
        <Button
          buttonClass="Form-button"
          onButtonClicked={onPostButtonClicked}
          buttonText={props.blogData ? "Update" : "Post"}
        />
        <Button
          buttonClass="Form-button"
          onButtonClicked={onCancelButtonClicked}
          buttonText="Cancel"
        />
      </div>
    </div>
  );
};

export default Form;
