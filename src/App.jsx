import React, { useState, useEffect } from 'react';
import './App.css';
import Start from '../components/Start';
import Questions from '../components/Questions';
import Score from '../components/Score';
import BtnRestart from '../components/BtnRestart';

function App() {
	const [isPlaying, setIsPlaying] = useState(false);
	const [questions, setQuestions] = useState([]);
	const [answersChecked, setAnswersChecked] = useState(0);
	const [showScoreEl, setShowScoreEl] = useState(false);
	const [score, setScore] = useState(0);

	function fetchQuestions() {
		fetch('https://opentdb.com/api.php?amount=5&category=17&encode=url3986')
			.then((res) => res.json())
			.then((data) => {
				const response = data.results;
				let fetchedQuestions = [];

				response.forEach((item, idx) => {
					const {
						question,
						correct_answer: correct,
						incorrect_answers: incorrect,
					} = item;

					const randomIdx = Math.floor(Math.random() * incorrect.length);
					let randomizedAnswers = [...incorrect];
					randomizedAnswers.splice(randomIdx, 0, correct);

					const answers = randomizedAnswers.map((answ) => {
						return {
							value: answ,
							isChecked: false,
						};
					});

					const questionObj = {
						question: decodeURIComponent(question),
						correct: decodeURIComponent(correct),
						answers: answers,
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

	React.useEffect(() => {
		setAnswersChecked(() => {
			let count = 0;

			questions.forEach((question) => {
				let temp = question.answers.filter((answer) => answer.isChecked).length;
				count += temp;
			});

			return count;
		});
	}, [questions]);

	function startPlaying() {
		setIsPlaying(() => true);
	}

	function checkAnswerHandler(e, questionId, answerId) {
		e.preventDefault();

		setQuestions((oldState) => {
			let newState = [...oldState];

			newState[questionId].answers.map((answer, id) => {
				if (id === answerId) {
					answer.isChecked = !answer.isChecked;
				} else {
					answer.isChecked = false;
				}
			});

			return newState;
		});
	}

	function scorePlayer(correctAnsw, userAns) {
		// console.log(correctAnsw, userAns);
		setScore(() => {
			let newScore = 0;
			for (let i = 0; i < correctAnsw.length; i++) {
				if (correctAnsw[i] === userAns[i]) {
					newScore++;
				} else {
					newScore;
				}
			}
			return newScore;
		});
	}

	function checkResults() {
		const correctAnswers = questions.map((question) => question.correct);
		const userAnswers = [];

		questions.map((q) =>
			q.answers.map((a) => {
				if (a.isChecked) {
					userAnswers.push(decodeURIComponent(a.value));
				}
			})
		);

		setShowScoreEl(true);
		scorePlayer(correctAnswers, userAnswers);
	}

	function resetGame() {
		fetchQuestions();
		setIsPlaying(() => false);
		setShowScoreEl(() => false);
	}

	return (
		<div className='app'>
			{!isPlaying ? (
				<Start startPlaying={startPlaying} />
			) : !showScoreEl ? (
				<Questions
					questions={questions}
					checkResults={checkResults}
					checkAnswerHandler={checkAnswerHandler}
					answersChecked={answersChecked}
				/>
			) : (
				<div>
					<Score score={score} questionsNum={questions.length} />
					<BtnRestart onclick={resetGame} />
				</div>
			)}
		</div>
	);
}

export default App;
