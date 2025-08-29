import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { AppContext } from '../App';

const WeekSelector = () => {
  const navigate = useNavigate();
  const { appState } = useContext(AppContext);

  // 12-week syllabus data
  const weeks = [
    { id: 1, title: "Alphabet & Greetings", goal: "Learn alphabet, numbers, and basic greetings", icon: "🔤" },
    { id: 2, title: "Family & Objects", goal: "Learn family members and common objects", icon: "👨‍👩‍👧‍👦" },
    { id: 3, title: "Colors, Days & Questions", goal: "Learn colors, days of week, and basic questions", icon: "🎨" },
    { id: 4, title: "Daily Routine & Verbs", goal: "Learn common verbs and daily activities", icon: "⏰" },
    { id: 5, title: "Food & Drinks", goal: "Learn food vocabulary and ordering", icon: "🍕" },
    { id: 6, title: "Shopping & Clothes", goal: "Learn shopping vocabulary and clothing", icon: "🛍️" },
    { id: 7, title: "Places & Directions", goal: "Learn places in town and giving directions", icon: "🗺️" },
    { id: 8, title: "Weather & Activities", goal: "Learn weather vocabulary and outdoor activities", icon: "🌤️" },
    { id: 9, title: "Hobbies & Free Time", goal: "Learn hobbies and present continuous tense", icon: "🎯" },
    { id: 10, title: "Health & Body", goal: "Learn body parts and health vocabulary", icon: "🏥" },
    { id: 11, title: "Travel & Transport", goal: "Learn travel vocabulary and transport", icon: "✈️" },
    { id: 12, title: "Final Review & Project", goal: "Review everything and complete final project", icon: "🏆" }
  ];

  const getWeekStatus = (weekId) => {
    if (weekId < appState.currentWeek) return 'completed';
    if (weekId === appState.currentWeek) return 'current';
    return 'locked';
  };

  const getWeekProgress = (weekId) => {
    if (weekId < appState.currentWeek) return 100;
    if (weekId === appState.currentWeek) return 20; // Example progress
    return 0;
  };

  const handleWeekClick = (weekId) => {
    const status = getWeekStatus(weekId);
    console.log(`Week ${weekId} clicked, status: ${status}`);
    if (status !== 'locked') {
      console.log(`Navigating to /week/${weekId}`);
      navigate(`/week/${weekId}`);
    } else {
      console.log(`Week ${weekId} is locked, cannot navigate`);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="max-w-7xl mx-auto"
    >
      {/* Header */}
      <div className="text-center mb-12">
        <motion.h1
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          className="text-4xl md:text-5xl font-bold text-pastel-700 mb-4 bg-gradient-to-r from-pastel-600 via-pastel-700 to-pastel-800 bg-clip-text text-transparent font-display"
        >
          Choose Your Learning Week
        </motion.h1>
        <p className="text-xl text-pastel-600">
          Select a week to continue your English learning journey
        </p>
      </div>

      {/* Progress Overview */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="progress-card mb-8 bg-gradient-to-br from-pastel-100 to-pastel-200 border-pastel-300"
      >
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold text-pastel-700">Overall Progress</h3>
            <p className="text-2xl font-bold text-pastel-600">
              {Math.round((appState.currentWeek - 1) / 12 * 100)}% Complete
            </p>
          </div>
          <div className="flex gap-4">
            <div className="text-center">
              <p className="text-sm text-pastel-600">Current Week</p>
              <p className="text-xl font-bold text-pastel-600">{appState.currentWeek}</p>
            </div>
            <div className="text-center">
              <p className="text-sm text-pastel-600">Total XP</p>
              <p className="text-xl font-bold text-pastel-600">{appState.totalXP}</p>
            </div>
          </div>
        </div>
        <div className="w-full bg-pastel-200 rounded-full h-3 mt-4">
          <div 
            className="bg-gradient-to-r from-pastel-500 to-pastel-600 h-3 rounded-full transition-all duration-500"
            style={{ width: `${Math.round((appState.currentWeek - 1) / 12 * 100)}%` }}
          ></div>
        </div>
      </motion.div>

      {/* Weeks Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {weeks.map((week, index) => {
          const status = getWeekStatus(week.id);
          const progress = getWeekProgress(week.id);
          
          return (
            <motion.div
              key={week.id}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: status !== 'locked' ? 1.05 : 1 }}
              className={`week-card ${status} cursor-pointer`}
              onClick={() => handleWeekClick(week.id)}
            >
              {/* Week Header */}
              <div className="text-center mb-4">
                <div className="text-5xl mb-3">{week.icon}</div>
                <div className="text-3xl font-bold text-pastel-800 mb-2">Week {week.id}</div>
                <h3 className="text-lg font-semibold text-pastel-700 mb-2">{week.title}</h3>
              </div>

              {/* Week Goal */}
              <p className="text-sm text-pastel-600 mb-4 text-center leading-relaxed">
                {week.goal}
              </p>

              {/* Status Badge */}
              <div className="text-center mb-4">
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                  status === 'completed' 
                    ? 'bg-pastel-100 text-pastel-800' 
                    : status === 'current' 
                    ? 'bg-pastel-200 text-pastel-800' 
                    : 'bg-pastel-100 text-pastel-600'
                }`}>
                  {status === 'completed' ? '✓ Completed' : 
                   status === 'current' ? '🔄 In Progress' : '🔒 Locked'}
                </span>
              </div>

              {/* Progress Bar */}
              <div className="w-full bg-pastel-200 rounded-full h-2 mb-4">
                <div 
                  className={`h-2 rounded-full transition-all duration-500 ${
                    status === 'completed' 
                      ? 'bg-pastel-500' 
                      : status === 'current' 
                      ? 'bg-pastel-500' 
                      : 'bg-pastel-400'
                  }`}
                  style={{ width: `${progress}%` }}
                ></div>
              </div>

              {/* Week Number */}
              <div className="text-center">
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full text-lg font-bold ${
                  status === 'completed' 
                    ? 'bg-pastel-500 text-white' 
                    : status === 'current' 
                    ? 'bg-pastel-500 text-white' 
                    : 'bg-pastel-400 text-white'
                }`}>
                  {week.id}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Navigation Help */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="text-center mt-12 p-6 bg-gradient-to-r from-pastel-100 to-pastel-200 rounded-2xl shadow-pink-soft border-2 border-pastel-300"
      >
        <h3 className="text-xl font-semibold text-pastel-800 mb-3">How to Navigate</h3>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-sm text-pastel-600">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-pastel-500 rounded-full"></div>
            <span>Completed weeks</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-pastel-500 rounded-full"></div>
            <span>Current week</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-pastel-400 rounded-full"></div>
            <span>Locked weeks</span>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default WeekSelector;
