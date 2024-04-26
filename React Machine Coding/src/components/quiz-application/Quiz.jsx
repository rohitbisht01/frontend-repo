import { useState } from "react";
import questions from "../../constants/questions.json";
import Question from "./Question";
import "./quiz.css";
import Result from "./Result";

const Quiz = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [usersAnswers, setUsersAnswers] = useState([]);

  const handleNextQuestion = (isCorrect) => {
    setCurrentQuestionIndex(currentQuestionIndex + 1);
    setUsersAnswers([...usersAnswers, isCorrect]);
  };

  const resetQuiz = () => {
    setCurrentQuestionIndex(0);
    setUsersAnswers([]);
  };

  return (
    <div>
      <h3>Quiz Application</h3>

      {/* Question Component */}
      {currentQuestionIndex < questions.length && (
        <Question
          question={questions[currentQuestionIndex]}
          onAnswerClick={handleNextQuestion}
        />
      )}

      {/* Results */}
      {currentQuestionIndex === questions.length && (
        <Result
          usersAnswers={usersAnswers}
          questions={questions}
          resetQuiz={resetQuiz}
        />
      )}
    </div>
  );
};

export default Quiz;
