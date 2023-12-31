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
			contacts: [
				{
					id: 1,
					name: "Ana García S.",
					email: "ana@email.com",
					phone: "5555-5555",
					address: "Nosara, Guanacaste"
				},
				{
					id :2,
					name: "Daniel Mendoza Q.",
					email: "daniel@email.com",
					phone: "6666-6666",
					address: "Cahuita, Limón"
				}
			],

			contactDeleted: null,
			showModal: false,
		},

		actions: {

				// Adding new contact to the list
				addContact: (contact) =>{
					// Get from store
					let contactList = getStore().contacts;
					const newContact = {id: contactList.length +1, ...contact};
					// Adds one more contact to the list
					setStore({ contacts: [...contactList, newContact]});
				},

				// Check empty fields in input form when adding
				checkFormFields: (newContact) =>{
					const {name, email, phone, address} = newContact
					if (name && email && phone && address) {
						getActions().addContact(newContact);
					}
				},

				// Editing contact from the list
				editContact: (id, editedContact) =>{
					// Get from store
					let contactList = getStore().contacts;
					// Find contact index and update
					const contactIndex = contactList.findIndex(contact => contact.id === id);
					if (contactIndex !== -1){
						const editedContacts = [...contactList];
						editedContacts[contactIndex] = {id, ...editedContact};
						setStore({ contacts: editedContacts});
					}
				},


				// Deleting contact
				deleteContact: (contact) =>{
					// Get from store
					let contactList = getStore().contacts;
					// Keep all except current id
					setStore({contacts: contactList.filter((item) => item !== contact)})
					getActions().closeDeleteModal();
				},
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
			}
		}
	};
};

export default getState;

