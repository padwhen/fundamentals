"use client"

import { useState } from "react";

type Answer = {
    answer: string;
    isCorrect: boolean;
}

type Question = {
    question: string;
    answers: Answer[]
}

const QUESTIONS: Question[] = [
    {
      question: "What is the capital of France?",
      answers: [
        { answer: "Paris", isCorrect: true },
        { answer: "London", isCorrect: false },
        { answer: "Berlin", isCorrect: false },
        { answer: "Madrid", isCorrect: false },
      ],
    },
    {
      question: "What is the capital of Germany?",
      answers: [
        { answer: "Berlin", isCorrect: true },
        { answer: "Paris", isCorrect: false },
        { answer: "Madrid", isCorrect: false },
        { answer: "London", isCorrect: false },
      ],
    },
    {
      question: "What is the capital of Italy?",
      answers: [
        { answer: "Rome", isCorrect: true },
        { answer: "Paris", isCorrect: false },
        { answer: "Madrid", isCorrect: false },
        { answer: "London", isCorrect: false },
      ],
    },
  ];

export default function QuizApp() {
    const [score, setScore] = useState(0)
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
    const [selectedAnswerIndex, setSelectedAnswerIndex] = useState<number | null>(null)
    const currentQuestion = QUESTIONS[currentQuestionIndex]
    const isQuizFinished = currentQuestionIndex === QUESTIONS.length

    function handleAnswerClicked(answerIndex: number) {
        setSelectedAnswerIndex(answerIndex)
    }

    function handleSubmit() {
        const answer = currentQuestion.answers[selectedAnswerIndex!]
        if (answer.isCorrect) {
            setScore(score + 1)
        }

        setSelectedAnswerIndex(null)
        setCurrentQuestionIndex(currentQuestionIndex + 1)
    }

    function restart() {
        setScore(0)
        setCurrentQuestionIndex(0)
        setSelectedAnswerIndex(null)
    }

    function Quiz() {
        return (
            <>
                <p>
                    Question {currentQuestionIndex + 1} of {QUESTIONS.length}
                </p>

                <h1 className="text-2xl font-bold">
                    {currentQuestion.question}
                </h1>

                <div className="grid grid-cols-2 gap-4">
                    {currentQuestion.answers.map((answer, answerIndex) => (
                        <button
                            className={`p-2 rounded-md text-black ${selectedAnswerIndex === answerIndex ? 'bg-blue-300' : 'bg-gray-200'}`}
                            key={answer.answer}
                            onClick={() => handleAnswerClicked(answerIndex)}
                        >
                            {answer.answer}
                        </button>
                    ))}
                </div>

                <button
                    onClick={handleSubmit}
                    disabled={selectedAnswerIndex === null}
                    className="bg-gray-200 p-2 rounded-md text-black disabled:opacity-50"
                >
                    Submit
                </button>
            </>
        )
    }

    function QuizFinished() {
        return (
            <>
                <h1 className="text-2xl font-bold">
                    You scored {score} out of {QUESTIONS.length}
                </h1>
                <button
                    onClick={restart}
                    className="bg-gray-200 p-2 rounded-md text-black"
                >
                    Restart
                </button>
            </>
        )
    }
    return (
        <div className="flex flex-col gap-4 h-screen justify-center items-center">
            {isQuizFinished ? <QuizFinished /> : <Quiz />}
        </div>
    )
}