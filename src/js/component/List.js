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

	const handleDelete = i => {
        let { target } = i;
        Array.from(target.parentNode.children).forEach(item => {
			if (item.id === target.id) {
                target.removeChild(); 
            };
        }
    };

	const createTasks = list => {
		return (
			<li
				className="input-group-text"
				id="inputGroup-sizing-sm"
				key={list.key}>
				{list}
				<button
					onClick={handleDelete}
					type="button"
					className="close ml-auto"
					aria-label="Close">
					<span aria-hidden="true">&times;</span>
				</button>
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