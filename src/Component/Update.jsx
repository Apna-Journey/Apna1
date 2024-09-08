import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Update = () => {
  const navigate=useNavigate();
  const [formdata, setFormdata] = useState({
    title: "",
    link: "",
    descrip: "",
    year: "",
  });

  function fromdatafun(e) {
    setFormdata((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }
  //fetch data first
  const { id } = useParams();
  // setFormdata(id);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(`${process.env.REACT_APP_API_URL}update/` + id);
      // console.log(res.data);
      setFormdata({
        title: res.data.title,
        link: res.data.link,
        descrip: res.data.descrip,
        year: res.data.year,
      });
    };
    fetchData();
  }, [id]);

  async function submitfun(e) {
    e.preventDefault();
    try {
      await axios.put(`${process.env.REACT_APP_API_URL}update/`+id, formdata);
      // console.log(res);
      toast.success("Updation successful!"); // Show success toast
      setTimeout(() => {
        
        navigate("/")
      }, 2000);
    } catch (error) {
      // console.log(error);
      toast.error("Error occurred during insertion!"); // Show error toast
    }
  }
  return (
    <div className="insert ">
      <div className="container ">
        <h1 className="mt-sm-5 text-center">Update Company</h1>
        <form className=" m-auto my-5"  onSubmit={submitfun}>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input
              type="text"
              className="form-control"
              onChange={fromdatafun}
              title="title"
              value={formdata.name}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Link</label>
            <input
              type="text"
              className="form-control"
              onChange={fromdatafun}
              name="link"
              value={formdata.link}
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
            <label className="form-label">Year</label>
            <input
              type="text"
              className="form-control"
              onChange={fromdatafun}
              name="year"
              value={formdata.year}
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

export default Update;
