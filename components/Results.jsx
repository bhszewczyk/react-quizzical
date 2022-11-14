import React from 'react';
import Answer from './Answer';

export default function Results(props) {
	console.log(props.showScore);
	return (
		<div className='question-container'>
			<h3>{props.item.question}</h3>
			<div className='answers-container'>
				{props.item.answers.map((answer, aIdx) => {
					return (
						<Answer
							key={aIdx}
							id={props.id}
							aIdx={aIdx}
							checkAnswerHandler={props.checkAnswerHandler}
							answer={answer}
							showScore={props.showScore}
						/>
					);
				})}
			</div>
		</div>
	);
}
