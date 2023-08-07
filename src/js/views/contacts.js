import React ,{useState,useEffect,useContext}from "react";
import { Context } from "../store/appContext";

export const ContactList=()=>{

  const {store, actions}=useContext(Context);
    return ( 
       <div className="bg-dark">
            <div className="bg-secondary bg-opacity 25 text-center">
        <h2 className="text-light">My Contacts</h2>
        <input className="bg-dark bg-opacity-5 text-light" type="text"onChange={e=>setNewContact(e.target.value)}/>
        <button type="submit" onClick={()=>{actions.addContact(newContact)}} className="btn btn-outline-success text-light">+<i className="fa-solid fa-address-book"></i>Add</button>
        {store.contactList.map((contact,index)=>(
          <p>{contact.name}</p>
        ))}
       </div>
       </div>
    );

};



