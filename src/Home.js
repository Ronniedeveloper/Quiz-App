import { useState } from 'react';
import questions from './Questions'

const Home = () => {
    const [currentQuestion,setCurrentQuestion] = useState(0);
    const [showScore,setShowScore] = useState(false);
    const [score,setScore] = useState(0);
  
    const handleAnswerBtnClick = (isCorrect) => {
      if (isCorrect === true) {
        setScore(score + 1);
      }
  
      const nextQuestion = currentQuestion + 1;
      if (nextQuestion < questions.length) {
        setCurrentQuestion(nextQuestion);
      } else {
        setShowScore(true);
      }
    }
  
    return (
      <div className="home">
        { showScore ? (
          <div className="score-section">
            <div className='first'></div>
            <div className='second'></div>
  
            <div className='score-text'>
              <article>
                <h1>Your Score</h1>
                <span>Right Answers: { score }</span>
                <span>Wrong Answers: { questions.length-score}</span>
                <span>Total Question: {questions.length}</span>
                <span>Total Score: { score }</span>
              </article>
            </div>
          </div>
        ) : (
          <div>
            <div className='logo-container'>
              <h4>Quiz Game</h4>
              <p>Enjoy this short quiz game<br/> done in ReactJS. Have fun!</p>
            </div>
            <div className='content-container'>
            <div className="question-section">
              <div className="question-count">
                <span>Question {currentQuestion + 1 }/<span>{questions.length}</span></span>
              </div>
              <div className='question-text'>{questions[currentQuestion].questionText}</div>
            </div>
  
            <div className="answer-section">
              { questions[currentQuestion].answerOption.map((answerOption) => 
                <button onClick={()=>handleAnswerBtnClick(answerOption.isCorrect)}>{ answerOption.answerText }</button>
              )}
            </div>
          </div>
          </div>
        )}
      </div>
    );
}
 
export default Home;