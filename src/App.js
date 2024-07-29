import React, { useState } from 'react'
import PostList from './components/PostList'
import MyInput from './UI/Input/MyInput'
import MyButton from './UI/Button/MyButton'

function App() {
	const [posts, setPosts] = useState([
		{ id: 1, title: 'JavaScript 1', body: 'Description' },
		{ id: 2, title: 'JavaScript 2', body: 'Description' },
		{ id: 3, title: 'JavaScript 3', body: 'Description' },
	])

	const [titlePost, setTitlePost] = useState('')
	const [bodyPost, setBodyPost] = useState('')

	function addNewPost() {
		const newPost = {
			id: Date.now(),
			title: titlePost,
			body: bodyPost
		}
		setPosts([...posts, newPost])
		setTitlePost('')
		setBodyPost('')
	}

	return (
		<div className='App'>
			<MyInput
				placeholder='Название поста'
				value={titlePost}
				onChange={e => setTitlePost(e.target.value)}
			/>
			<MyInput
				placeholder='Описание поста'
				value={bodyPost}
				onChange={e => setBodyPost(e.target.value)}
			/>
			<MyButton onClick={addNewPost}>Создать пост</MyButton>
			<PostList posts={posts} />
		</div>
	)
}

export default App
