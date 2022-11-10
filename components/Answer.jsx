import React, { useState } from 'react';

export default function Answer(props) {
	const [isSelected, setIsSelected] = useState(false);
	function checkAnswer() {
		setIsSelected((oldState) => !oldState);
	}

	console.log(isSelected);

	return (
		<div className='answer' onClick={checkAnswer}>
			{decodeURIComponent(props.answer)}
		</div>
	);
}
