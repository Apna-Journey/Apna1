import React, { useState } from "react";
import axios from 'axios';
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
const Insert = () => {
  const navigate=useNavigate();
  const [formdata, setFormdata] = useState({
    title: "",
    author: "",
    descrip: "",
    price: "",
  });
  function fromdatafun(e) {
    setFormdata((prev) => ({ ...prev,
       [e.target.name]: e.target.value }));
    
  }
  // console.log(formdata)
  async function submitfun(e){
      e.preventDefault();
      try {
        await axios.post(`${process.env.REACT_APP_API_URL}insert`,formdata)
        
        toast.success("Insertion successful!"); // Show success toast
        setFormdata({
          title: "",
          author: "",
          descrip: "",
          price: "",
        });
        setTimeout(() => {
          navigate("/")
          
        }, 2000);
      } catch (error) {
        // console.log(error)
        toast.error("Error occurred during insertion!"); // Show error toast
      }
  }
  return (
    <div className="insert ">
      <div className="container ">
        <h1 className="mt-sm-5 text-center">Add Book</h1>
        <form className=" m-auto my-5"  onSubmit={submitfun}>
          <div className="mb-3">
            <label className="form-label">Title</label>
            <input
              type="text"
              className="form-control"
              onChange={fromdatafun}
              name="title"
              value={formdata.title}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Author</label>
            <input
              type="text"
              className="form-control"
              onChange={fromdatafun}
              name="author"
              value={formdata.author}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Description</label>
            <input
              type="text"
              className="form-control"
              onChange={fromdatafun}
              name="descrip"
              value={formdata.descrip}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Price</label>
            <input
              type="text"
              className="form-control"
              onChange={fromdatafun}
              name="price"
              value={formdata.price}
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
        
        <ToastContainer /> {/* Toast container */}
      </div>
    </div>
  );
};

export default Insert;
