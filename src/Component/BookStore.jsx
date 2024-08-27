import React, { useEffect, useState } from "react";
import axios from "axios";
import Company from "./Book";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const BookStore = () => {
  const [dataarr, setDataarr] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    callApi();
  }, []);

  const callApi = async () => {
    try {
      const res = await axios.get(`${process.env.REACT_APP_BACKEND_URL}api/book`);
      setDataarr(res.data);
      setLoading(false);
    } catch (err) {
      console.error("Error fetching companies:", err);
      toast.error("Error fetching companies");
      setLoading(false);
    }
  };

  const deleteItem = async (delid) => {
    try {
      const res = await axios.delete(`${process.env.REACT_APP_BACKEND_URL}api/book/${delid}`);
      if (res.status === 200) {
        toast.warning("Company Deleted Successfully");
        callApi();
      } else {
        toast.success("Already Deleted!");
      }
    } catch (error) {
      toast.error("Error occurred during deletion!");
    }
  };

  const shimmerStyle = {
    display: "flex",
    justifyContent: "space-around",
    flexWrap: "wrap",
    gap: "20px",
  };

  const shimmerItemStyle = {
    width: "100%",
    maxWidth: "200px",
    height: "300px",
    backgroundColor: "#f0f0f0",
    position: "relative",
    overflow: "hidden",
    borderRadius: "10px",
  };

  const shimmerAnimationStyle = {
    width: "100%",
    height: "100%",
    background: "linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%)",
    backgroundSize: "200% 100%",
    animation: "shimmer 1.5s infinite",
  };

  const shimmerKeyframes = `
    @keyframes shimmer {
      0% {
        background-position: -200% 0;
      }
      100% {
        background-position: 200% 0;
      }
    }
  `;

  return (
    <div className="container" style={{ marginTop: "50px" }}>
      <style>{shimmerKeyframes}</style>
      <div className="row">
        {loading ? (
          <div style={shimmerStyle}>
            {[...Array(6)].map((_, index) => (
              <div key={index} style={shimmerItemStyle}>
                <div style={shimmerAnimationStyle}></div>
              </div>
            ))}
          </div>
        ) : (
          dataarr &&
          dataarr.map((item, i) => (
            <Company key={i} item={item} deleteItem={deleteItem} i={i} />
          ))
        )}
      </div>
      <ToastContainer />
    </div>
  );
};

export default BookStore;
