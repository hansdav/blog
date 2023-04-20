import { useNavigate } from "react-router-dom";
import Form from "../components/Form.jsx/Form";
import { json } from "stream/consumers";

const createBlogPost = async (blogData) => {
  try {
    const response = await fetch("/api/blogs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(blogData),
    });
    return await res.json();
  } catch (error) {
    console.error(error);
  }
};

const CreateBlogLayout = () => {
  const navigate = useNavigate();
  return <Form />;
};

export default CreateBlogLayout;
