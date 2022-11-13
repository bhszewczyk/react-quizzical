import React from 'react';
import './questions.css';
import './questions.css';

export default function Questions(props) {
	const questionEls = props.questions.map((item, qIdx) => {
		return (
			<div key={qIdx} id={qIdx} className='question-container'>
				<h3>{item.question}</h3>
				<div className='answers-container'>
					{item.answers.map((answer, aIdx) => {
						return (
							<span
								key={aIdx}
								onClick={(e) => props.checkAnswerHandler(e, qIdx, aIdx)}
								className={answer.isChecked ? 'checked' : ''}
							>
								{decodeURIComponent(answer.value)}
							</span>
						);
					})}
				</div>
			</div>
		);
	});

	return (
		<div className='game-container'>
			<div className='questions-container'>{questionEls}</div>
			<button
				className='btn btn-small'
				onClick={props.checkResults}
				disabled={props.answersChecked === 5 ? false : true}
			>
				Check answers
			</button>
		</div>
	);
}
