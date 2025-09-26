import React, { useState } from 'react';

const Quiz = () => {
  const [userName, setUserName] = useState('');
  const [startQuiz, setStartQuiz] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const questions = [
    {
      question: "What does GTE stand for?",
      options: [
        "Global Token Exchange",
        "General Trading Engine",
        "Global Trading Exchange",
        "Generic Token Ecosystem"
      ],
      answer: "Global Token Exchange"
    },
    {
      question: "Which ecosystem powers GTE?",
      options: ["Solana", "Arbitrum", "MegaETH", "Ethereum"],
      answer: "MegaETH"
    },
    {
      question: "GTE is primarily:",
      options: [
        "A Layer 1 blockchain",
        "A wallet app",
        "A trading platform built on MegaETH",
        "A staking protocol"
      ],
      answer: "A trading platform built on MegaETH"
    },
    {
      question: "What kind of engine does GTE use?",
      options: [
        "Automated Market Maker (AMM) only",
        "Central Limit Order Book (CLOB)",
        "Randomized auction model",
        "DEX-Powered Swapping Engine"
      ],
      answer: "Central Limit Order Book (CLOB)"
    },
    {
      question: "What’s GTE’s mission?",
      options: [
        "To build a meme coin",
        "To bring CEX-level performance fully on-chain",
        "To replace Ethereum",
        "To focus on NFTs only"
      ],
      answer: "To bring CEX-level performance fully on-chain"
    },
    {
      question: "How many orders per second can GTE process?",
      options: ["1,000", "10,000", "100,000", "1,000,000"],
      answer: "100,000"
    },
    {
      question: "What is the approximate latency on GTE?",
      options: ["10 seconds", "1 second", "1 millisecond", "100 milliseconds"],
      answer: "1 millisecond"
    },
    {
      question: "What is Takeoff in GTE?",
      options: [
        "A gas fee calculator",
        "A bonding-curve token launchpad",
        "An order book for deep liquidity",
        "An NFT minter"
      ],
      answer: "A bonding-curve token launchpad"
    },
    {
      question: "Who holds user funds on GTE?",
      options: [
        "Portfolio",
        "Users themselves",
        "Admin-controlled security contracts",
        "Flow Traders"
      ],
      answer: "Users themselves"
    },
    {
      question: "Which statement is true about GTE?",
      options: [
        "GTE can freeze your funds at will",
        "You always control your funds on GTE",
        "GTE requires admin approval for trades",
        "Funds are bridged to CEX custody for security purposes"
      ],
      answer: "You always control your funds on GTE"
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
            <p className="text-lg">
              {userName}, your score is <strong>{score}</strong> out of {questions.length}
            </p>
            <p className="text-xl">
              {score === 10
                ? "🎉 Excellent Job!"
                : score >= 7
                ? "👍 Good Job!"
                : "😐 Try Again!"}
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
