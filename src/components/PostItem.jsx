import React from 'react'
import '../styles/App.css'
import MyButton from '../UI/Button/MyButton'

export default function PostItem(props) {
	return (
		<div className='post'>
			<div className='post__content'>
				<h1>
					{props.number}. {props.post.title}
				</h1>
				<p>{props.post.body}</p>
			</div>
			<div className='post__btns'>
				<MyButton>Удалить пост</MyButton>
			</div>
		</div>
	)
}
