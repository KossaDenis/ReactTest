import React, { useState } from 'react'

export default function Counter() {

	const [like, setLike] = useState(0)

	function incriment() {
		setLike(like + 1)
	}

	function decriment() {
		setLike(like - 1)
	}

	return (
		<div>
			<h1>{like}</h1>
			<button onClick={incriment}>incriment</button>
			<button onClick={decriment}>decriment</button>
		</div>
	)
}
