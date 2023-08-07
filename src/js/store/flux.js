

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
		
			contactList: [
				
			],
		
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {	
				fetch("https://jsonplaceholder.typicode.com/users/")
				.then(response=>response.json())
				.then(data => setStore({ contactList: data}))	
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
			addContact:(contact)=>{
                 const store=getStore();
				 const contactList=store.contactList.concat(contact);
				 //Resset the store
				 setStore({contactList:contactList});
			},
		    deleteContact:(index)=>{
				const store=getStore();
				const contactList=store.contactList.filter((c,i)=>{
					return index !==i
				});
				//Resset the store
		    	setStore({contactList:contactList});
		    },
	},
};
}
export default getState;
