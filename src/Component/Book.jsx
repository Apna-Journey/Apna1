import React from "react";
import { Link } from "react-router-dom";
import Menu from "./Menu";
const Book = ({ item, i, deleteItem }) => {
  return (
    <div className="col-sm-6 col-md-4 col-lg-3">
      <div className="card">
        <div className="card-header lead d-flex justify-content-between">
        <span>Book: {item.title.length > 15 ? item.title.slice(0, 15) + '...' : item.title}</span>
          <span style={{ cursor: "pointer",position:"relative" }}>
            <Menu deleteItem={deleteItem} id={item.id} />
          </span>
        </div>
        <img
          src={`img/${(i % 7) + 1}.png`}
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <p className="card-text fs-5">Author: {item.author}</p>
          <p className="card-text text-justify">About: {item.descrip.slice(0,90)}...</p>
        </div>
        <div className="card-footer text-body-secondary d-flex justify-content-between align-items-center">
          <div>Price : {item.price}</div>
          <Link className="btn btn-secondary btn-sm" to={`/readmore/${item.id}`}>Read More</Link>
        </div>
      </div>
    </div>
  );
};

export default Book;
