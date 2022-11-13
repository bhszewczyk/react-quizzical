import React, { useState, useEffect } from 'react';

export default function Answer(props) {
	const [isSelected, setIsSelected] = useState(null);
	const [answer, setAnswer] = useState({});
	// const [target, setTarget] = useState(null);

	// useEffect(() => {
	// 	if (!target) {
	// 		return;
	// 	}

	// 	console.log(isSelected);
	// 	console.log(target);
	// 	passAnswer(target);
	// }, [isSelected]);

	// function checkAnswer(event) {
	// 	console.log('checkAnswer');
	// 	event.target.classList.toggle('checked');
	// 	setIsSelected((oldState) => !oldState);
	// 	setTarget(event.target);
	// }

	// function passAnswer(target) {
	// 	console.log(isSelected);
	// 	props.onclick(target, props.questionId, isSelected);
	// }

	useEffect(() => {
		setIsSelected(false);
	}, []);

	useEffect(() => {
		if (!isSelected) {
			return;
		}

		console.log(props.questionId);
		console.log(isSelected);
	}, [isSelected]);

	function selectAnswer(target) {
		setAnswer((oldAnswer) => {
			return {
				...oldAnswer,
				questionId: props.questionId,
				answer: target.innerText,
				isSelected: !isSelected,
			};
		});
		target.classList.toggle('checked');
	}

	console.log(answer);

	return (
		<div
			className='answer'
			onClick={(e) => {
				e.preventDefault();
				selectAnswer(e.target);
			}}
		>
			{decodeURIComponent(props.answer)}
		</div>
	);
}
