import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { AppContext } from '../App';

const Welcome = () => {
  const navigate = useNavigate();
  const { appState } = useContext(AppContext);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="text-center max-w-4xl mx-auto"
    >
      {/* Hero Section */}
      <motion.div
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.2 }}
        className="mb-12 relative"
      >
        {/* Floating hearts around the hero */}
        <div className="absolute -top-4 -left-4 text-3xl text-pastel-400 animate-pink-float opacity-70 pointer-events-none">💖</div>
        <div className="absolute -top-2 -right-4 text-2xl text-pastel-300 animate-float opacity-80 pointer-events-none">💕</div>
        <div className="absolute top-1/2 -left-8 text-4xl text-pastel-500 animate-pink-glow opacity-60 pointer-events-none">💗</div>
        <div className="absolute top-1/2 -right-8 text-3xl text-pastel-400 animate-gentle-bounce opacity-75 pointer-events-none">💝</div>
        
        <div className="text-8xl mb-6 animate-bounce-slow">🎓</div>
        <h1 className="text-5xl md:text-6xl font-bold text-pastel-700 mb-6 bg-gradient-to-r from-pastel-600 via-pastel-700 to-pastel-800 bg-clip-text text-transparent font-display">
          Welcome to Your English Adventure!
        </h1>
        <p className="text-xl md:text-2xl text-pastel-600 mb-8 leading-relaxed">
          12 weeks of fun English learning, designed just for you, LyLy! 
          <br />
          Let's start this amazing journey together. 🚀
        </p>
      </motion.div>

      {/* Progress Overview */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
      >
        <div className="card text-center bg-gradient-to-br from-pastel-50 to-pastel-100 border-pastel-300">
          <div className="text-3xl mb-2">📅</div>
          <h3 className="text-lg font-semibold text-pastel-700 mb-2">Current Week</h3>
          <p className="text-3xl font-bold text-pastel-600">{appState.currentWeek}</p>
        </div>
        
        <div className="card text-center bg-gradient-to-br from-pastel-100 to-pastel-200 border-pastel-400">
          <div className="text-3xl mb-2">⭐</div>
          <h3 className="text-lg font-semibold text-pastel-700 mb-2">Total XP</h3>
          <p className="text-3xl font-bold text-pastel-600">{appState.totalXP}</p>
        </div>
        
        <div className="card text-center bg-gradient-to-br from-pastel-200 to-pastel-300 border-pastel-500">
          <div className="text-3xl mb-2">🔥</div>
          <h3 className="text-lg font-semibold text-pastel-700 mb-2">Day Streak</h3>
          <p className="text-3xl font-bold text-pastel-600">{appState.daysActive}</p>
        </div>
      </motion.div>

      {/* Action Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="flex flex-col sm:flex-row gap-4 justify-center items-center"
      >
        <button
          onClick={() => navigate('/weeks')}
          className="btn-primary text-lg px-8 py-4"
        >
          🚀 Start Learning
        </button>
        
        <button
          onClick={() => navigate('/progress')}
          className="btn-secondary text-lg px-8 py-4"
        >
          📊 View Progress
        </button>
      </motion.div>

      {/* Learning Path Preview */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="mt-16"
      >
        <h2 className="text-3xl font-bold text-pastel-700 mb-8 font-display">Your Learning Path</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { title: "Month 1", desc: "Foundation & Basics", icon: "🌱" },
            { title: "Month 2", desc: "Practical Communication", icon: "💬" },
            { title: "Month 3", desc: "Everyday Life & Travel", icon: "✈️" },
            { title: "Final Project", desc: "Show What You Learned", icon: "🏆" }
          ].map((month, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8 + index * 0.1 }}
                              className="card text-center hover:scale-105 transition-transform duration-300 bg-gradient-to-br from-pastel-50 to-pastel-100 border-pastel-300"
            >
              <div className="text-4xl mb-3">{month.icon}</div>
                              <h3 className="text-lg font-semibold text-pastel-800 mb-2">{month.title}</h3>
                <p className="text-sm text-pastel-600">{month.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Motivation Quote */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="mt-16 p-6 bg-gradient-to-r from-pastel-200 to-pastel-300 rounded-2xl border-2 border-pastel-400 shadow-pink-glow"
      >
        <blockquote className="text-xl text-pastel-700 italic font-handwriting text-2xl">
          "Every expert was once a beginner. Your journey to English fluency starts with this first step!"
        </blockquote>
        <p className="text-right text-pastel-600 mt-2">- Your English Learning Journey</p>
      </motion.div>
    </motion.div>
  );
};

export default Welcome;
