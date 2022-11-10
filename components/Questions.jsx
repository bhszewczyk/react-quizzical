import React, { useState } from 'react';
import './questions.css';
import Question from './Question';
import { nanoid } from 'nanoid';
import './questions.css';

export default function Questions({ questions } = props) {
	const questionEls = questions.map((item) => {
		return <Question question={item} key={nanoid()} />;
	});

	return (
		<div className='game-container'>
			<div className='questions-container'>{questionEls}</div>
			<button className='btn btn-small'>Check answers</button>
		</div>
	);
}
