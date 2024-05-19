import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MdDelete, MdOutlineBrowserUpdated } from "react-icons/md";
import { CiMenuKebab } from "react-icons/ci";
const Menu = ({deleteItem,id}) => {
  
  const [show, setShow] = useState(false);
  return (
    <>
      <CiMenuKebab onClick={()=>setShow(!show)} />
      {show ? (
        <div className="card position-absolute" style={{ zIndex: "2",left:"-20px",top:"30px" }}>
          <ul className="list-group list-group-flush">
            <li className="list-group-item" onClick={()=>{deleteItem(id);setShow(!show);}}>
              <MdDelete />
            </li>
            <li className="list-group-item" onClick={()=>setShow(!show)} >
              <Link to={`/update/${id}`}><MdOutlineBrowserUpdated /></Link>
            </li>
          </ul>
        </div>
      ) : null}
    </>
  );
};

export default Menu;
