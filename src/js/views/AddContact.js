import React ,{useState,useEffect,useContext}from "react";
import { Context } from "../store/appContext";
export const addContact=()=>{
    return (
        <form>
  <div className="mb-3">
    <label for="exampleInputURL" className="form-label">Profile Image</label>
    <input type="url" className="form-control" id="avatarURL"/>
  </div>
  <div className="mb-3">
    <label for="Full_Name" className="form-label">First Name and last name.</label>
    <div className="input-group mb-3" id="FullName">
      <input type="text" className="form-control" placeholder="Your First Name." aria-label="FirstName"/>
        <span className="input-group-text"></span>
      <input type="text" className="form-control" placeholder="Your Last Name" aria-label="LastName"/>
    </div>
  </div>
  <div className="form-control">
  <label for="localization" className="form-label">Contact:</label>
  <div className="data">
    <i className="fa-solid fa-location-dot"></i>
    <input type="text" className="form-control" id="adress"/>
  </div>
  <div className="data">
     <i className="fa-solid fa-mobile-screen-button"></i>
     <input type="tel" className="form-control" id="phone"/>
  </div>
  <div className="data">
  <i class="fa-solid fa-at"></i>
  <input type="email" className="form-control" id="email"/>
  </div>
 </div>
  <button type="submit" className="btn btn-success">+<i className="fa-solid fa-address-book"></i>Add</button>
</form>
    )
}