import React from 'react';
import './question.css';
import Answer from './Answer';
import { nanoid } from 'nanoid';

export default function Question(props) {
	const allAnswers = props.question.answers;
	const allAnswersEls = allAnswers.map((answer) => (
		<Answer answer={answer} key={nanoid()} />
	));

	return (
		<div className='question-container'>
			<h3 className='question'>{props.question.question}</h3>
			<div className='answers' onClick={props.handleClick}>
				{allAnswersEls}
			</div>
		</div>
	);
}
