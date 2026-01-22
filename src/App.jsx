import { useState } from 'react'

function App() {
	const [author, setAuthor] = useState("");
	const [title, setTitle] = useState("");
	const [body, setBody] = useState("");
	const [isPublic, setIsPublic] = useState(true);

	function updateAuthor(e) {
		const elemento = e.target;
		const newValue = elemento.value;
		setAuthor(newValue);
	}

	function updateTitle(e) {
		const elemento = e.target;
		const newValue = elemento.value;
		setTitle(newValue);
	}

	function updateNody(e) {
		const elemento = e.target;
		const newValue = elemento.value;
		setBody(newValue);
	}

	function updateIsPublic(e) {
		const elemento = e.target;
		const newValue = elemento.checked;
		setIsPublic(newValue);
	}


	return (
		<div>
			<h1>hello react world</h1>
			<ul>
				<li>author: {author}</li>
				<li>title: {title}</li>
				<li>body: {body}</li>
				<li>isPublic: {isPublic ? "si" : "no"}</li>
			</ul>
			<form>
				<input placeholder="author" value={author} onChange={updateAuthor} />
				<input placeholder="title" value={title} onChange={updateTitle} />
				<input placeholder="body" value={body} onChange={updateNody} />
				<input type="checkbox" checked={isPublic} onChange={updateIsPublic} />
			</form>
		</div>
	)
}

export default App
