import { useState } from 'react'

const postIniziale = {
	author: "",
	title: "",
	body: "",
	isPublic: true,
};

function App() {

	const [post, setPost] = useState(postIniziale);

	function updateProperty(e) {
		const elemento = e.target;
		const newValue = elemento.value;
		const key = elemento.name;

		const nuovoPost = { ...post };
		nuovoPost[key] = newValue;
		setPost(nuovoPost);
	}

	function updateIsPublic(e) {
		const elemento = e.target;
		const newValue = elemento.checked;

		const nuovoPost = { ...post };
		nuovoPost.isPublic = newValue;
		setPost(nuovoPost);
	}

	return (
		<div>
			<h1>hello react world</h1>
			<ul>
				<li>author: {post.author}</li>
				<li>title: {post.title}</li>
				<li>body: {post.body}</li>
				<li>isPublic: {post.isPublic ? "si" : "no"}</li>
			</ul>
			<form>
				<input name="author" placeholder="author" value={post.author} onChange={updateProperty} />
				<input name="title" placeholder="title" value={post.title} onChange={updateProperty} />
				<input name="body" placeholder="body" value={post.body} onChange={updateProperty} />
				<input name="isPublic" type="checkbox" checked={post.isPublic} onChange={updateIsPublic} />
			</form>
		</div>
	)
}

export default App
