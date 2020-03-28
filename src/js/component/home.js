import React from "react";
import List from "./List";

//create your first component
export function Home() {
	return (
		<div className="container">
			<h1>TO DO List</h1>
			<List />
		</div>
	);
}
