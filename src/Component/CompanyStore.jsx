import React, { useEffect, useState } from "react";
import axios from "axios";
import Company from "./Company";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Search } from "lucide-react";

const CompanyStore = () => {
  const [dataarr, setDataarr] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    callApi();
  }, []);

  const callApi = async () => {
    try {
      const res = await axios.get(`${process.env.REACT_APP_BACKEND_URL}api/company`);
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
      const res = await axios.delete(`${process.env.REACT_APP_BACKEND_URL}api/company/${delid}`);
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
    maxWidth: "300px", 
    height: "400px", 
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

  const searchBoxStyle = {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    marginBottom: "20px",
    position: "relative",
  };

  const inputStyle = {
    padding: "10px",
    paddingRight: "40px",
    fontSize: "16px",
    border: "2px solid #FF8C00",
    borderRadius: "20px",
    width: "300px",
    outline: "none",
    color: "#333",
    backgroundColor: "#FFF8DC",
  };

  const searchIconStyle = {
    position: "absolute",
    right: "10px",
    top: "50%",
    transform: "translateY(-50%)",
    color: "black",
    cursor: "pointer",
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredData = dataarr.filter((item) => {
    if (!item) return false;
    
    const searchableFields = [
      item.companyName,
      item.industry,
      item.founderName,
      item.mission,
      item.vision,
      ...(item.services?.map(service => service.title) || []),
      ...(item.achievements?.map(achievement => achievement.title) || [])
    ];

    const searchString = searchTerm.toLowerCase();
    return searchableFields.some(field => 
      field && field.toString().toLowerCase().includes(searchString)
    );
  });

  return (
    <div className="container" style={{ marginTop: "50px" }}>
      <style>{shimmerKeyframes}</style>
      <div style={searchBoxStyle}>
        <input
          type="text"
          placeholder="Search"
          style={inputStyle}
          value={searchTerm}
          onChange={handleSearch}
        />
        <Search style={searchIconStyle} size={24} />
      </div>
      <div className="row">
        {loading ? (
          <div style={shimmerStyle}>
            {[...Array(6)].map((_, index) => (
              <div key={index} style={shimmerItemStyle}>
                <div style={shimmerAnimationStyle}></div>
              </div>
            ))}
          </div>
        ) : filteredData.length > 0 ? (
          filteredData.map((item, i) => (
            <Company key={item._id || i} item={item} deleteItem={deleteItem} i={i} />
          ))
        ) : (
          <div className="col-12 text-center">
            <h3>No companies found matching your search</h3>
          </div>
        )}
      </div>
      <ToastContainer />
    </div>
  );
};

export default CompanyStore;