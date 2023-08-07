import { ContactList } from "../views/contacts";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
		
			ContactList: [
				{
					img:"Avatar_url",
					title:"FullName",
					adress:"Carrer de la mala vida,69",
					phone:"645225235",
					email:"pericodelospalotes@gmail.com"


				},
			],
		
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},
			addContact(contact){
                 const store=getStore();
				 const ContactList=store.ContactList.concat(contact);
				 //Resset the store
				 setStore({ContactList:ContactList});
			},
			deleteContact(index){
				const store=getStore();
				const ContactList=store.ContactList.filter((c,i)=>{
					return index !==i
				});
				//Resset the store
		    	setStore({ContactList:ContactList});
		    },
			handleEditContact(index){
				const store=getStore();
				setEditingContact(index);
				//Resset the store
		    	setStore({ContactList:ContactList});
			}
	},
};
}
export default getState;
