import React from "react";
import { useState, useEffect } from "react";
import DateInput from "../DateInput/DateInput.jsx";
import TextInput from "../TextInput/TextInput.jsx";
import Textarea from "../Textarea/Textarea.jsx";
import Button from "../Button/Button.jsx";

const Form = (props) => {
  const [blogData, setBlogData] = useState(props.blogData);

  const date = () => {
    const newDate = new Date();
    const year = newDate.getFullYear();
    const month = (newDate.getMonth() + 1).toString().padStart(2, "0");
    const date = newDate.getDate().toString().padStart(2, "0");
    const dateValue = `${year}-${month}-${date}`;
    return dateValue;
  };

  const [titleValue, setTitleValue] = useState("");
  const [dateInputValue, setDateInputValue] = useState(date());
  const [authorValue, setAuthorValue] = useState("");
  const [contentValue, setContentValue] = useState("");

  useEffect(() => {
    if (blogData) {
      setTitleValue(blogData.title);
      setDateInputValue(blogData.date);
      setAuthorValue(blogData.author);
      setContentValue(blogData.blogContent);
    }
  }, [blogData]);

  //console.log(blogData);

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

  //console.log(dateInputValue);

  const onCancelButtonClicked = () => {
    console.log("cancel");
  };

  const onPostButtonClicked = () => {
    console.log("post");
    console.log({...blogData, likes: 0});
    props.functionFromCreateBlogPage({...blogData, likes: 0});
  };

  return (
    <div>
      <TextInput
        labelTextInput="Title: "
        textInputValue={titleValue}
        onTextInputChange={onChangeTitle}
      />
      <DateInput
        labelDateInput="Date: "
        dateInputValue={dateInputValue}
        onChangeDateInput={onChangeDate}
      />
      <TextInput
        labelTextInput="Author: "
        textInputValue={authorValue}
        onTextInputChange={onChangeAuthor}
      />
      <Textarea
        labelTextarea="Blog Content: "
        textareaValue={contentValue}
        onTextareaChange={onChangeContent}
      />
      <Button
        onButtonClicked={onPostButtonClicked}
        buttonText={blogData ? "Update" : "Post"}
      />
      <Button onButtonClicked={onCancelButtonClicked} buttonText="Cancel" />
    </div>
  );
};

export default Form;
