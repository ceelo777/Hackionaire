import React, { useState } from "react";
import "./Game.css";
import ReactDOM, { render } from "react-dom";

export default function Game() {
  const questions = [
    {
      questionText: "What is the capital of France?",
      answerOptions: [
        { answerText: "New York", isCorrect: false },
        { answerText: "London", isCorrect: false },
        { answerText: "Paris", isCorrect: true },
        { answerText: "Dublin", isCorrect: false },
      ],
    },
    {
      questionText: "Who is CEO of Tesla?",
      answerOptions: [
        { answerText: "Jeff Bezos", isCorrect: false },
        { answerText: "Elon Musk", isCorrect: true },
        { answerText: "Bill Gates", isCorrect: false },
        { answerText: "Tony Stark", isCorrect: false },
      ],
    },
    {
      questionText: "The iPhone was created by which company?",
      answerOptions: [
        { answerText: "Apple", isCorrect: true },
        { answerText: "Intel", isCorrect: false },
        { answerText: "Amazon", isCorrect: false },
        { answerText: "Microsoft", isCorrect: false },
      ],
    },
    {
      questionText: "How many Harry Potter books are there?",
      answerOptions: [
        { answerText: "1", isCorrect: false },
        { answerText: "4", isCorrect: false },
        { answerText: "6", isCorrect: false },
        { answerText: "7", isCorrect: true },
      ],
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className="game-container">
      {showScore ? (
        <div className="score-section"></div>
      ) : (
        <div>
          <div className="question-section">
            {questions[currentQuestion].questionText}
          </div>
          <div className="answer-section">
            <div className="answer-row">
              <div>
                <button
                  onClick={() =>
                    handleAnswerOptionClick(
                      questions[currentQuestion].answerOptions[0].isCorrect
                    )
                  }
                >
                  {questions[currentQuestion].answerOptions[0].answerText}
                </button>
              </div>
              <div>
                <button
                  onClick={() =>
                    handleAnswerOptionClick(
                      questions[currentQuestion].answerOptions[1].isCorrect
                    )
                  }
                >
                  {questions[currentQuestion].answerOptions[1].answerText}
                </button>
              </div>
            </div>
            <div className="answer-row">
              <div>
                <button
                  onClick={() =>
                    handleAnswerOptionClick(
                      questions[currentQuestion].answerOptions[2].isCorrect
                    )
                  }
                >
                  {questions[currentQuestion].answerOptions[2].answerText}
                </button>
              </div>
              <div>
                <button
                  onClick={() =>
                    handleAnswerOptionClick(
                      questions[currentQuestion].answerOptions[3].isCorrect
                    )
                  }
                >
                  {questions[currentQuestion].answerOptions[3].answerText}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
