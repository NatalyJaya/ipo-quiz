import React from "react";
import './Quiz.css'; // Corrected import statement

const Quiz = () => {
  return (
    <div className="container">
        <h1>Quiz App</h1>
        <hr />
        <h2>Which device is required for the internet connection?</h2>
        <ul>
            <li>Router</li>
            <li>Modem</li>
            <li>Network Cable</li>
        </ul>
        <button>Next</button>
        <div className="index"> 1 of 5 questions </div>
    </div>
  );
};

export default Quiz;
