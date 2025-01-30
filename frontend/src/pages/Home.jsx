import React from 'react';
import "../Css/Home.css"

const Home = () => {
  return (
    <div className="App">
      <header className="header">
        <h1>Unlock the World with Language Mastery</h1>
        <p>Learn a new language in just minutes a day – anytime, anywhere!</p>
      </header>

      <section className="intro">
        <h2>Welcome to Lang Learn</h2>
        <p>
          Your personal language companion! Whether you're a beginner or looking to sharpen your skills,
          we offer a fun and interactive way to learn  4 languages at your own pace. Start speaking,
          reading, and writing like a native!
        </p>
      </section>

      <section className="features">
        <h2>Key Features</h2>
        <ul>
          <li>Personalized Lessons: Tailor your learning experience with lessons that match your skill level and goals.</li>
          <li>Interactive Exercises: Practice through quizzes, flashcards, and conversation simulations to strengthen your skills.</li>
          <li>Cultural Insights: Learn more than just the language with cultural tips, fun facts, and real-life applications.</li>
          
        </ul>
      </section>

      

      <section className="testimonials">
        <h2>User Testimonials</h2>
        <div className="testimonial">
          <p>“I never thought learning a language could be so fun! The lessons are quick and easy, and I can learn whenever I have a few minutes to spare.”</p>
          <cite>- Sarah, Spanish Learner</cite>
        </div>
        <div className="testimonial">
          <p>“The speech recognition feature is a game-changer. I feel much more confident speaking now!”</p>
          <cite>- John, French Learner</cite>
        </div>
      </section>

      <footer className="footer">
        <ul>
          <li>About Us</li>
          <li>Privacy Policy</li>
          <li>Terms of Service</li>
          <li>Support</li>
        </ul>
        
      </footer>
    </div>
  );
};

export default Home;
