import React, { useState } from 'react';
import '../Css/Quiz.css';

const Quiz = () => {
  const [answers, setAnswers] = useState({
    spanish: '',
    frenchThankYou: '',
    germanMorning: '',
    italianHello: '',
    frenchPlease: '',
    germanThankYou: '',
    spanishGoodbye: '',
  });

  const [score, setScore] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    
    const correctAnswers = {
      spanish: 'Adiós',
      frenchThankYou: 'Merci',
      germanMorning: 'Guten',
      italianHello: 'Ciao',
      frenchPlease: 'S\'il vous plaît',
      germanThankYou: 'Danke',
      spanishGoodbye: 'B', 
    };

    
    let scoreCount = 0;
    for (let question in correctAnswers) {
      if (answers[question].toLowerCase() === correctAnswers[question].toLowerCase()) {
        scoreCount += 1;
      }
    }

    setScore(scoreCount);
  };

  return (
    <div className="quiz-container">
      <h1>Interactive Language Quiz</h1>
      <form onSubmit={handleSubmit}>
        <div className="question">
          <label htmlFor="spanish">1. Translate "Goodbye" to Spanish:</label>
          <input
            type="text"
            id="spanish"
            name="spanish"
            value={answers.spanish}
            onChange={handleChange}
            placeholder="Answer in Spanish"
          />
        </div>
        <div className="question">
          <label htmlFor="frenchThankYou">2. What is the French word for "Thank you"?</label>
          <input
            type="text"
            id="frenchThankYou"
            name="frenchThankYou"
            value={answers.frenchThankYou}
            onChange={handleChange}
            placeholder="Answer in French"
          />
        </div>
        <div className="question">
          <label htmlFor="germanMorning">3. Fill in the blank: "____ morgen" (Good morning in German):</label>
          <input
            type="text"
            id="germanMorning"
            name="germanMorning"
            value={answers.germanMorning}
            onChange={handleChange}
            placeholder="Answer in German"
          />
        </div>
        <div className="question">
          <label htmlFor="italianHello">4. Which is the correct translation of "Hello" in Italian?</label>
          <input
            type="text"
            id="italianHello"
            name="italianHello"
            value={answers.italianHello}
            onChange={handleChange}
            placeholder="Answer in Italian"
          />
        </div>
        <div className="question">
          <label htmlFor="frenchPlease">5. Translate "Please" into French:</label>
          <input
            type="text"
            id="frenchPlease"
            name="frenchPlease"
            value={answers.frenchPlease}
            onChange={handleChange}
            placeholder="Answer in French"
          />
        </div>
        <div className="question">
          <label htmlFor="germanThankYou">6. What is the German word for "Thank you"?</label>
          <input
            type="text"
            id="germanThankYou"
            name="germanThankYou"
            value={answers.germanThankYou}
            onChange={handleChange}
            placeholder="Answer in German"
          />
        </div>
        <div className="question">
          <label htmlFor="spanishGoodbye">7. Which of these is the correct way to say "Goodbye" in Spanish?</label>
          <div className="options">
            <label>
              <input
                type="radio"
                name="spanishGoodbye"
                value="A"
                onChange={handleChange}
                checked={answers.spanishGoodbye === 'A'}
              />
              A) Au revoir
            </label>
            <label>
              <input
                type="radio"
                name="spanishGoodbye"
                value="B"
                onChange={handleChange}
                checked={answers.spanishGoodbye === 'B'}
              />
              B) Adiós
            </label>
            <label>
              <input
                type="radio"
                name="spanishGoodbye"
                value="C"
                onChange={handleChange}
                checked={answers.spanishGoodbye === 'C'}
              />
              C) Ciao
            </label>
          </div>
        </div>

        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>

      {score !== null && (
        <div className="score-container">
          <h2>Your Score: {score} / 7</h2>
          {score === 7 ? (
            <p>Excellent! You got all answers correct!</p>
          ) : (
            <p>Try again to improve your score!</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Quiz;
