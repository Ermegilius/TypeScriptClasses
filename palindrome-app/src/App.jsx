import { useState } from "react";
import "./App.css";

function App() {
  const word = document.getElementById('word').value;
function checker() {
  if 
}

	return (
		<>
			<h1>Palindrom</h1>
			<form action="submit">
				<input type="text" id="word" value={word}/>
				<button>Check it!</button>
			</form>
			<p className="read-the-docs">Click on the Vite and React logos to learn more</p>
		</>
	);
}

export default App;
