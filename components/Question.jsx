import React from 'react';
import Answer from './Answer';

export default function Question(props) {
	return (
		<div className='question-container'>
			<h3>{props.item.question}</h3>
			<div className='answers-container'>
				{props.item.answers.map((answer, aIdx) => {
					return (
						<Answer
							props
							key={aIdx}
							id={props.id}
							aIdx={aIdx}
							checkAnswerHandler={props.checkAnswerHandler}
							answer={answer}
						/>
					);
				})}
			</div>
		</div>
	);
}
