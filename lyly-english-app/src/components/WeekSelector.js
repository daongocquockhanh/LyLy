import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { AppContext } from '../App';
import { weekMetadata } from '../data';

const WeekSelector = () => {
  const navigate = useNavigate();
  const { appState } = useContext(AppContext);

  const getWeekStatus = (weekId) => {
    if (weekId < appState.currentWeek) return 'completed';
    if (weekId === appState.currentWeek) return 'current';
    return 'locked';
  };

  const getWeekProgress = (weekId) => {
    if (weekId < appState.currentWeek) return 100;
    if (weekId > appState.currentWeek) return 0;
    // Current week: count completed lessons
    let count = 0;
    for (let d = 1; d <= 5; d++) {
      for (let l = 1; l <= 3; l++) {
        if (appState.completedLessons[`${weekId}-${d}-${l}`]) count++;
      }
    }
    return Math.round((count / 15) * 100);
  };

  const handleWeekClick = (weekId) => {
    const status = getWeekStatus(weekId);
    if (status !== 'locked') {
      navigate(`/week/${weekId}`);
    }
  };

  const totalCompleted = Object.keys(appState.completedLessons).length;
  const totalLessons = 180; // 12 weeks x 5 days x 3 lessons
  const overallProgress = Math.round((totalCompleted / totalLessons) * 100);

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
              {overallProgress}% Complete
            </p>
          </div>
          <div className="flex gap-4">
            <div className="text-center">
              <p className="text-sm text-pastel-600">Current Week</p>
              <p className="text-xl font-bold text-pastel-600">{appState.currentWeek}</p>
            </div>
            <div className="text-center">
              <p className="text-sm text-pastel-600">Lessons Done</p>
              <p className="text-xl font-bold text-pastel-600">{totalCompleted}</p>
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
            style={{ width: `${overallProgress}%` }}
          ></div>
        </div>
      </motion.div>

      {/* Weeks Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {weekMetadata.map((week, index) => {
          const status = getWeekStatus(week.id);
          const progress = getWeekProgress(week.id);

          return (
            <motion.div
              key={week.id}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05 }}
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
                    ? 'bg-green-100 text-green-800'
                    : status === 'current'
                    ? 'bg-pastel-200 text-pastel-800'
                    : 'bg-pastel-100 text-pastel-600'
                }`}>
                  {status === 'completed' ? '✓ Completed' :
                   status === 'current' ? `🔄 ${progress}% Done` : '🔒 Locked'}
                </span>
              </div>

              {/* Progress Bar */}
              <div className="w-full bg-pastel-200 rounded-full h-2 mb-4">
                <div
                  className={`h-2 rounded-full transition-all duration-500 ${
                    status === 'completed'
                      ? 'bg-green-500'
                      : status === 'current'
                      ? 'bg-pastel-500'
                      : 'bg-pastel-300'
                  }`}
                  style={{ width: `${progress}%` }}
                ></div>
              </div>

              {/* Week Number */}
              <div className="text-center">
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full text-lg font-bold ${
                  status === 'completed'
                    ? 'bg-green-500 text-white'
                    : status === 'current'
                    ? 'bg-pastel-500 text-white'
                    : 'bg-pastel-400 text-white'
                }`}>
                  {status === 'completed' ? '✓' : week.id}
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
        transition={{ delay: 0.8 }}
        className="text-center mt-12 p-6 bg-gradient-to-r from-pastel-100 to-pastel-200 rounded-2xl shadow-pink-soft border-2 border-pastel-300"
      >
        <h3 className="text-xl font-semibold text-pastel-800 mb-3">How to Navigate</h3>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-sm text-pastel-600">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-green-500 rounded-full"></div>
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
