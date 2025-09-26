import React, { useState } from 'react';

const Quiz = () => {
  const [userName, setUserName] = useState('');
  const [startQuiz, setStartQuiz] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const questions = [
    {
      question: "What is the capital of Pakistan?",
      options: ["Lahore", "Karachi", "Islamabad", "Multan"],
      answer: "Islamabad"
    },
    {
      question: "Which is a JavaScript framework?",
      options: ["React", "Photoshop", "Canva", "Figma"],
      answer: "React"
    },
    {
      question: "What does HTML stand for?",
      options: [
        "High Text Machine Language",
        "Hyper Text Markup Language",
        "How To Make Language",
        "None"
      ],
      answer: "Hyper Text Markup Language"
    },
    {
      question: "What is 2 + 2?",
      options: ["3", "5", "4", "6"],
      answer: "4"
    },
    {
      question: "Which one is a fruit?",
      options: ["Potato", "Apple", "Tomato", "Onion"],
      answer: "Apple"
    },
    {
      question: "Which keyword is used to declare variable in JS?",
      options: ["var", "set", "make", "value"],
      answer: "var"
    },
    {
      question: "What is the full form of CSS?",
      options: [
        "Creative Style Sheet",
        "Cascading Style Sheets",
        "Colorful Style Sheet",
        "None"
      ],
      answer: "Cascading Style Sheets"
    },
    {
      question: "Which company created JavaScript?",
      options: ["Google", "Facebook", "Netscape", "Microsoft"],
      answer: "Netscape"
    },
    {
      question: "What symbol is used for comments in JS?",
      options: ["<!-- -->", "//", "##", "%%"],
      answer: "//"
    },
    {
      question: "Which data type is this: 'Hello World'?",
      options: ["Number", "Boolean", "String", "Object"],
      answer: "String"
    }
  ];

  const handleStart = () => {
    if (userName.trim() !== '') {
      setStartQuiz(true);
    }
  };

  const handleAnswer = (selected) => {
    if (selected === questions[currentIndex].answer) {
      setScore(score + 1);
    }

    const nextIndex = currentIndex + 1;
    if (nextIndex < questions.length) {
      setCurrentIndex(nextIndex);
    } else {
      setShowResult(true);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-slate-800 text-white flex items-center justify-center p-4">
      <div className="w-full max-w-xl bg-gray-900 rounded-2xl shadow-lg p-6">
        {!startQuiz ? (
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold text-orange-500">Start Quiz</h2>
            <input
              type="text"
              placeholder="Enter your name"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              className="w-full px-4 py-2 rounded-md bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <button
              onClick={handleStart}
              className="w-full bg-orange-600 hover:bg-orange-500 transition duration-300 text-white py-2 rounded-md text-lg font-medium"
            >
              Start Quiz
            </button>
          </div>
        ) : showResult ? (
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold text-orange-500">Quiz Finished!</h2>
            <p className="text-lg">{userName}, your score is <strong>{score}</strong> out of {questions.length}</p>
            <p className="text-xl">
              {score === 10 ? "🎉 Excellent Job!" :
               score >= 7 ? "👍 Good Job!" :
               "😐 Try Again!"}
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-orange-400">
              Question {currentIndex + 1} of {questions.length}
            </h2>
            <p className="text-lg mb-2">{questions[currentIndex].question}</p>
            <div className="grid gap-3">
              {questions[currentIndex].options.map((opt, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswer(opt)}
                  className="w-full bg-gray-800 border border-gray-600 hover:bg-orange-600 transition duration-200 px-4 py-2 rounded-md text-left"
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Quiz;
