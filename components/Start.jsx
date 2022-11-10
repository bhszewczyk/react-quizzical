import React from 'react';
import './start.css';

export default function Start(props) {
	return (
		<div className='start-container'>
			<h1>Quizzical</h1>
			<p className='quiz-description'>
				Answer 5 random questions to test your knowledge.
			</p>
			<button className='btn btn-start' onClick={props.startPlaying}>
				Start quiz
			</button>
		</div>
	);
}
