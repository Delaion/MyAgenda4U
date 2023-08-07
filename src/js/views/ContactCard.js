import React ,{useState,useEffect,useContext}from "react";
import { Context } from "../store/appContext";

export const Contactcard=()=>{
    const {store, actions}=useContext(Context);
( <div className="card mb-3 bg-dark" style="max-width: 540px;">
    <h1>Your Contact.</h1>
   <div className="row g-0 bg-dark text-light">
      <div className="col-md-4">
        <img src="..." className="img-fluid rounded-start" alt="..."/>
           {store.img}
      </div>
     <div className="col-md-8">
       <div className="card-body bg-secondary opacity-10%">
          <h5 className="card-title">{store.title}</h5>
          <p className="card-text"><i class="fa-solid fa-location-dot"></i>{store.adress}</p>
          <p className="card-text"><small className="text-muted"><i class="fa-solid fa-mobile-screen-button"></i>{store.phone}</small></p>
          <p className="card-text"><small className="text-muted"><i class="fa-solid fa-at"></i>{store.email}</small></p>
       </div>
     </div>
   </div>
  </div>
);
}