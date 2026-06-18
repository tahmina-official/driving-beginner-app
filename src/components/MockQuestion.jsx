export default function MockQuestion({
  question,
  questionNumber,
  total,
  selectedAnswer,
  showAnswer,
  onSelect,
}) {
  return (
    <article className="question-card">
      <div className="question-card__meta">
        Question {questionNumber} of {total}
      </div>

      <h2>{question.question}</h2>

      <div className="answer-list">
        {question.options.map((option) => {
          const isSelected = selectedAnswer === option;
          const isCorrect = question.answer === option;
          const isWrong = showAnswer && isSelected && !isCorrect;

          let className = "answer-choice";
          if (isSelected) className += " answer-choice--selected";
          if (showAnswer && isCorrect) className += " answer-choice--correct";
          if (isWrong) className += " answer-choice--wrong";

          return (
            <button
              type="button"
              key={option}
              className={className}
              onClick={() => onSelect(option)}
              disabled={showAnswer}
            >
              {option}
            </button>
          );
        })}
      </div>

      {showAnswer && <p className="lede">{question.explanation}</p>}
    </article>
  );
}
