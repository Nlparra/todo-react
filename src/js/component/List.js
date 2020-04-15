import React, { useState, useEffect } from "react";
const url = "https://assets.breatheco.de/apis/fake/todos/user/Nlparra";

export default function List() {
	const [list, setList] = useState([]);
	console.log("joao", list);

	useEffect(() => {
		fetch(url)
			.then(res => res.json())
			.then(data => {
				// setList(data);
				console.log("Get", data), setList(data);
			})
			.catch(err => {
				console.log(err);
			});
	}, []);

	const handleEnter = e => {
		console.log(e.target.value);

		const { key, target } = e;
		if (key === "Enter") {
			setList(list => [...list, target.value]);
			// target.value = "";
		}
	};

	const handleDelete = i => {
		let { target } = i;
		Array.from(target.parentNode.children).forEach(item => {
			if (item.id === target.id) {
				target.removeChild();
			}
		});
	};

	// const createTasks = list => {
	// 	return (
	// <li
	// 	className="input-group-text"
	// 	id="inputGroup-sizing-sm"
	// 	key={list.key}>
	// 	{list}
	// 	<button
	// 		onClick={handleDelete}
	// 		type="button"
	// 		className="close ml-auto"
	// 		aria-label="Close">
	// 		<span aria-hidden="true">&times;</span>
	// 	</button>
	// </li>
	// 	);
	// };

	console.log(list);
	return (
		<ul className="list-group">
			<li className="input-group-text" id="inputGroup-sizing-sm">
				<input
					type="text"
					className="form-control"
					aria-label="Sizing example input"
					aria-describedby="inputGroup-sizing-sm"
					placeholder="What needs to be done"
					onKeyDown={handleEnter}
				/>
			</li>

			{list &&
				list.map((e, index) => {
					return (
						<li
							className="input-group-text"
							id="inputGroup-sizing-sm"
							key={list.key}>
							{e.label}
							<button
								onClick={handleDelete}
								type="button"
								className="close ml-auto"
								aria-label="Close">
								<span aria-hidden="true">&times;</span>
							</button>
						</li>
					);
				})}
		</ul>
	);
}
