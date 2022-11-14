import React from 'react';
import './questions.css';
import Question from './Question';

export default function Questions(props) {
	const questionEls = props.questions.map((item, qIdx) => {
		return (
			<Question
				key={qIdx}
				id={qIdx}
				item={item}
				checkAnswerHandler={props.checkAnswerHandler}
				showScoreEl={props.showScoreEl}
				correctAnswers={props.correctAnswers}
			/>
		);
	});

	return (
		<div className='game-container'>
			<div className='questions-container'>{questionEls}</div>
			{props.showScoreEl ? (
				''
			) : (
				<button
					className='btn btn-small'
					onClick={props.checkResults}
					disabled={props.answersChecked === 5 ? false : true}
				>
					Check answers
				</button>
			)}
		</div>
	);
}
