import { useNavigate } from "react-router-dom";
import Form from "../components/Form/Form.jsx";

const createBlogPost = async (blogData) => {
  try {
    const response = await fetch("http://localhost:5050/api/blogs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(blogData),
    });
    return await response.json();
  } catch (error) {
    console.error(error);
  }
};

const CreateBlogLayout = () => {
  const navigate = useNavigate();
  const handleCreateBlogPost = async (blogData) => {
    try {
      await createBlogPost(blogData);
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  }
  return <Form functionFromCreateBlogPage={handleCreateBlogPost} />;
};

export default CreateBlogLayout;
