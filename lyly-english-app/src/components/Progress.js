import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { AppContext } from '../App';

const Progress = () => {
  const navigate = useNavigate();
  const { appState } = useContext(AppContext);

  const achievements = [
    { name: "First Steps", icon: "⭐", description: "Complete your first lesson", unlocked: appState.lessonsCompleted >= 1 },
    { name: "Week Warrior", icon: "🔥", description: "Complete 5 lessons", unlocked: appState.lessonsCompleted >= 5 },
    { name: "Alphabet Master", icon: "🔤", description: "Complete Week 1", unlocked: appState.currentWeek > 1 },
    { name: "Consistent Learner", icon: "📅", description: "Learn for 7 days", unlocked: appState.daysActive >= 7 },
    { name: "XP Collector", icon: "💎", description: "Earn 100 XP", unlocked: appState.totalXP >= 100 },
    { name: "Halfway There", icon: "🎯", description: "Complete 6 weeks", unlocked: appState.currentWeek >= 6 }
  ];

  const unlockedAchievements = achievements.filter(a => a.unlocked);
  const lockedAchievements = achievements.filter(a => !a.unlocked);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="max-w-6xl mx-auto"
    >
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-pastel-700 mb-4 bg-gradient-to-r from-pastel-600 via-pastel-700 to-pastel-800 bg-clip-text text-transparent font-display">
          Your Learning Progress
        </h1>
        <p className="text-xl text-pastel-600">
          Track your achievements and see how far you've come!
        </p>
      </div>

      {/* Stats Overview */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
      >
        <div className="card text-center bg-gradient-to-br from-pastel-50 to-pastel-100 border-pastel-300">
          <div className="text-4xl mb-3">📅</div>
          <h3 className="text-lg font-semibold text-pastel-700 mb-2">Days Active</h3>
          <p className="text-3xl font-bold text-pastel-600">{appState.daysActive}</p>
        </div>
        
        <div className="card text-center bg-gradient-to-br from-pastel-100 to-pastel-200 border-pastel-400">
          <div className="text-4xl mb-3">⭐</div>
          <h3 className="text-lg font-semibold text-pastel-700 mb-2">Total XP</h3>
          <p className="text-3xl font-bold text-pastel-600">{appState.totalXP}</p>
        </div>
        
        <div className="card text-center bg-gradient-to-br from-pastel-200 to-pastel-300 border-pastel-500">
          <div className="text-4xl mb-3">📚</div>
          <h3 className="text-lg font-semibold text-pastel-700 mb-2">Current Week</h3>
          <p className="text-3xl font-bold text-pastel-600">{appState.currentWeek}</p>
        </div>
        
        <div className="card text-center bg-gradient-to-br from-pastel-300 to-pastel-400 border-pastel-600">
          <div className="text-4xl mb-3">🎯</div>
          <h3 className="text-lg font-semibold text-pastel-700 mb-2">Lessons Completed</h3>
          <p className="text-3xl font-bold text-pastel-600">{appState.lessonsCompleted}</p>
        </div>
      </motion.div>

      {/* Overall Progress */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="progress-card p-8 mb-12 bg-gradient-to-br from-pastel-100 to-pastel-200 border-pastel-300"
      >
        <h2 className="text-2xl font-bold text-pastel-700 mb-6 text-center font-display">Overall Journey Progress</h2>
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-between items-center mb-4">
            <span className="text-lg font-semibold text-pastel-700">Week {appState.currentWeek} of 12</span>
            <span className="text-lg font-bold text-pastel-600">
              {Math.round((appState.currentWeek - 1) / 12 * 100)}% Complete
            </span>
          </div>
          <div className="w-full bg-pastel-200 rounded-full h-4">
            <div 
              className="bg-gradient-to-r from-pastel-500 to-pastel-600 h-4 rounded-full transition-all duration-1000"
              style={{ width: `${Math.round((appState.currentWeek - 1) / 12 * 100)}%` }}
            ></div>
          </div>
          <div className="flex justify-between text-sm text-pastel-600 mt-2">
            <span>Week 1</span>
            <span>Week 12</span>
          </div>
        </div>
      </motion.div>

      {/* Achievements */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="progress-card p-8 mb-12 bg-gradient-to-br from-pastel-100 to-pastel-200 border-pastel-300"
      >
        <h2 className="text-2xl font-bold text-pastel-700 mb-6 text-center font-display">Achievements</h2>
        
        {/* Unlocked Achievements */}
        {unlockedAchievements.length > 0 && (
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-pastel-700 mb-4">🎉 Unlocked ({unlockedAchievements.length})</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {unlockedAchievements.map((achievement, index) => (
                <motion.div
                  key={achievement.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  className="bg-pastel-50 border-2 border-pastel-200 rounded-xl p-4 text-center"
                >
                  <div className="text-4xl mb-2">{achievement.icon}</div>
                  <h4 className="font-semibold text-pastel-800 mb-1">{achievement.name}</h4>
                  <p className="text-sm text-pastel-600">{achievement.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* Locked Achievements */}
        {lockedAchievements.length > 0 && (
          <div>
            <h3 className="text-lg font-semibold text-pastel-700 mb-4">🔒 Locked ({lockedAchievements.length})</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {lockedAchievements.map((achievement, index) => (
                <motion.div
                  key={achievement.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  className="bg-pastel-100 border-2 border-pastel-200 rounded-xl p-4 text-center opacity-60"
                >
                  <div className="text-4xl mb-2">{achievement.icon}</div>
                  <h4 className="font-semibold text-pastel-600 mb-1">{achievement.name}</h4>
                  <p className="text-sm text-pastel-500">{achievement.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </motion.div>

      {/* Learning Streak */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="bg-gradient-to-r from-pastel-200 to-pastel-300 rounded-2xl p-8 mb-12 text-center shadow-pink-glow border-2 border-pastel-400"
      >
        <div className="text-6xl mb-4">🔥</div>
        <h2 className="text-2xl font-bold text-pastel-700 mb-2">Learning Streak</h2>
        <p className="text-lg text-pastel-600 mb-4">
          You've been learning for <span className="font-bold text-pastel-600">{appState.daysActive}</span> days!
        </p>
        <div className="text-4xl font-bold text-pastel-600">{appState.daysActive}</div>
        <p className="text-sm text-pastel-500 mt-2">Keep up the great work!</p>
      </motion.div>

      {/* Action Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.0 }}
        className="flex flex-col sm:flex-row gap-4 justify-center items-center"
      >
        <button
          onClick={() => navigate('/weeks')}
          className="btn-primary text-lg px-8 py-4"
        >
          🚀 Continue Learning
        </button>
        
        <button
          onClick={() => navigate('/')}
          className="btn-secondary text-lg px-8 py-4"
        >
          🏠 Back to Home
        </button>
      </motion.div>
    </motion.div>
  );
};

export default Progress;
