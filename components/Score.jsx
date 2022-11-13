import React from 'react';
import './score.css';

export default function Score(props) {
	return (
		<div className='score-container'>
			Your score is <span>{props.score}</span>/{props.questionsNum}
		</div>
	);
}
