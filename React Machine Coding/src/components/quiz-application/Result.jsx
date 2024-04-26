const Result = ({ questions, usersAnswers, resetQuiz }) => {
  const correctAnswers = usersAnswers.filter((answer) => answer);

  return (
    <div className="result">
      <h2>Result</h2>
      <p>
        You answered {correctAnswers.length} out of {questions.length} questions
        <span className="reset" onClick={resetQuiz}>
          Click here to reset
        </span>
      </p>

      <ul>
        {questions.map((question, index) => {
          return (
            <li key={index}>
              {index + 1}: {question.question}
              <p>{usersAnswers[index] ? "Correct" : "Not Correct"}</p>
              <p>
                Correct Option :
                {questions[index].options.map((option) => (
                  <p key={option}>{option.isCorrect && option.text}</p>
                ))}
              </p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Result;
