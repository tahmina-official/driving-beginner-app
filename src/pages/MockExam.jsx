import { useMemo, useState } from "react";
import { RotateCcw } from "lucide-react";

import MockQuestion from "../components/MockQuestion";
import { getExamResult, questions } from "../data/questions";

export default function MockExam() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const currentQuestion = questions[currentIndex];
  const answeredCount = Object.keys(answers).length;
  const score = useMemo(
    () =>
      questions.reduce(
        (total, question) => total + (answers[question.id] === question.answer ? 1 : 0),
        0
      ),
    [answers]
  );
  const result = getExamResult(score, questions.length);

  const selectAnswer = (answer) => {
    setAnswers((current) => ({
      ...current,
      [currentQuestion.id]: answer,
    }));
  };

  const resetExam = () => {
    setCurrentIndex(0);
    setAnswers({});
    setSubmitted(false);
  };

  if (submitted) {
    return (
      <>
        <section className="page-header">
          <p className="eyebrow">Mock exam result</p>
          <h1>{result.passed ? "You passed the practice test." : "Keep practicing."}</h1>
          <p className="lede">
            You answered {score} of {questions.length} questions correctly.
          </p>
        </section>

        <section className="panel">
          <div className="panel__body result-card">
            <div className="score-ring">{result.percentage}%</div>
            <p className="lede">
              Passing target: 80%. Review any missed questions, then try another pass.
            </p>
            <div>
              <button type="button" className="button button--primary" onClick={resetExam}>
                <RotateCcw size={18} aria-hidden="true" />
                Restart Exam
              </button>
            </div>
          </div>
        </section>

        <section className="section grid">
          {questions.map((question, index) => (
            <div key={question.id} className="panel">
              <div className="panel__body">
                <MockQuestion
                  question={question}
                  questionNumber={index + 1}
                  total={questions.length}
                  selectedAnswer={answers[question.id]}
                  showAnswer
                  onSelect={() => {}}
                />
              </div>
            </div>
          ))}
        </section>
      </>
    );
  }

  return (
    <>
      <section className="page-header">
        <p className="eyebrow">Mock DMV exam</p>
        <h1>Answer every question, then check your score.</h1>
        <p className="lede">
          Progress: {answeredCount} of {questions.length} answered.
        </p>
      </section>

      <section className="panel exam-layout">
        <div className="panel__body">
          <MockQuestion
            question={currentQuestion}
            questionNumber={currentIndex + 1}
            total={questions.length}
            selectedAnswer={answers[currentQuestion.id]}
            showAnswer={false}
            onSelect={selectAnswer}
          />

          <div className="exam-actions section">
            <button
              type="button"
              className="button button--secondary"
              onClick={() => setCurrentIndex((index) => Math.max(0, index - 1))}
              disabled={currentIndex === 0}
            >
              Previous
            </button>

            {currentIndex === questions.length - 1 ? (
              <button
                type="button"
                className="button button--primary"
                onClick={() => setSubmitted(true)}
                disabled={answeredCount < questions.length}
              >
                Submit Exam
              </button>
            ) : (
              <button
                type="button"
                className="button button--primary"
                onClick={() =>
                  setCurrentIndex((index) => Math.min(questions.length - 1, index + 1))
                }
              >
                Next
              </button>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
