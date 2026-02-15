import React, { useContext, useState, useEffect, useCallback } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { AppContext } from '../App';
import { getLessonData } from '../data';

const Lesson = () => {
  const { weekId, dayId, lessonId } = useParams();
  const navigate = useNavigate();
  const { appState, completeLesson } = useContext(AppContext);
  const [lessonData, setLessonData] = useState(null);
  // Practice state
  const [practiceStep, setPracticeStep] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);
  const [practiceScore, setPracticeScore] = useState(0);
  const [practiceComplete, setPracticeComplete] = useState(false);

  // Speak state
  const [speakStep, setSpeakStep] = useState(0);
  const [isSpeaking, setIsSpeaking] = useState(false);

  useEffect(() => {
    const wId = parseInt(weekId);
    const dId = parseInt(dayId);
    const lId = parseInt(lessonId);
    const lesson = getLessonData(wId, dId, lId);
    setLessonData(lesson || {
      title: "Coming Soon!",
      type: "info",
      content: "This lesson is being prepared. Check back soon!"
    });
    // Reset state when lesson changes
    setPracticeStep(0);
    setSelectedAnswer(null);
    setIsCorrect(null);
    setPracticeScore(0);
    setPracticeComplete(false);
    setSpeakStep(0);
  }, [weekId, dayId, lessonId]);

  const handleComplete = useCallback(() => {
    completeLesson(parseInt(weekId), parseInt(dayId), parseInt(lessonId));
    navigate(`/week/${weekId}`);
  }, [weekId, dayId, lessonId, completeLesson, navigate]);

  // --- Practice handlers ---
  const handleAnswerSelect = (index) => {
    if (selectedAnswer !== null) return; // already answered
    const questions = lessonData.content;
    const currentQ = questions[practiceStep];
    setSelectedAnswer(index);
    const correct = index === currentQ.correct;
    setIsCorrect(correct);
    if (correct) {
      setPracticeScore(prev => prev + 1);
    }
  };

  const handleNextQuestion = () => {
    const questions = lessonData.content;
    if (practiceStep < questions.length - 1) {
      setPracticeStep(prev => prev + 1);
      setSelectedAnswer(null);
      setIsCorrect(null);
    } else {
      setPracticeComplete(true);
    }
  };

  // --- Speak handlers (TTS) ---
  const speak = (text, rate = 1) => {
    if (!window.speechSynthesis) return;
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-US';
    utterance.rate = rate;
    utterance.onstart = () => setIsSpeaking(true);
    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = () => setIsSpeaking(false);
    window.speechSynthesis.speak(utterance);
  };

  const handleNextSpeak = () => {
    const items = lessonData.content.items;
    if (speakStep < items.length - 1) {
      setSpeakStep(prev => prev + 1);
    }
  };

  const handlePrevSpeak = () => {
    if (speakStep > 0) {
      setSpeakStep(prev => prev - 1);
    }
  };

  // --- Learn handlers ---
  const handleNext = () => {
    if (lessonData.type === 'learn' && Array.isArray(lessonData.content)) {
      // For learn, "Complete Lesson" finishes immediately
      handleComplete();
    }
  };

  // --- Render ---
  const renderLessonContent = () => {
    if (!lessonData) return <div>Loading...</div>;

    switch (lessonData.type) {
      case 'learn':
        return (
          <div className="text-center">
            <h3 className="text-3xl font-bold text-warm-800 mb-8 font-display">{lessonData.title}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Array.isArray(lessonData.content) && lessonData.content.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.05 }}
                  className="card text-center hover:scale-105 transition-transform duration-300"
                >
                  <div className="text-5xl mb-3">{item.emoji}</div>
                  <div className="text-3xl font-bold text-pastel-600 mb-1">{item.letter || item.word}</div>
                  {item.letter && <h4 className="text-lg font-semibold text-warm-800 mb-1">{item.word}</h4>}
                  <p className="text-warm-600 text-sm">{item.meaning}</p>
                  {item.phonetic && (
                    <p className="text-warm-400 text-xs mt-1 italic">{item.phonetic}</p>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        );

      case 'practice':
        if (practiceComplete) {
          const total = lessonData.content.length;
          const bonusXP = practiceScore * 10;
          return (
            <div className="text-center">
              <h3 className="text-3xl font-bold text-warm-800 mb-6 font-display">Quiz Complete!</h3>
              <div className="max-w-md mx-auto card">
                <div className="text-6xl mb-4">{practiceScore === total ? '🎉' : practiceScore >= total / 2 ? '👏' : '💪'}</div>
                <p className="text-2xl font-bold text-pastel-600 mb-2">
                  {practiceScore} / {total} correct
                </p>
                <p className="text-warm-600 mb-4">
                  {practiceScore === total
                    ? 'Tuyệt vời! Perfect score!'
                    : practiceScore >= total / 2
                    ? 'Giỏi lắm! Good job!'
                    : 'Cố gắng hơn nhé! Keep trying!'}
                </p>
                {bonusXP > 0 && (
                  <p className="text-cream-600 font-semibold mb-4">+{bonusXP} bonus XP!</p>
                )}
                <button onClick={handleComplete} className="btn-primary">
                  Complete Lesson
                </button>
              </div>
            </div>
          );
        }

        const questions = lessonData.content;
        if (!Array.isArray(questions) || questions.length === 0) {
          return <div className="text-center text-warm-600">No questions available.</div>;
        }
        const currentQ = questions[practiceStep];

        return (
          <div className="text-center">
            <h3 className="text-3xl font-bold text-warm-800 mb-4 font-display">{lessonData.title}</h3>
            {/* Progress dots */}
            <div className="flex justify-center gap-2 mb-6">
              {questions.map((_, i) => (
                <div
                  key={i}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    i === practiceStep ? 'bg-pastel-500' : i < practiceStep ? 'bg-cream-400' : 'bg-warm-300'
                  }`}
                />
              ))}
            </div>
            <div className="max-w-2xl mx-auto">
              <div className="card mb-6">
                <p className="text-sm text-warm-500 mb-2">
                  Question {practiceStep + 1} of {questions.length}
                </p>
                <h4 className="text-xl font-semibold text-warm-800 mb-6">{currentQ.question}</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {currentQ.options.map((option, index) => {
                    let btnClass = "p-4 border-2 rounded-lg transition-all duration-200 text-left font-medium ";
                    if (selectedAnswer === null) {
                      btnClass += "border-pastel-200 hover:border-pastel-500 hover:bg-pastel-50 cursor-pointer";
                    } else if (index === currentQ.correct) {
                      btnClass += "border-green-400 bg-green-50 text-green-800";
                    } else if (index === selectedAnswer && !isCorrect) {
                      btnClass += "border-red-400 bg-red-50 text-red-800";
                    } else {
                      btnClass += "border-warm-200 opacity-50";
                    }

                    return (
                      <button
                        key={index}
                        className={btnClass}
                        onClick={() => handleAnswerSelect(index)}
                        disabled={selectedAnswer !== null}
                      >
                        <span className="mr-2 text-warm-400">{String.fromCharCode(65 + index)}.</span>
                        {option}
                      </button>
                    );
                  })}
                </div>

                {/* Feedback */}
                {selectedAnswer !== null && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`mt-6 p-4 rounded-lg ${
                      isCorrect ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'
                    }`}
                  >
                    <p className={`font-semibold mb-1 ${isCorrect ? 'text-green-700' : 'text-red-700'}`}>
                      {isCorrect ? '✓ Correct! / Đúng rồi!' : '✗ Wrong / Sai rồi!'}
                    </p>
                    {currentQ.explanation && (
                      <p className="text-warm-600 text-sm">{currentQ.explanation}</p>
                    )}
                    <button
                      onClick={handleNextQuestion}
                      className="mt-3 px-6 py-2 bg-pastel-500 text-white rounded-full font-medium hover:bg-pastel-600 transition-colors"
                    >
                      {practiceStep < questions.length - 1 ? 'Next Question →' : 'See Results'}
                    </button>
                  </motion.div>
                )}
              </div>
            </div>
          </div>
        );

      case 'speak': {
        const speakContent = lessonData.content;
        if (!speakContent || !speakContent.items) {
          return (
            <div className="text-center">
              <h3 className="text-3xl font-bold text-warm-800 mb-8 font-display">{lessonData.title}</h3>
              <p className="text-warm-600">{typeof speakContent === 'string' ? speakContent : 'No speaking content available.'}</p>
            </div>
          );
        }

        const items = speakContent.items;
        const currentItem = items[speakStep];

        return (
          <div className="text-center">
            <h3 className="text-3xl font-bold text-warm-800 mb-4 font-display">{lessonData.title}</h3>
            <p className="text-warm-600 mb-6 italic">{speakContent.instruction}</p>

            {/* Progress dots */}
            <div className="flex justify-center gap-2 mb-6">
              {items.map((_, i) => (
                <div
                  key={i}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    i === speakStep ? 'bg-pastel-500' : i < speakStep ? 'bg-cream-400' : 'bg-warm-300'
                  }`}
                />
              ))}
            </div>

            <div className="max-w-2xl mx-auto">
              <div className="card p-8">
                <div className="text-6xl mb-4">🎤</div>
                <h4 className="text-2xl font-bold text-warm-800 mb-2">{currentItem.text}</h4>
                {currentItem.phonetic && (
                  <p className="text-pastel-500 text-lg italic mb-2">{currentItem.phonetic}</p>
                )}
                <p className="text-warm-600 mb-6">{currentItem.meaning}</p>

                <div className="flex justify-center gap-4 mb-6">
                  <button
                    onClick={() => speak(currentItem.text, 1)}
                    disabled={isSpeaking}
                    className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                      isSpeaking ? 'bg-warm-300 text-warm-500' : 'bg-pastel-500 text-white hover:bg-pastel-600'
                    }`}
                  >
                    {isSpeaking ? '🔊 Playing...' : '🔊 Listen'}
                  </button>
                  <button
                    onClick={() => speak(currentItem.text, 0.6)}
                    disabled={isSpeaking}
                    className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                      isSpeaking ? 'bg-warm-300 text-warm-500' : 'bg-cream-500 text-white hover:bg-cream-600'
                    }`}
                  >
                    🐢 Slow
                  </button>
                </div>

                <p className="text-sm text-warm-400 mb-4">
                  Repeat after listening! / Lặp lại sau khi nghe!
                </p>

                {/* Speak Navigation */}
                <div className="flex justify-between items-center mt-4">
                  <button
                    onClick={handlePrevSpeak}
                    disabled={speakStep === 0}
                    className={`px-4 py-2 rounded-full text-sm font-medium ${
                      speakStep === 0 ? 'text-warm-400' : 'text-pastel-600 hover:bg-pastel-50'
                    }`}
                  >
                    ← Previous
                  </button>
                  <span className="text-warm-500 text-sm">{speakStep + 1} / {items.length}</span>
                  {speakStep < items.length - 1 ? (
                    <button
                      onClick={handleNextSpeak}
                      className="px-4 py-2 rounded-full text-sm font-medium text-pastel-600 hover:bg-pastel-50"
                    >
                      Next →
                    </button>
                  ) : (
                    <button
                      onClick={handleComplete}
                      className="px-4 py-2 rounded-full text-sm font-medium bg-pastel-500 text-white hover:bg-pastel-600"
                    >
                      Complete
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        );
      }

      default:
        return (
          <div className="text-center">
            <h3 className="text-3xl font-bold text-warm-800 mb-8 font-display">{lessonData.title}</h3>
            <div className="max-w-md mx-auto card">
              <div className="text-6xl mb-4">🚧</div>
              <p className="text-lg text-warm-600">{typeof lessonData.content === 'string' ? lessonData.content : 'This lesson is coming soon!'}</p>
            </div>
          </div>
        );
    }
  };

  if (!lessonData) {
    return <div className="text-center py-20 text-warm-600">Loading...</div>;
  }

  const isLessonCompleted = appState.completedLessons[`${weekId}-${dayId}-${lessonId}`];

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
            <p className="text-warm-600">Week {weekId} • Day {dayId} • {lessonData.type === 'learn' ? '📖 Learn' : lessonData.type === 'practice' ? '✏️ Practice' : '🎤 Speak'}</p>
          </div>

          <div className="text-right">
            {isLessonCompleted && (
              <span className="inline-block px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                ✓ Done
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Lesson Content */}
      <div className="card p-8 mb-8">
        {renderLessonContent()}
      </div>

      {/* Bottom action for learn type */}
      {lessonData.type === 'learn' && (
        <div className="flex justify-center">
          <button onClick={handleNext} className="btn-primary text-lg px-8 py-3">
            {isLessonCompleted ? 'Review Complete ✓' : 'Complete Lesson →'}
          </button>
        </div>
      )}
    </motion.div>
  );
};

export default Lesson;
