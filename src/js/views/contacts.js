import React, { useContext, useEffect, useRef } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Contact = () => {
  const { store, actions } = useContext(Context);
  const idDeleteContact = useRef(null);

  useEffect(() => {
    actions.getContacts();
  }, []);

  const deleteContact = (id) => {
    idDeleteContact.current = id; // Almacenar el ID del contacto en la referencia
    actions.deleteContacts(id);
  };

    return ( 
       <div className="bg-dark">
         <div className="bg-secondary bg-opacity 25 text-center">
             <h2 className="text-light">My Contacts</h2>
             <Link to="/addContact">
             <button type="submit" className="btn btn-outline-success text-light">+<i className="fa-solid fa-address-book"></i>Add</button>
             </Link>   
           </div>
           {store.contacts && store.contacts.length > 0 && store.contacts.map((contact, index) => (
     	<div key={index} className="card row g-0 flex-row py-2 mx-3">
         <div className="col-md-4  pt-3 d-flex justify-content-center">
        	<img src={store.contact.img} className="rounded-circle" style ={{ height : "150px", width: "150px"}} alt="..."/>
         </div>
         <div className="col-md-2 pt-3">
		  	 <Link to={"/edit/" + contact.id}>
           <i className="fas fa-pencil-alt me-4">
           </i>
         </Link>
         <i data-bs-toggle="modal" data-bs-target="#delete" className="fas fa-trash-alt"
                onClick={() => (idDeleteContact.current = contact.id)}
            ></i>
         </div>
         <div className="modal" id="delete" tabIndex="-1">
              <div className="modal-dialog">
           		<div className="modal-content">
					<div className="modal-header">
      					<h5 className="modal-title">You!!!....Wait..wait broh, u sure?</h5>
        				<button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      				</div>
      				<div className="modal-body">
       					<p>U good? U going to delete the number 1?!
                 <i class="fa-solid fa-face-frown-open"></i>
                </p>
		  			</div>
            <div className="modal-footer">
            			<button type="button" className="btn btn-outline-success text-light" data-bs-dismiss="modal">Nnope!
                  <i class="fa-solid fa-face-grin-beam-sweat"></i></button>
            			<button onClick={() => deleteContact(idDeleteContact.current)} type="button" className="btn btn-outline-danger text-light"
            			data-bs-dismiss="modal" > Yeeap!
                  <i class="fa-solid fa-poo"></i>
                  </button>
                  	</div>
                </div>
              </div>
            </div>
        </div>
        ))}
    </div>
         );
      };



