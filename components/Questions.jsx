import React, { useState } from 'react';
import './questions.css';
import Question from './Question';
import { nanoid } from 'nanoid';
import './questions.css';

export default function Questions() {
	const [questions, setQuestions] = useState([]);

	function fetchQuestions() {
		fetch('https://opentdb.com/api.php?amount=5&category=17&encode=url3986')
			.then((res) => res.json())
			.then((data) => {
				const response = data.results;
				console.log(JSON.stringify(response));
				let fetchedQuestions = [];

				response.forEach((item) => {
					const {
						question,
						correct_answer: correct,
						incorrect_answers: incorrect,
					} = item;

					console.log();

					const questionObj = {
						question: decodeURIComponent(question),
						correct: decodeURIComponent(correct),
						answers: [correct, ...incorrect],
					};

					fetchedQuestions.push(questionObj);
				});

				setQuestions(fetchedQuestions);
			});
	}

	React.useEffect(() => {
		fetchQuestions();
	}, []);

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
