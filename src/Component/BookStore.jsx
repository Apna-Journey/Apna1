import React, { useEffect, useState } from "react";
import axios from "axios";
import Company from "./Book";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const BookStore = () => {
  const [dataarr, setDataarr] = useState([]);

  useEffect(() => {
    callApi();
  }, []);

  const callApi = async () => {
    try {
      const res = await axios.get("http://localhost:8800/api/book");
      setDataarr(res.data);
    } catch (err) {
      console.error("Error fetching companies:", err);
      toast.error("Error fetching companies");
    }
  };

  const deleteItem = async (delid) => {
    try {
      const res = await axios.delete(`http://localhost:8800/api/book/${delid}`);
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

  return (
    <div className="container">
      <div className="row">
        {dataarr && dataarr.map((item, i) => (
          <Company 
            key={i} 
            item={item} 
            deleteItem={deleteItem} 
            i={i} 
          />
        ))}
      </div>
      <ToastContainer />
    </div>
  );
};

export default BookStore;
