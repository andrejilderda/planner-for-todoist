import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { showQuickAdd } from "@doist/todoist-quickadd";

function Todoist() {
	const content = "Default value";

	useEffect(() => {
		if (content) {
			showQuickAdd({
				content: content,
				onLoadingError: () =>
					alert(
						"Could not load Todoist Quick Add. Please try again later."
					),
				date: "today",
			});
		}
	}, [content]);

	return null;
}

function App() {
	return (
		<div className="App">
			<Todoist />
		</div>
	);
}

export default App;
