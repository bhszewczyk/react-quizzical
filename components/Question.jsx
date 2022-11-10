import React from 'react';
import './question.css';

export default function Question(props) {
	const allAnswers = props.question.answers;
	console.log(allAnswers);
	const allAnswersEls = allAnswers.map((answer) => (
		<div className='answer'>{decodeURIComponent(answer)}</div>
	));

	return (
		<div className='question-container'>
			<h3 className='question'>{props.question.question}</h3>
			<div className='answers'>{allAnswersEls}</div>
		</div>
	);
}
