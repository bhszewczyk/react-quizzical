import React from 'react';

export default function Question(props) {
	return (
		<div className='question-container'>
			<h3>{props.item.question}</h3>
			<div className='answers-container'>
				{props.item.answers.map((answer, aIdx) => {
					return (
						<span
							key={aIdx}
							onClick={(e) => props.checkAnswerHandler(e, props.id, aIdx)}
							className={answer.isChecked ? 'checked' : ''}
						>
							{decodeURIComponent(answer.value)}
						</span>
					);
				})}
			</div>
		</div>
	);
}
