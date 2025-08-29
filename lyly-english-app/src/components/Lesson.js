import React, { useContext, useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { AppContext } from '../App';

const Lesson = () => {
  const { weekId, dayId, lessonId } = useParams();
  const navigate = useNavigate();
  const { appState, updateAppState } = useContext(AppContext);
  const [lessonData, setLessonData] = useState(null);
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    // Load lesson data based on parameters
    const lesson = getLessonData(parseInt(weekId), parseInt(dayId), parseInt(lessonId));
    setLessonData(lesson);
  }, [weekId, dayId, lessonId]);

  const getLessonData = (weekId, dayId, lessonId) => {
    // Sample lesson data - you can expand this
    const lessons = {
      1: { // Week 1
        1: { // Day 1
          1: {
            title: "Learn the Alphabet",
            type: "learn",
            content: [
              { letter: "A", word: "Apple", meaning: "Quả táo", emoji: "🍎" },
              { letter: "B", word: "Ball", meaning: "Quả bóng", emoji: "⚽" },
              { letter: "C", word: "Cat", meaning: "Con mèo", emoji: "🐱" },
              { letter: "D", word: "Dog", meaning: "Con chó", emoji: "🐕" },
              { letter: "E", word: "Elephant", meaning: "Con voi", emoji: "🐘" }
            ]
          },
          2: {
            title: "Practice Letters",
            type: "practice",
            content: {
              question: "Which letter comes after 'B'?",
              options: ["A", "B", "C", "D"],
              correct: 2
            }
          },
          3: {
            title: "Say the Letters",
            type: "speak",
            content: "Practice saying: A, B, C, D, E"
          }
        }
      }
    };
    
    return lessons[weekId]?.[dayId]?.[lessonId] || {
      title: "Lesson Not Found",
      type: "info",
      content: "This lesson is coming soon!"
    };
  };

  const handleNext = () => {
    if (currentStep < lessonData.content.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      // Lesson completed
      updateAppState({
        totalXP: appState.totalXP + 25,
        lessonsCompleted: appState.lessonsCompleted + 1
      });
      navigate(`/week/${weekId}`);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const renderLessonContent = () => {
    if (!lessonData) return <div>Loading...</div>;

    switch (lessonData.type) {
      case 'learn':
        return (
          <div className="text-center">
            <h3 className="text-3xl font-bold text-warm-800 mb-8 font-display">{lessonData.title}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {lessonData.content.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="card text-center hover:scale-105 transition-transform duration-300"
                >
                  <div className="text-6xl mb-4">{item.emoji}</div>
                  <div className="text-4xl font-bold text-pastel-600 mb-2">{item.letter}</div>
                  <h4 className="text-xl font-semibold text-warm-800 mb-2">{item.word}</h4>
                  <p className="text-warm-600">{item.meaning}</p>
                </motion.div>
              ))}
            </div>
          </div>
        );

      case 'practice':
        return (
          <div className="text-center">
            <h3 className="text-3xl font-bold text-warm-800 mb-8 font-display">{lessonData.title}</h3>
            <div className="max-w-2xl mx-auto">
              <div className="card mb-8">
                <h4 className="text-xl font-semibold text-warm-800 mb-6">{lessonData.content.question}</h4>
                <div className="grid grid-cols-2 gap-4">
                  {lessonData.content.options.map((option, index) => (
                    <button
                      key={index}
                      className="p-4 border-2 border-pastel-200 rounded-lg hover:border-pastel-500 hover:bg-pastel-50 transition-all duration-200"
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );

      case 'speak':
        return (
          <div className="text-center">
            <h3 className="text-3xl font-bold text-warm-800 mb-8 font-display">{lessonData.title}</h3>
            <div className="max-w-2xl mx-auto">
              <div className="card">
                <div className="text-6xl mb-6">🎤</div>
                <h4 className="text-xl font-semibold text-warm-800 mb-4">Practice Speaking</h4>
                <p className="text-lg text-warm-600 mb-6">{lessonData.content}</p>
                <button className="btn-primary">
                  <span className="mr-2">🎤</span>
                  Start Speaking
                </button>
              </div>
            </div>
          </div>
        );

      default:
        return (
          <div className="text-center">
            <h3 className="text-3xl font-bold text-warm-800 mb-8 font-display">{lessonData.title}</h3>
            <p className="text-lg text-warm-600">{lessonData.content}</p>
          </div>
        );
    }
  };

  if (!lessonData) {
    return <div>Loading...</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="max-w-6xl mx-auto"
    >
      {/* Lesson Header */}
      <div className="card mb-8">
        <div className="flex justify-between items-center">
          <button
            onClick={() => navigate(`/week/${weekId}`)}
            className="btn-secondary"
          >
            ← Back to Week
          </button>
          
          <div className="text-center">
            <h1 className="text-2xl font-bold text-warm-800 font-display">{lessonData.title}</h1>
            <p className="text-warm-600">Week {weekId} • Day {dayId} • Lesson {lessonId}</p>
          </div>
          
          <div className="text-right">
            <div className="text-sm text-warm-600">Progress</div>
            <div className="text-lg font-bold text-pastel-600">
              {currentStep + 1} / {Array.isArray(lessonData.content) ? lessonData.content.length : 1}
            </div>
          </div>
        </div>
      </div>

      {/* Lesson Content */}
      <div className="card p-8 mb-8">
        {renderLessonContent()}
      </div>

      {/* Lesson Navigation */}
      <div className="flex justify-between items-center">
        <button
          onClick={handlePrevious}
          disabled={currentStep === 0}
          className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
            currentStep === 0 
              ? 'bg-warm-300 text-warm-500 cursor-not-allowed' 
              : 'btn-secondary'
          }`}
        >
          ← Previous
        </button>
        
        <button
          onClick={handleNext}
          className="btn-primary"
        >
          {currentStep < (Array.isArray(lessonData.content) ? lessonData.content.length - 1 : 0) 
            ? 'Next →' 
            : 'Complete Lesson'}
        </button>
      </div>
    </motion.div>
  );
};

export default Lesson;
