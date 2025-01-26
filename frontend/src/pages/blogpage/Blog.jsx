import React, { useState, useEffect } from "react";
import Navbar from "../../components/navbar/Navbar";
import axios from "axios";
import "./Blog.css";
import blog from "../../assets/blogs.jpg";
import oops from "../../assets/embarrassed.png";
import Footer from "../../components/footer/Footer";
import { toast } from 'react-toastify';

function Blog() {
  const [blogs, setBlogs] = useState([]);
  const [blogTitle, setBlogTitle] = useState("");
  const [blogDescription, setBlogDescription] = useState("");
  const [category, setCategory] = useState("");
  const [selectedBlog, setSelectedBlog] = useState("");
  const [showEditPopup, setShowEditPopup] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:4000/api/blog/blogs")
      .then((response) => {
        console.log(response.data);
       
        setBlogs(response?.data?.data);
      })
      .catch((error) => {
        console.error("Error fetching blogs", error);
      
      });
  },[]);

  useEffect(()=>{
    console.log(blogs)
  },[blogs])

  async function handleBlog(e) {
    e.preventDefault()
    console.log("in handle blog...");
    if (blogTitle && blogDescription && category) {
      const newBlog = {
        title: blogTitle,
        description: blogDescription,
        category: category,
      };
      try {
        const response = await axios.post(
          "http://localhost:4000/api/blog/create",
          newBlog
        );
        console.log("blog created...");
        toast.success("Created successfully")
        setBlogs([...blogs, newBlog]);
        // console.log(blogs);
        setBlogTitle("");
        setBlogDescription("");
        setCategory("");
      } catch (error) {
        console.log("error in saving blog:", error);
        toast.error("Something went wrong");
      }
    }
  }

  async function handleDelete(id) {
    const token = localStorage.getItem('token');
    if (!token) {
      console.log('No token found!');
      return; // Handle the absence of token
    }
    try {
      await axios.delete(`http://localhost:4000/api/blog/delete/${id}`,{ headers: { Authorization: `Bearer ${token}` }});
      toast.success("Deleted Successfully")
      setBlogs(blogs.filter((blog) => blog._id != id));
    } catch (error) {
      toast.error("Login as an admin to delete the blog");
      console.log("Error in deleting the blog", error);
    }
  }
  const handleEditClick = (blog) => {
    setSelectedBlog(blog);
    setShowEditPopup(true);
  };
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setSelectedBlog({ ...selectedBlog, [name]: value });
  };
  const handleUpdateBlog = async (event) => {
    const token = localStorage.getItem('token');
    try {
      event.preventDefault();
      const response = await axios.put(
        `http://localhost:4000/api/blog/update/${selectedBlog._id}`,
        selectedBlog,{ headers: { Authorization: `Bearer ${token}` }}
      );
      console.log(response);
      toast.success("Edited successfully");
      setBlogs((prevBlogs) => (
        prevBlogs.map((blog) => (
          blog._id === selectedBlog._id ? response.data.data : blog
        ))
      ));
      setShowEditPopup(false);
      setSelectedBlog(null);
    } catch (error) {
      toast.error("Login as an Admin to edit");
      console.log("Error in updating the blog", error);
    }
  };
  return (
    <>
      <div className="blogs">
        <Navbar></Navbar>
        <div className="heading">
          <img src={blog} className="image"></img>
          <div className="blog-heading-div">
            <h1 className="blog-heading">
              Explore the Latest Technology Trends Here...
            </h1>
          </div>
        </div>
        <form onSubmit={(e)=>handleBlog(e)} className="form">
          <div className="form-labels">
            <div className="label">
              <label>Enter your Blog Title:</label>
              <input
                type="text"
                id="blogTitle"
                value={blogTitle}
                onChange={(e) => setBlogTitle(e.target.value)}
                required
              ></input>
            </div>

            {/*  */}
            <div className="label">
              <label>Enter your Blog Description:</label>
              <input
                type="text"
                id="blogDescription"
                value={blogDescription}
                onChange={(e) => setBlogDescription(e.target.value)}
                required
              ></input>
            </div>

            {/*  */}
            <div className="label">
              <label>Enter your Blog Category:</label>
              <input
                type="text"
                id="category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                required
              ></input>
            </div>
            <div className="label">
              <button type="submit" className="buttons">
                Create
              </button>
            </div>
          </div>
        </form>
        <section className="blog-container">
          <h1>Here are latest Technology Trends</h1>
          <div className="blogs-div">
            {blogs.length > 0 ? (
              blogs.map((blog) => (
                <div key={blog._id} className="blog-card">
                  <h2>{blog.title}</h2>
                  <p>{blog.description}</p>
                  <p>
                    Category: <span class="category"> {blog.category}</span>
                  </p>
                  <div className="button-div">
                    <button
                      className="buttons edit"
                      onClick={() => handleEditClick(blog)}
                    >
                      Edit Blog
                    </button>
                    <button
                      className="buttons"
                      onClick={() => handleDelete(blog._id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <div className="no-blogs-div">
                <img src={oops} className="oops"></img>
                <h1>OOPS!!</h1>
                <p>No blog present here. Want to create one?</p>
              </div>
            )}
          </div>
          {/* Edit blog popup */}
          {showEditPopup && selectedBlog && (
            <div className="overlay">
              <div className="edit-blog">
              <h2>Edit your Blog</h2>
              <form className="edit-blog-form" onSubmit={handleUpdateBlog}>
                <div>
                  <label>Title</label>
                  <input
                    type="text"
                    name="title"
                    value={selectedBlog.title}
                    onChange={(e)=>handleInputChange(e)}
                    required
                  />
                </div>
                <div>
                  <label>Description</label>
                  <input
                    name="description"
                    value={selectedBlog.description}
                    onChange={()=>handleInputChange(e)}
                    required
                  />
                </div>
                <div>
                  <label>Category</label>
                  <input
                    name="category"
                    value={selectedBlog.category}
                    onChange={(e)=>handleInputChange(e)}
                    required
                  />
                </div>
                <button type="submit">Update Blog</button>
                <button type="button" onClick={() => setShowEditPopup(false)}>
                  Cancel
                </button>
              </form>
            </div>

            </div>
            
          )}
        </section>
      </div>
      <Footer></Footer>
    </>
  );
}

export default Blog;
