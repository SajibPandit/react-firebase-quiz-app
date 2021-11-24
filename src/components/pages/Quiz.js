import React from "react";
import Answers from "../Answers";
import MiniPalyer from "../MiniPalyer";
import ProgressBar from "../ProgressBar";

function Quiz() {
  return (
    <>
      <h1>Pick three of your favorite Star Wars Flims</h1>
      <h4>Question can have multiple answers</h4>
      <Answers />
      <ProgressBar />
      <MiniPalyer />
    </>
  );
}

export default Quiz;
