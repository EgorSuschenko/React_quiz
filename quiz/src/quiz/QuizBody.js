import React, { useState } from 'react';
import './QuizBody.css'



export let QuizBody = () => {


  let [currentQuestion, setCurrentQuestion] = useState(0);

  let [questions, setQuestions] = useState(
    [
      {title: 'What is the capital of GB',
      answers: [
        {title: 'Yes', isCorrect: false},
        {title: 'No', isCorrect: false},
        {title: 'Moscow', isCorrect: false},
        {title: 'London', isCorrect: true}
      ]},
      {title: 'What is the name of the Queen',
      answers: [
        {title: 'Yes', isCorrect: false},
        {title: 'No', isCorrect: false},
        {title: 'Kitty', isCorrect: false},
        {title: 'Elizabeth', isCorrect:true}
      ]},
      {title: 'Keko',
      answers: [
        {title: 'Yes', isCorrect: false},
        {title: 'No', isCorrect: false},
        {title: 'Pepo', isCorrect: false},
        {title: 'Keko', isCorrect: true}
      ]},
      {title: 'Pepo',
      answers: [
        {title: 'Yes', isCorrect: false},
        {title: 'No', isCorrect: false} ,
        {title: 'Keko', isCorrect: false},
        {title: 'Pepo', isCorrect: true}
      ]}
    ]
  )

  let [showScore, setShowScore] = useState(false);
  let [score, setScore] = useState(0);

  let onClickHandlerQuestion = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
      console.log(score);
    }
    if(currentQuestion + 1 === questions.length) {
      setShowScore(true)
    } else {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  let onClickHandlerScore = () => {
    setShowScore(false);
    setCurrentQuestion(0);
    setScore(0);
  }

  return (
    <div className = "quiz__body" >
      { !showScore &&
        <div className = "question_block" >
          <div className = "question_text">
            Question {currentQuestion + 1} out of {questions.length}
            <span className = "question">{questions[currentQuestion].title}</span>
            </div>
          <div className = "question__answers">
            {
              questions[currentQuestion].answers
              .map((item, index) => (
              <button onClick = {() => onClickHandlerQuestion(item.isCorrect)} className = "answer" key = {index} isCorrect = {item.isCorrect}>{item.title}</button>
              ))
            }
          </div>
        </div>
        }
      { showScore &&
        <div className = "question_block">
          <div className = "score__screen">
            <span className = "score__text">Your score is {score} out of {questions.length}</span>
            <button className = "reset" onClick={onClickHandlerScore} >Reset test</button>
          </div>
        </div>
      }


    </div>
  )
}
