import React ,{useState,useEffect,useContext}from "react";
import { Context } from "../store/appContext";
import { Link,useParams } from "react-router-dom";

export const addContact=()=>{
  const {store,actions} = useContext(Context)
	const params = useParams();

  function submitForm(e){

		console.log(e);
		e.preventDefault()
		let dataForm = new FormData(e.target)
		let data = {}
		let inputs= ["img","FirstName","LastName","adress", "phone","email"]
		inputs.forEach(input => data[input]=dataForm.get(input))
		data.agenda_slug = "MyAgenda"
		console.log(data)
		// actions.addContacts(data)
		if( !params.id ){
			actions.addContacts(data)
		}
		else{
			actions.editContacts(data,params.id)
		}
	}

    return (
      <div>
          <form className="bg-secondary"onSubmit={submitForm}>
  <div className="mb-3 bg-dark opacity-25">
    <label for="avatar_URL" className="form-label">Profile Image</label>
    <input type="url" className="form-control" name="img"/>
  </div>
  <div className="mb-3 bg-dark  opacity-25">
    <label for="FullName" className="form-label">First Name and last name.</label>
    <div className="input-group mb-3">
      <input type="text" className="form-control" id="Name" placeholder="Your First Name." name="FirstName"/>
        <span className="input-group-text"></span>
      <input type="text" className="form-control" id="Surname" placeholder="Your Last Name" name="LastName"/>
    </div>
  </div>
  <div className="form-control bg-dark opacity-25">
  <label for="localization" className="form-label">Add your Contact:</label>
  <div className="data">
    <i className="fa-solid fa-location-dot"></i>
    <input type="text"  id="Localization" className="form-control" name="adress"/>
  </div>
  <div className="data">
     <i className="fa-solid fa-mobile-screen-button"></i>
     <input type="tel" id="telephone" className="form-control" name="phone"/>
  </div>
  <div className="data">
  <i class="fa-solid fa-at"></i>
  <input type="email" id="emailing" className="form-control" name="email"/>
  </div>
 </div>
  <button type="submit" className="btn btn-outline-success">+<i className="fa-solid fa-address-book">Add</i></button>
</form>
<Link to="/" className="text-center">
<button type="submit" className="btn btn-outline-success">
Contacts<i class="fa-solid fa-address-book"></i>
</button>
</Link>
</div>
    );
}