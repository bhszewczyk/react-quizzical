import React, { useState } from 'react';
import './question.css';
import Answer from './Answer';
import { nanoid } from 'nanoid';

export default function Question(props) {
	const allAnswers = props.question.answers;
	const allAnswersEls = allAnswers.map((answer) => {
		return (
			<Answer
				answer={answer}
				key={nanoid()}
				onclick={props.toggleCheckAnswer}
				questionId={props.id}
				answerChecked={props.answerChecked}
			/>
		);
	});

	return (
		<div className='question-container'>
			<h3 className='question'>{props.question.question}</h3>
			<div className='answers'>{allAnswersEls}</div>
		</div>
	);
}
