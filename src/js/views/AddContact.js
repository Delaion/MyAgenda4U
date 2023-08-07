import React ,{useState,useEffect,useContext}from "react";
import { Context } from "../store/appContext";
export const addContact=()=>{
  const [newContact,setNewContact]=useState ("");
  const {store, actions}=useContext(Context);

    return (
        <form className="bg-secondary"onChange={e=>setNewContact(e.target.value)}>
  <div className="mb-3 bg-dark opacity-25">
    <label for="avatar_URL" className="form-label">Profile Image</label>
    <input type="url" className="form-control" id="img"/>
  </div>
  <div className="mb-3 bg-dark  opacity-25">
    <label for="FullName" className="form-label">First Name and last name.</label>
    <div className="input-group mb-3" id="title">
      <input type="text" className="form-control" placeholder="Your First Name." aria-label="FirstName"/>
        <span className="input-group-text"></span>
      <input type="text" className="form-control" placeholder="Your Last Name" aria-label="LastName"/>
    </div>
  </div>
  <div className="form-control bg-dark opacity-25">
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
  <button type="submit" onClick={()=>{actions.addContact(newContact)}} className="btn btn-success">+<i className="fa-solid fa-address-book"></i>Add</button>
</form>
    )
}