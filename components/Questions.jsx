import React, { useState } from 'react';
import './questions.css';
import Question from './Question';
import { nanoid } from 'nanoid';
import './questions.css';

export default function Questions({
	questions,
	checkResults,
	handleClick,
	toggleCheckAnswer,
	answerChecked,
} = props) {
	const questionEls = questions.map((item) => {
		return (
			<Question
				question={item}
				key={nanoid()}
				id={item.index}
				toggleCheckAnswer={toggleCheckAnswer}
				answerChecked={answerChecked}
			/>
		);
	});

	return (
		<div className='game-container'>
			<div className='questions-container'>{questionEls}</div>
			<button className='btn btn-small' onClick={checkResults}>
				Check answers
			</button>
		</div>
	);
}
