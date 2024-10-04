import React, { useState, useEffect } from "react"; 
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const Insert = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    companyName: "",
    website: "",
    foundingYear: "",
    founderName: "",
    industry: "",
    employeeCount: "",
    mission: "",
    vision: "",
    services: [
      { title: "", description: "" },
      { title: "", description: "" },
      { title: "", description: "" },
      { title: "", description: "" },
    ],
    whyChooseUs: [
      { statement: "" },
      { statement: "" },
      { statement: "" },
      { statement: "" },
    ],
    achievements: [
      { title: "", description: "" },
      { title: "", description: "" },
      { title: "", description: "" },
    ],
    socialMedia: {
      linkedin: "",
      instagram: "",
      twitter: "",
    },
  });

  const [redirectToLogin, setRedirectToLogin] = useState(false); // State to manage login redirection

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleServiceChange = (index, field, value) => {
    setFormData((prev) => {
      const updatedServices = [...prev.services];
      updatedServices[index] = {
        ...updatedServices[index],
        [field]: value,
      };
      return { ...prev, services: updatedServices };
    });
  };

  const handleWhyChooseUsChange = (index, value) => {
    setFormData((prev) => {
      const updatedWhyChooseUs = [...prev.whyChooseUs];
      updatedWhyChooseUs[index] = { statement: value };
      return { ...prev, whyChooseUs: updatedWhyChooseUs };
    });
  };

  const handleAchievementChange = (index, field, value) => {
    setFormData((prev) => {
      const updatedAchievements = [...prev.achievements];
      updatedAchievements[index] = {
        ...updatedAchievements[index],
        [field]: value,
      };
      return { ...prev, achievements: updatedAchievements };
    });
  };

  const handleSocialMediaChange = (platform, value) => {
    setFormData((prev) => ({
      ...prev,
      socialMedia: {
        ...prev.socialMedia,
        [platform]: value,
      },
    }));
  };

  function isValidURL(string) {
    const urlPattern = new RegExp(
      "^(https?:\\/\\/)?(" +
        "(([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" +
        "((\\d{1,3}\\.){3}\\d{1,3}))" +
        "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" +
        "(\\?[;&a-z\\d%_.~+=-]*)?" +
        "(\\#[-a-z\\d_]*)?$",
      "i"
    );
    return !!urlPattern.test(string);
  }

  const validateForm = () => {
    if (!formData.companyName || !formData.website || !formData.foundingYear) {
      toast.error("All required fields must be filled");
      return false;
    }

    if (!isValidURL(formData.website)) {
      toast.error("Please enter a valid website URL");
      return false;
    }

    // Validate services
    if (formData.services.some((service) => !service.title || !service.description)) {
      toast.error("Please fill all service details");
      return false;
    }

    // Validate Why Choose Us statements
    if (formData.whyChooseUs.some((item) => !item.statement)) {
      toast.error("Please fill all 'Why Choose Us' statements");
      return false;
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    const token = localStorage.getItem("token");
    if (!token) {
      // If not logged in, redirect to login
      setRedirectToLogin(true);
      navigate("/login", { state: { formData } }); // Pass the formData to login
      return;
    }

    try {
      await axios.post(`${process.env.REACT_APP_BACKEND_URL}api/company`, formData);
      toast.success("Company profile created successfully!");
      setTimeout(() => {
        navigate("/");
      }, 2000);
    } catch (error) {
      toast.error(error.response?.data?.message || "Error creating company profile");
    }
  };

  const styles = {
    container: {
      maxWidth: "800px",
      margin: "0 auto",
      padding: "20px",
      backgroundColor: "#f5f5f5",
      borderRadius: "8px",
      boxShadow: "0 0 10px rgba(0,0,0,0.1)",
    },
    section: {
      marginBottom: "20px",
      padding: "15px",
      backgroundColor: "#ffffff",
      borderRadius: "5px",
    },
    label: {
      fontWeight: "bold",
      marginBottom: "5px",
      display: "block",
    },
    input: {
      width: "100%",
      padding: "8px",
      marginBottom: "10px",
      border: "1px solid #ddd",
      borderRadius: "4px",
    },
    button: {
      backgroundColor: "#007bff",
      color: "#ffffff",
      padding: "10px 20px",
      border: "none",
      borderRadius: "4px",
      cursor: "pointer",
    },
  };

  return (
    <div style={styles.container}>
      <h2>Create Company Profile</h2>
      <form onSubmit={handleSubmit}>
        {/* Basic Information */}
        <div style={styles.section}>
          <h3>Basic Information</h3>
          <input
            type="text"
            name="companyName"
            placeholder="Company Name"
            value={formData.companyName}
            onChange={handleInputChange}
            style={styles.input}
          />
          <input
            type="url"
            name="website"
            placeholder="Company Website"
            value={formData.website}
            onChange={handleInputChange}
            style={styles.input}
          />
          <input
            type="number"
            name="foundingYear"
            placeholder="Founding Year"
            value={formData.foundingYear}
            onChange={handleInputChange}
            style={styles.input}
          />
          <input
            type="text"
            name="founderName"
            placeholder="Founder/CEO Name"
            value={formData.founderName}
            onChange={handleInputChange}
            style={styles.input}
          />
          <input
            type="text"
            name="industry"
            placeholder="Industry"
            value={formData.industry}
            onChange={handleInputChange}
            style={styles.input}
          />
          <input
            type="text"
            name="employeeCount"
            placeholder="Number of Employees"
            value={formData.employeeCount}
            onChange={handleInputChange}
            style={styles.input}
          />
        </div>

        {/* Mission and Vision */}
        <div style={styles.section}>
          <h3>Mission and Vision</h3>
          <textarea
            name="mission"
            placeholder="Company Mission"
            value={formData.mission}
            onChange={handleInputChange}
            style={{ ...styles.input, height: "100px" }}
          />
          <textarea
            name="vision"
            placeholder="Company Vision"
            value={formData.vision}
            onChange={handleInputChange}
            style={{ ...styles.input, height: "100px" }}
          />
        </div>

        {/* Services */}
        <div style={styles.section}>
          <h3>Services</h3>
          {formData.services.map((service, index) => (
            <div key={index}>
              <input
                type="text"
                placeholder="Service Title"
                value={service.title}
                onChange={(e) => handleServiceChange(index, "title", e.target.value)}
                style={styles.input}
              />
              <textarea
                placeholder="Service Description"
                value={service.description}
                onChange={(e) => handleServiceChange(index, "description", e.target.value)}
                style={{ ...styles.input, height: "100px" }}
              />
            </div>
          ))}
        </div>

        {/* Why Choose Us */}
        <div style={styles.section}>
          <h3>Why Choose Us</h3>
          {formData.whyChooseUs.map((item, index) => (
            <input
              key={index}
              type="text"
              placeholder="Statement"
              value={item.statement}
              onChange={(e) => handleWhyChooseUsChange(index, e.target.value)}
              style={styles.input}
            />
          ))}
        </div>

        {/* Achievements */}
        <div style={styles.section}>
          <h3>Achievements</h3>
          {formData.achievements.map((achievement, index) => (
            <div key={index}>
              <input
                type="text"
                placeholder="Achievement Title"
                value={achievement.title}
                onChange={(e) => handleAchievementChange(index, "title", e.target.value)}
                style={styles.input}
              />
              <textarea
                placeholder="Achievement Description"
                value={achievement.description}
                onChange={(e) => handleAchievementChange(index, "description", e.target.value)}
                style={{ ...styles.input, height: "100px" }}
              />
            </div>
          ))}
        </div>

        {/* Social Media Links */}
        <div style={styles.section}>
          <h3>Social Media Links</h3>
          <input
            type="url"
            placeholder="LinkedIn URL"
            value={formData.socialMedia.linkedin}
            onChange={(e) => handleSocialMediaChange("linkedin", e.target.value)}
            style={styles.input}
          />
          <input
            type="url"
            placeholder="Instagram URL"
            value={formData.socialMedia.instagram}
            onChange={(e) => handleSocialMediaChange("instagram", e.target.value)}
            style={styles.input}
          />
          <input
            type="url"
            placeholder="Twitter URL"
            value={formData.socialMedia.twitter}
            onChange={(e) => handleSocialMediaChange("twitter", e.target.value)}
            style={styles.input}
          />
        </div>

        <button type="submit" style={styles.button}>Submit Profile</button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Insert;
