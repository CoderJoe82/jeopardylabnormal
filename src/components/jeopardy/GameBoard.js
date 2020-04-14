import React from "react";
import AnswerForm from "./AnswerForm";

function GameBoard(props) {
  const category = props.data.category && props.data.category.title;
  return (
    <div className="GameBoard">
      <h2 style={{ textAlign: "center" }}>{category}</h2>
      <h3 style={{ textAlign: "center" }}>${props.data.value}</h3>

      <div
        className="clue"
        style={{
          backgroundColor: "blue",
          textAlign: "center",
          padding: "2rem",
          color: "white",
        }}
      >
        {props.data.question}
      </div>
      <AnswerForm checkAnswer={props.checkAnswer} />
      <div
        className="score"
        style={{ textAlign: "center", fontSize: "1.5rem" }}
      >
        Your winnings: ${props.score}
      </div>
    </div>
  );
}

export default GameBoard;
