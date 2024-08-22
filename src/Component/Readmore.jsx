import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Readmore = () => {
  const [formdata, setFormdata] = useState({
    title: "",
    author: "",
    descrip: "",
    price: "",
  });

  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(`${process.env.REACT_APP_BACKEND_URL}api/book/` + id);
      setFormdata({
        title: res.data.title,
        author: res.data.author,
        descrip: res.data.descrip,
        price: res.data.price,
      });
    };
    fetchData();
  }, [id]);

  const handlePrint = () => {
    window.print();
  };

  return (
    <>
      <div className="container mt-5 readmorebox">
        <div className="row justify-content-center">
          <div className="col-sm-8 col-md-6">
            <div className="card w-100">
              <div className="card-body">
                <p className="card-text fs-3">Company Name: {formdata.title}</p>
                <hr />
                <p className="card-text fs-5">Website Link: {formdata.author}</p>
                <hr />
                <p className="card-text" style={{ textAlign: "justify" }}>
                  Description: {formdata.descrip}
                </p>
                <button 
                  className="btn btn-primary mt-3 no-print"
                  onClick={handlePrint}
                >
                  Print
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Readmore;
