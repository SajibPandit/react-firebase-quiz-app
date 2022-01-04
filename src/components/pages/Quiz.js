import React, { useState, useEffect, useReducer } from "react";
import Answers from "../Answers";
import MiniPalyer from "../MiniPalyer";
import ProgressBar from "../ProgressBar";
import { useParams } from "react-router-dom";
import useQuestions from "../../hooks/useQuestions";
import _ from "lodash";

const initialState = null;

const reducer = (state, action) => {
  switch (action.type) {
    case "questions":
      action.value.forEach((question) => {
        question.options.forEach((option) => {
          option.checked = false;
        });
      });
      return action.value;

    case "answer":
      const questions = _.cloneDeep();
      questions[action.questionId].answers[action.answerId].checked =
        action.value;
      return questions;

    default:
      return state;
  }
};

function Quiz() {
  const { id } = useParams();
  const { loading, error, questions } = useQuestions(id);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const [qna, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({
      type: "questions",
      value: questions,
    });
  }, [questions]);

  return (
    <>
      <h1>{qna[currentQuestion].title}</h1>
      <h4>Question can have multiple answers</h4>
      <Answers
       options={qna[currentQuestion].options}
       handleChange={handleAnswerChange}
       />
      <ProgressBar />
      <MiniPalyer />
    </>
  );
}

export default Quiz;
