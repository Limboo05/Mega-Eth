import React, { useState } from 'react';
import questions from '../data/questions'; // ✅ Import the 50 GTE questions

const Quiz = () => {
  const [userName, setUserName] = useState('');
  const [startQuiz, setStartQuiz] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

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
              {score === questions.length ? "🎉 Perfect Score!" :
               score >= Math.floor(questions.length * 0.7) ? "👍 Great Job!" :
               "😐 Keep Practicing!"}
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
