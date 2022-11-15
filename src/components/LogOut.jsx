import React from "react";
import { Link } from "react-router-dom";


const LogOut = () => {
  return (
    <>
  
      {/* <!-- Button trigger modal --> */}
      <button
        type="button"
        className="btn btn-outline-primary ms-auto"
        data-bs-toggle="modal"
        data-bs-target="#logoutModal"
      >
        <span className="fa fa-sign-in me-1"></span> Logout
      </button>

      {/* <!-- Modal --> */}
      <div className="modal fade"
    id="logoutModal"
    tabIndex="-1"
    labelled="exampleModalLabel"
    aria-hidden="true">
   
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title">LogOut</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        <p>Want to LogOut?</p>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
       <Link to="/" className="nav-link"> <button className="btn btn-primary">Yes</button></Link>
     
      </div>
    </div>
  </div>
</div>
    </>
  );
};

export default LogOut;
