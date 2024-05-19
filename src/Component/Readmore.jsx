import React from "react";
import { useParams } from "react-router-dom";
import { useState,useEffect } from "react";
import axios from "axios";
const Readmore = () => {
  const [formdata, setFormdata] = useState({
    title: "",
    author: "",
    descrip: "",
    price: "",
  });
  //fetch data first
  const { id } = useParams();
  // setFormdata(id);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(`${process.env.REACT_APP_API_URL}update/` + id);
      // console.log(res.data);
      setFormdata({
        title: res.data.title,
        author: res.data.author,
        descrip: res.data.descrip,
        price: res.data.price,
      });
    };
    fetchData();
  }, [id]);


  return (
    <>
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-sm-8 col-md-6">
            <div className="card w-100" >
            <div className="card-body">
              <p className="card-text fs-3">Title: {formdata.title}</p>
              <hr />
              <p className="card-text fs-5">Author: {formdata.author}</p>
              <hr />
              <p className="card-text " style={{textAlign:"justify"}}>StoryLine: {formdata.descrip}</p>
        </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Readmore;
