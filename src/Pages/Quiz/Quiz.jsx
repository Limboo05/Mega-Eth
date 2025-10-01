import React, { useState, useEffect } from "react";
import { apiFetch } from "../../api";

const Quiz = () => {
  const [userName] = useState(localStorage.getItem("username") || "");
  const [userId] = useState(localStorage.getItem("userId") || null);
  const [startQuiz, setStartQuiz] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [attemptsLeft, setAttemptsLeft] = useState(null);
  const [leaderboard, setLeaderboard] = useState([]);
  const [timeLeft, setTimeLeft] = useState(15);

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

useEffect(() => {
    if (userId) {
      apiFetch(`/quiz/attempts/${userId}`)
        .then((data) => setAttemptsLeft(data.attempts_left))
        .catch((err) => console.error("Error fetching attempts:", err));
    }
  }, [userId]);

  useEffect(() => {
    if (startQuiz && !showResult && timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0) {
      handleNextQuestion();
    }
  }, [startQuiz, showResult, timeLeft]);

  const handleStart = () => {
    if (userName && attemptsLeft > 0) {
      setStartQuiz(true);
      setTimeLeft(15);
    }
  };

  const handleAnswer = (selected) => {
    if (selected === questions[currentIndex].answer) {
      setScore(score + 1);
    }
    handleNextQuestion();
  };

  const handleNextQuestion = () => {
    const nextIndex = currentIndex + 1;
    if (nextIndex < questions.length) {
      setCurrentIndex(nextIndex);
      setTimeLeft(15);
    } else {
      handleQuizEnd();
    }
  };

  const handleQuizEnd = async () => {
    setShowResult(true);

    if (userId) {
      try {
        const data = await apiFetch("/quiz/submit", {
          method: "POST",
          body: JSON.stringify({ user_id: userId, score }),
        });

        setAttemptsLeft(data.attempts_left);

        const lb = await apiFetch("/quiz/leaderboard");
        setLeaderboard(lb);
      } catch (err) {
        console.error("Submit error:", err);
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-slate-800 text-white flex items-center justify-center p-4">
      <div className="w-full max-w-xl bg-gray-900 rounded-2xl shadow-lg p-6">
        {!startQuiz ? (
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold text-orange-500">Start Quiz</h2>
            <button
              onClick={handleStart}
              disabled={attemptsLeft === 0}
              className={`w-full ${
                attemptsLeft === 0
                  ? "bg-gray-600 cursor-not-allowed"
                  : "bg-orange-600 hover:bg-orange-500"
              } transition duration-300 text-white py-2 rounded-md text-lg font-medium`}
            >
              {attemptsLeft === 0 ? "No Attempts Left Today" : "Start Quiz"}
            </button>
            {attemptsLeft !== null && (
              <p className="text-sm text-gray-400">
                Attempts left today: {attemptsLeft}
              </p>
            )}
          </div>
        ) : showResult ? (
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold text-orange-500">Quiz Finished!</h2>
            <p className="text-lg">
              {userName}, your score is <strong>{score}</strong> out of{" "}
              {questions.length}
            </p>
            <h3 className="text-2xl font-semibold mt-6 text-orange-400">
              🏆 Leaderboard (Top 10)
            </h3>
            <ul className="mt-4 space-y-2">
              {leaderboard.map((entry, idx) => (
                <li
                  key={idx}
                  className="flex justify-between bg-gray-800 px-4 py-2 rounded-md"
                >
                  <span>User {entry.user_id}</span>
                  <span className="font-bold">{entry.best_score}</span>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <div>
            <h2 className="text-2xl font-semibold text-orange-400">
              Question {currentIndex + 1} of {questions.length}
            </h2>
            <p className="text-lg mb-2">{questions[currentIndex].question}</p>

            {/* Timer bar */}
            <div className="mb-4">
              <div className="h-2 bg-gray-700 rounded">
                <div
                  className="h-2 bg-orange-500 rounded"
                  style={{
                    width: `${(timeLeft / 15) * 100}%`,
                    transition: "width 1s linear",
                  }}
                />
              </div>
              <p className="text-sm text-gray-400 mt-1">{timeLeft} seconds left</p>
            </div>

            <div className="grid gap-3">
              {questions[currentIndex].options.map((opt, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswer(opt)}
                  className="w-full bg-gray-800 border border-gray-600 hover:bg-orange-600 px-4 py-2 rounded-md text-left"
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
