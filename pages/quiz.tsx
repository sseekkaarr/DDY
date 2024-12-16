import React, { useState } from 'react';
import styles from '../styles/Quiz.module.scss';
import Header from '../components/Header';
import Link from 'next/link';

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
    }
  ];

  const activitiesData = [
    { name: 'Go for a walk in nature', category: '🏃 Physical activities.', duration: '10–30 minutes' },
    { name: 'Move your body: run, walk, or lift weights', category: '🏃 Physical activities.', duration: '10–30 minutes' },
    { name: 'Yoga or stretch on your own', category: '🏃 Physical activities.', duration: '10–30 minutes' },
    { name: 'Dance to your favorite song', category: '🏃 Physical activities.', duration: '5–10 minutes' },
    { name: 'Ride a bicycle', category: '🏃 Physical activities.', duration: '30–60 minutes' },
  
    { name: 'Meditate for 10 minutes', category: '🛀 Relaxation.', duration: '10 minutes' },
    { name: 'Listen to music', category: '🛀 Relaxation.', duration: '10–20 minutes' },
    { name: 'Listen to a calming soundscape', category: '🛀 Relaxation.', duration: '10 minutes' },
    { name: 'Practice deep breathing', category: '🛀 Relaxation.', duration: '5–9 minutes' },
    { name: 'Visualize a calming scene', category: '🛀 Relaxation.', duration: '5–9 minutes' },
  
    { name: 'Apply a face mask', category: '🌸 Personal care.', duration: '10–20 minutes' },
    { name: 'Give yourself a light self-massage', category: '🌸 Personal care.', duration: '10–15 minutes' },
    { name: 'Have an at-home spa day', category: '🌸 Personal care.', duration: '61–120 minutes' },
    { name: 'Diffuse essential oils', category: '🌸 Personal care.', duration: '10–30 minutes' },
    { name: 'Arrange fresh flowers', category: '🌸 Personal care.', duration: '30–60 minutes' },
  
    { name: 'Paint a picture', category: '🎨 Creative pursuits.', duration: '30–60 minutes' },
    { name: 'Create a scrapbook', category: '🎨 Creative pursuits.', duration: '61–120 minutes' },
    { name: 'Write a poem', category: '🎨 Creative pursuits.', duration: '15–30 minutes' },
    { name: 'Sculpt something with clay', category: '🎨 Creative pursuits.', duration: '61–120 minutes' },
    { name: 'Design a vision board', category: '🎨 Creative pursuits.', duration: '61–120 minutes' },
  
    { name: 'Call a loved one', category: '🎲 Social activities.', duration: '1–30 minutes' },
    { name: 'Hug someone you care about', category: '🎲 Social activities.', duration: '1–2 minutes' },
    { name: 'Plan a family or friends game night', category: '🎲 Social activities.', duration: '61–180 minutes' },
    { name: 'Join a club or sports team', category: '🎲 Social activities.', duration: '61–120 hours' },
    { name: 'Attend a class to learn something new', category: '🎲 Social activities.', duration: '61–120 minutes' },
  
    { name: 'Read a book', category: '🌎 Learning and exploring.', duration: '30–61 minutes' },
    { name: 'Watch an inspirational movie', category: '🌎 Learning and exploring.', duration: '61–180 minutes' },
    { name: 'Listen to an audiobook or an inspirational podcast', category: '🌎 Learning and exploring.', duration: '20–60 minutes' },
    { name: 'Take an online quiz to discover something new', category: '🌎 Learning and exploring.', duration: '5–15 minutes' },
    { name: 'Take a day trip to explore somewhere new', category: '🌎 Learning and exploring.', duration: '120–360 minutes' },
  
    { name: 'Journal about your feelings', category: '🪞 Self-reflection.', duration: '10–20 minutes' },
    { name: 'Reflect on one thing that brought you joy today', category: '🪞 Self-reflection.', duration: '5–10 minutes' },
    { name: 'Set one small goal for the week ahead', category: '🪞 Self-reflection.', duration: '5–10 minutes' },
    { name: 'Write a letter to your future self', category: '🪞 Self-reflection.', duration: '20–30 minutes' },
    { name: 'Create a “vision list” of things you’d like to achieve this year', category: '🪞 Self-reflection.', duration: '30–60 minutes' }
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState(Array(questions.length).fill(null));
  const [showResults, setShowResults] = useState(false);
  const [recommendedActivities, setRecommendedActivities] = useState<string[]>([]);
  const [errorMessage, setErrorMessage] = useState(false);

  const handleOptionClick = (index: number) => {
    const updatedAnswers = [...answers];
    updatedAnswers[currentQuestion] = questions[currentQuestion].options[index];
    setAnswers(updatedAnswers);
    setErrorMessage(false);
  };

  const handleNext = () => {
    if (answers[currentQuestion] === null) {
      setErrorMessage(true);
    } else {
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
      } else {
        generateRecommendations();
        setShowResults(true);
      }
    }
  };

  const handleBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setErrorMessage(false);
    }
  };

  const generateRecommendations = () => {
    const selectedCategory = answers[2];
    const selectedDuration = answers[3];
  
    const durationRangeMap = {
      '⏱ Less than 10 minutes.': { min: 0, max: 9 },
      '⏱ 10–30 minutes.': { min: 10, max: 30 },
      '⏱ 30 minutes to 1 hour.': { min: 30, max: 60 },
      '⏱ More than 1 hour.': { min: 61, max: 999 },
    };
  
    const { min, max } = durationRangeMap[selectedDuration];
  
    const filteredActivities = activitiesData.filter((activity) => {
      if (activity.category === selectedCategory) {
        const durationText = activity.duration;
        const matches = durationText.match(/\d+/g);
        if (matches) {
          const durationValues = matches.map(Number);
          const minDuration = Math.min(...durationValues);
          return minDuration >= min && minDuration <= max;
        }
      }
      return false;
    });
  
    setRecommendedActivities(filteredActivities.map((activity) => activity.name));
  };
  

  return (
    <>
      <Header />
      <div className={styles.quizContainer}>
        <h1 className={styles.quizTitle}>Let’s Discover Your Self-Care Needs!</h1>

        {!showResults ? (
          <>
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
                    answers[currentQuestion] === option ? styles.selected : ''
                  }`}
                >
                  {option}
                </li>
              ))}
            </ul>
            {errorMessage && <p className={styles.errorMessage}>Please select an option to continue.</p>}
            <div className={styles.navigation}>
              <button onClick={handleBack} className={styles.button} disabled={currentQuestion === 0}>
                Back
              </button>
              <button onClick={handleNext} className={styles.button}>
                {currentQuestion === questions.length - 1 ? 'Finish' : 'Next'}
              </button>
            </div>
          </>
        ) : (
          <div className={styles.results}>
            <h2 className={styles.resultsTitle}>Here’s what we recommend for you:</h2>
            {recommendedActivities.length > 0 ? (
              <div className={styles.activityList}>
                {recommendedActivities.map((activity, index) => (
                  <div key={index} className={styles.activityCard}>
                    <h3>
                      <span style={{ marginRight: '8px' }}>🌟</span>
                      {activity}
                    </h3>
                  </div>
                ))}

              </div>
            ) : (
              <div className={styles.noResults}>
                <p>Oops! It seems we couldn’t find a perfect match for you.</p>
                <p>Don’t worry! You can still explore other self-care activities.</p>
              </div>
            )}
            <div className={styles.exploreMore}>
              <Link href="/activity-catalog" passHref>
                <button className={`${styles.exploreButton} ${styles.gradientHover}`}>
                  Explore More Activities
                </button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Quiz;
