import React, { useState, useEffect } from 'react';
import './App.css';
import Start from '../components/Start';
import Questions from '../components/Questions';

function App() {
	const [isPlaying, setIsPlaying] = useState(false);
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

	function startPlaying() {
		setIsPlaying(() => true);
	}

	console.log(isPlaying);

	return (
		<div className='app'>
			{!isPlaying ? (
				<Start startPlaying={startPlaying} />
			) : (
				<Questions questions={questions} />
			)}
		</div>
	);
}

export default App;
