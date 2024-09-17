import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Readmore = () => {
  const [formdata, setFormdata] = useState({
    title: "",
    link: "",
    descrip: "",
    year: "",
  });

  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(`${process.env.REACT_APP_BACKEND_URL}api/company/` + id);
      setFormdata({
        title: res.data.title,
        link: res.data.link,
        descrip: res.data.descrip,
        year: res.data.year,
      });
    };
    fetchData();
  }, [id]);

  const handlePrint = () => {
    window.print();
  };

  return (
    <>
      <style>
        {`
          @media print {
            body * {
              visibility: hidden;
            }
            .card, .card * {
              visibility: visible;
            }
            .card {
              position: absolute;
              left: 0;
              top: 0;
              width: 100%;
              height: 100%;
              padding: 20px;
              box-sizing: border-box;
              background-color: #f0f8ff !important;
              border: none !important;
            }
            .no-print {
              display: none !important;
            }
            .card-body {
              padding: 0 !important;
            }
            .card-text.fs-3 {
              color: #3498db !important;
              font-size: 36px !important;
              font-weight: bold !important;
              margin-bottom: 20px !important;
              text-align: center !important;
            }
            .card-text.fs-5, .card-text:not(.fs-3):not(.fs-5) {
              background-color: #ecf0f1 !important;
              border-radius: 5px !important;
              padding: 15px !important;
              margin-bottom: 15px !important;
              box-shadow: 0 2px 5px rgba(0,0,0,0.1) !important;
            }
            .card-text.fs-5::before, .card-text:not(.fs-3):not(.fs-5)::before {
              content: attr(data-title);
              display: block;
              color: #2980b9 !important;
              font-size: 20px !important;
              margin-bottom: 10px !important;
              border-bottom: 2px solid #3498db !important;
              padding-bottom: 5px !important;
            }
            hr {
              display: none !important;
            }
          }
        `}
      </style>
      <div className="container mt-5 readmorebox">
        <div className="row justify-content-center">
          <div className="col-sm-8 col-md-6">
            <div className="card w-100">
              <div className="card-body">
                <p className="card-text fs-3">{formdata.title}</p>
                <hr />
                <p className="card-text fs-5" data-title="Website Link">{formdata.link}</p>
                <hr />
                <p className="card-text" style={{ textAlign: "justify" }} data-title="Description">
                  {formdata.descrip}
                </p>
                <p className="card-text" data-title="Established">{formdata.year}</p>
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