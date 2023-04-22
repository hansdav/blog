import { useNavigate, useParams } from "react-router-dom";
import Form from "../components/Form/Form.jsx";
import { useEffect, useState } from "react";

const fetchBlogPost = async (id) => {
  try {
    const response = await fetch(`http://localhost:5050/api/blogs/${id}`);
    return await response.json();
  } catch (error) {
    console.log(error);
  }
};

const updateBlogPost = async (blogData) => {
  try {
    const response = await fetch(
      `http://localhost:5050/api/blogs/${blogData._id}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(blogData),
      }
    );
    return await response.json();
  } catch (error) {
    console.error(error);
  }
};

const UpdateBlogPage = (props) => {
  const { id } = useParams();
  console.log(id);
  const navigate = useNavigate();
  const [blogPost, setBlogPost] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const post = await fetchBlogPost(id);
        setBlogPost(post);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [id]);

  const handleUpdateBlogPost = async (blogData) => {
    try {
      await updateBlogPost(blogData);
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <Form
      blogData={blogPost}
      functionFromCreateBlogPage={handleUpdateBlogPost}
    />
  );
};

export default UpdateBlogPage;
