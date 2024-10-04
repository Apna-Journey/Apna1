import React from "react";
import { Link } from "react-router-dom";
import Menu from "./Menu";

const Company = ({ item, deleteItem, i }) => {
  return (
    <div className="col-sm-6 col-md-4 col-lg-3">
      <div className="card">
        <div className="card-header lead d-flex justify-content-between">
          <span>
            {item.companyName.length > 15
              ? item.companyName.slice(0, 15) + "..."
              : item.companyName}
          </span>
          <span style={{ cursor: "pointer" }}>
            <Menu deleteItem={deleteItem} id={item._id} />
          </span>
        </div>
        <img
          src={`img/${(i % 7) + 1}.png`}
          className="card-img-top"
          alt="Company logo"
        />
        <div className="card-body">
          <p className="card-text fs-5">Website: {item.website}</p>
          <p className="card-text text-justify">
            Mission: {item.mission.slice(0, 80)}...
          </p>
        </div>
        <div className="card-footer text-body-secondary d-flex justify-content-between align-items-center">
          <div>Founded: {item.foundingYear}</div>
          <Link className="btn btn-secondary btn-sm" to={`/readmore/${item._id}`}>
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Company;