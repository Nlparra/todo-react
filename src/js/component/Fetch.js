import { List } from "./List";

const url = "https://assets.breatheco.de/apis/fake/todos/user/Nlparra";

const getState = ({ getStore, setStore }) => {
	return {
		store: {
			List: []
		},
		actions: {
			getList() {
				fetch(url)
					.then(res => res.json())
					.then(data => {
						console.log("Get List", data), setStore({ List: data });
					});
			},

        }
    };
};
			// addList(name) {
			// 	fetch(url, {
			// 		method: "Post",
			// 		headers: { "Content-type": "application/json" },
			// 		body: JSON.stringify({
			// 			// full_name: name,
			// 			agenda_slug: ""
			// 		})
			// 	}).then(() => {
			// 		fetch(url + "")
			// 			.then(res => res.json())
			// 			.then(data => {
			// 				console.log("Add List", data),
			// 					setStore({
			// 						Contact: data
			// 					});
			// 			})
			// 			.catch(e => console.error(e));
			// 	});
			// },
			// editContact(id, name) {
			// 	fetch(url + id, {
			// 		method: "Put",
			// 		headers: { "Content-type": "application/json" },
			// 		body: JSON.stringify({
			// 			full_name: name,
			// 			agenda_slug: ""
			// 		})
			// 	}).then(() => {
			// 		fetch(url + "")
			// 			.then(res => res.json())
			// 			.then(results => {
			// 				console.log("edit", results),
			// 					setStore({
			// 						List: results
			// 					});
			// 			})
			// 			.catch(err => console.error(err));
			// 	});
			// },
			// deleteList(id) {
			// 	fetch(url + id, {
			// 		method: "delete"
			// 	}).then(() => {
			// 		fetch(url + "")
			// 			.then(res => res.json())
			// 			.then(results => {
			// 				console.log("delete", results);
			// 				setStore({
			// 					List: results
			// 				});
			// 			})
			// 			.catch(e => console.error(e));
			// 	});
			// }

export default getState;



