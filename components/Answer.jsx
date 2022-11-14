import React from 'react';

export default function Answer(props) {
	const gameClasses = props.answer.isChecked ? 'checked' : '';
	const answer = decodeURIComponent(props.answer.value);

	return (
		<div>
			{!props.showScoreEl ? (
				<span
					key={props.aIdx}
					onClick={(e) => props.checkAnswerHandler(e, props.id, props.aIdx)}
					className={gameClasses}
				>
					{answer}
				</span>
			) : (
				<span
					key={props.aIdx}
					className={
						answer === props.correctAnswer
							? gameClasses + ' correct'
							: gameClasses + ' incorrect'
					}
				>
					{answer}
				</span>
			)}
		</div>
	);
}
