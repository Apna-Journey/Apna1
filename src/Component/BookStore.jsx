import React, { useEffect, useState } from "react";

import Book from "./Book";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
const BookStore = () => {
 
  const [dataarr,setDataarr]=useState([]);
  useEffect(()=>{
    
    callApi();
  },[])
  const callApi = async () => {
    try {
      const res = await axios.get(`${process.env.REACT_APP_API_URL}book`);
      // console.log(res.data);
      setDataarr(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const deleteItem=async(delid)=>{
    try {
      
      const res=await axios.delete(`${process.env.REACT_APP_API_URL}delete/`+delid);
      console.log(res.data.affectedRows)
      if(res.data.affectedRows===1){
        toast.success("Delete successful!"); 
        callApi();
      }else{
        toast.success("Already Deleted!"); 
      }

    } catch (error) {
      toast.error("Error occurred during insertion!"); // Show error toast
      
    }
  }

  return (
    <div className="container">
      <div className="row">
        {dataarr && dataarr.map((item, i) => {
          return <Book key={i} item={item} deleteItem={deleteItem} i={i} />;
        })}
      </div>
      <ToastContainer /> {/* Toast container */}

    </div>
  );
};

export default BookStore;
