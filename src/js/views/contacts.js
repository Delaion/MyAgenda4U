import React ,{useState,useEffect,useContext}from "react";
import { Context } from "../store/appContext";

export const ContactList=()=>{
    return (
        <div className="card mb-3 bg-dark" style="max-width: 540px;">
            <h1>Your Contact list.</h1>
  <div className="row g-0">
    <div className="col-md-4">
      <img src="..." className="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">Hello again</h5>
        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
</div>
    )
}



