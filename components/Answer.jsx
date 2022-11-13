import React from 'react';

export default function Answer(props) {
	return (
		<span
			key={props.aIdx}
			onClick={(e) => props.checkAnswerHandler(e, props.id, props.aIdx)}
			className={props.answer.isChecked ? 'checked' : ''}
		>
			{decodeURIComponent(props.answer.value)}
		</span>
	);
}
