const Question = ({ question, onAnswerClick }) => {
  return (
    <div className="question">
      <h2>{question.question}</h2>
      <ul className="options">
        {question.options.map((option) => {
          return (
            <li className="" key={option.text}>
              <button onClick={() => onAnswerClick(option.isCorrect)}>
                {option.text}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Question;
