import React, { useState } from 'react';
import styles from '../styles/Quiz.module.scss';
import Header from '../components/Header';

const Quiz = () => {
  const questions = [
    {
      question: 'How are you feeling right now?',
      options: [
        '😟 Stressed or anxious.',
        '😴 Tired or low on energy.',
        '😢 Sad or unmotivated.',
        '😌 Calm but in need of some alone time.',
        '😊 Happy and excited to try something new.'
      ]
    },
    {
        question: 'What do you want to achieve with self-care today?',
        options: [
          '🌿 Reduce stress or anxiety.',
          '⚡ Restore physical energy.',
          '🧘 Calm your mind or emotions.',
          '🤝 Connect with others.',
          '✨ Explore or learn something new.'
        ]
      },
      {
        question: 'What do you usually enjoy the most?',
        options: [
          '🏃 Physical activities.',
          '🛀 Relaxation.',
          '🎨 Creative pursuits.',
          '🎲 Social activities.',
          '🌎 Learning and exploring.',
          '🌸 Personal care.',
          '🪞 Self-reflection.'
        ]
      },
      {
        question: 'How much time do you have for self-care?',
        options: [
          '⏱ Less than 10 minutes.',
          '⏱ 10–30 minutes.',
          '⏱ 30 minutes to 1 hour.',
          '⏱ More than 1 hour.'
        ]
      },
      {
        question: 'What kind of activity do you prefer to handle stress?',
        options: [
          '🏋️ Physical movement and staying active.',
          '🧘 Quiet time and reflection.',
          '🤝 Spending time with others.',
          '✨ Creative or exploratory activities.',
          '🌸 Simple and calming routines.',
          '🪞 Reflecting and setting personal goals (like journaling).'
        ]
      }
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState(Array(questions.length).fill(null));

  const handleOptionClick = (index) => {
    const updatedAnswers = [...answers];
    updatedAnswers[currentQuestion] = index;
    setAnswers(updatedAnswers);
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handleBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  return (
    <>
      <Header />
      <div className={styles.quizContainer}>
        <h1 className={styles.quizTitle}>Let’s Discover Your Self-Care Needs!</h1>
        <div className={styles.progressBar}>
          <div
            className={styles.progress}
            style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
          ></div>
        </div>
        <h2 className={styles.question}>{questions[currentQuestion].question}</h2>
        <ul className={styles.optionList}>
          {questions[currentQuestion].options.map((option, index) => (
            <li
              key={index}
              onClick={() => handleOptionClick(index)}
              className={`${styles.optionItem} ${
                answers[currentQuestion] === index ? styles.selected : ''
              }`}
            >
              {option}
            </li>
          ))}
        </ul>
        <div className={styles.navigation}>
          <button onClick={handleBack} className={styles.button} disabled={currentQuestion === 0}>
            Back
          </button>
          <button
            onClick={handleNext}
            className={styles.button}
            disabled={currentQuestion === questions.length - 1}
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default Quiz;
