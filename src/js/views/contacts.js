import React ,{useState,useEffect,useContext}from "react";
import { Context } from "../store/appContext";

export const ContactList=()=>{
  const {store, actions}=useContext(Context);
    return ( 
       <div className="bg-secondary opacity 10% text-center">
        <h2 className="text-light">My Contacts</h2>
        {store.ContactList.map(contact=>(
          <li>{contact}</li>
        ))}
       </div>
    );

};



