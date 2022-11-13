import React, { useState, useEffect } from 'react';
import './App.css';
import Start from '../components/Start';
import Questions from '../components/Questions';

function App() {
	const [isPlaying, setIsPlaying] = useState(false);
	const [questions, setQuestions] = useState([]);
	const [userAnswers, setUserAnswers] = useState([]);

	function toggleCheck(target, id, answerChecked) {
		const answer = target.innerText;
		console.log(target, id, answerChecked);
		setUserAnswers((oldAnswers) => {
			return [
				...oldAnswers,
				{
					questionId: id,
					userAnswer: answer,
				},
			];
		});
	}

	// console.log(userAnswers);

	function fetchQuestions() {
		fetch('https://opentdb.com/api.php?amount=5&category=17&encode=url3986')
			.then((res) => res.json())
			.then((data) => {
				const response = data.results;
				// console.log(JSON.stringify(response));
				let fetchedQuestions = [];

				response.forEach((item, idx) => {
					const {
						question,
						correct_answer: correct,
						incorrect_answers: incorrect,
					} = item;

					const questionObj = {
						question: decodeURIComponent(question),
						correct: decodeURIComponent(correct),
						answers: [correct, ...incorrect],
						index: idx,
					};

					fetchedQuestions.push(questionObj);
				});

				setQuestions(fetchedQuestions);
			});
	}

	React.useEffect(() => {
		fetchQuestions();
	}, []);

	function startPlaying() {
		setIsPlaying(() => true);
	}

	function checkResults() {
		console.log('check results');
	}

	// function handleClick(e) {
	// 	e.target.classList.toggle('checked');
	// 	// setUserAnswers((oldState) => {
	// 	// });
	// }

	return (
		<div className='app'>
			{!isPlaying ? (
				<Start startPlaying={startPlaying} />
			) : (
				<Questions
					questions={questions}
					checkResults={checkResults}
					// handleClick={handleClick}
					toggleCheckAnswer={toggleCheck}
				/>
			)}
		</div>
	);
}

export default App;
