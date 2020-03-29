import React, { useState } from "react";

export default function List() {
	const [list, setList] = useState([]);

	const handleEnter = e => {
		console.log(e.target.value);

		const { key, target } = e;
		if (key === "Enter") {
			setList(list => [...list, target.value]);
			// target.value = "";
		}
	};

	const createTasks = list => {
		return (
			<li
				className="input-group-text"
				id="inputGroup-sizing-sm"
				key={list.key}>
				{list}
			</li>
		);
	};

	let listItems = list.map(createTasks);

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
			{listItems}
		</ul>
	);
}
