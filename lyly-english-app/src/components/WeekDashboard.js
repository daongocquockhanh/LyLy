import React, { useContext, useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { AppContext } from '../App';

const WeekDashboard = () => {
  const { weekId } = useParams();
  const navigate = useNavigate();
  const { appState } = useContext(AppContext);
  const [weekData, setWeekData] = useState(null);

  useEffect(() => {
    // Load week data based on weekId
    const week = getWeekData(parseInt(weekId));
    setWeekData(week);
  }, [weekId]);

  const getWeekData = (weekId) => {
    const weeks = {
      1: {
        title: "Alphabet & Greetings",
        goal: "Learn alphabet, numbers, and basic greetings",
        icon: "🔤",
        days: [
          { id: 1, title: "Alphabet & Pronunciation", lessons: ["Learn Letters", "Practice Letters", "Say Letters"] },
          { id: 2, title: "Numbers 1-20", lessons: ["Learn Numbers", "Count Numbers", "Say Numbers"] },
          { id: 3, title: "Basic Greetings", lessons: ["Learn Greetings", "Practice Greetings", "Say Greetings"] },
          { id: 4, title: "Self Introduction", lessons: ["Learn Introduction", "Practice Introduction", "Introduce Yourself"] },
          { id: 5, title: "Week 1 Review", lessons: ["Review Week 1", "Week 1 Quiz"] }
        ]
      },
      2: {
        title: "Family & Objects",
        goal: "Learn family members and common objects",
        icon: "👨‍👩‍👧‍👦",
        days: [
          { id: 1, title: "Family Members", lessons: ["Learn Family", "Practice Family", "Talk About Family"] },
          { id: 2, title: "House Objects", lessons: ["Learn Objects", "Practice Objects", "Name Objects"] },
          { id: 3, title: "This/That/These/Those", lessons: ["Learn This/That", "Practice This/That", "Use This/That"] },
          { id: 4, title: "Numbers 21-100 & Age", lessons: ["Learn More Numbers", "Practice Numbers", "Say Your Age"] },
          { id: 5, title: "Family Role-Play", lessons: ["Introduce Family", "Family Conversation"] }
        ]
      },
      3: {
        title: "Colors, Days & Questions",
        goal: "Learn colors, days of week, and basic questions",
        icon: "🎨",
        days: [
          { id: 1, title: "Colors", lessons: ["Learn Colors", "Practice Colors", "Name Colors"] },
          { id: 2, title: "Days of the Week", lessons: ["Learn Days", "Practice Days", "Say Days"] },
          { id: 3, title: "What is this?", lessons: ["Learn Questions", "Practice Questions", "Ask Questions"] },
          { id: 4, title: "How many?", lessons: ["Learn Counting Questions", "Practice Counting", "Ask How Many"] },
          { id: 5, title: "Week 3 Review Game", lessons: ["Fun Review Game", "Week 3 Quiz"] }
        ]
      }
      // Add more weeks as needed
    };
    return weeks[weekId] || weeks[1];
  };

  const getDayStatus = (dayId) => {
    if (parseInt(weekId) < appState.currentWeek) return 'completed';
    if (parseInt(weekId) === appState.currentWeek && dayId <= appState.currentDay) return 'available';
    return 'locked';
  };

  const handleDayClick = (dayId) => {
    const status = getDayStatus(dayId);
    if (status !== 'locked') {
      navigate(`/lesson/${weekId}/${dayId}/1`);
    }
  };

  const handleLessonClick = (dayId, lessonIndex) => {
    navigate(`/lesson/${weekId}/${dayId}/${lessonIndex + 1}`);
  };

  if (!weekData) {
    return <div>Loading...</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="max-w-6xl mx-auto"
    >
      {/* Week Header */}
      <div className="text-center mb-12">
        <motion.div
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          className="text-6xl mb-4"
        >
          {weekData.icon}
        </motion.div>
        <h1 className="text-4xl md:text-5xl font-bold text-warm-800 mb-4 bg-gradient-to-r from-pastel-600 to-pastel-700 bg-clip-text text-transparent font-display">
          Week {weekId}: {weekData.title}
        </h1>
        <p className="text-xl text-warm-600 max-w-3xl mx-auto">
          {weekData.goal}
        </p>
      </div>

      {/* Week Progress */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="progress-card mb-8"
      >
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold text-warm-700">Week Progress</h3>
            <p className="text-2xl font-bold text-pastel-600">
              {Math.round((appState.currentDay - 1) / 5 * 100)}% Complete
            </p>
          </div>
          <div className="flex gap-4">
            <div className="text-center">
              <p className="text-sm text-warm-600">Current Day</p>
              <p className="text-xl font-bold text-pastel-600">{appState.currentDay}</p>
            </div>
            <div className="text-center">
              <p className="text-sm text-warm-600">Week XP</p>
              <p className="text-xl font-bold text-cream-600">{appState.totalXP}</p>
            </div>
          </div>
        </div>
        <div className="w-full bg-cream-200 rounded-full h-3 mt-4">
          <div 
            className="bg-gradient-to-r from-pastel-500 to-cream-500 h-3 rounded-full transition-all duration-500"
            style={{ width: `${Math.round((appState.currentDay - 1) / 5 * 100)}%` }}
          ></div>
        </div>
      </motion.div>

      {/* Days Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {weekData.days.map((day, index) => {
          const status = getDayStatus(day.id);
          
          return (
            <motion.div
              key={day.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`card ${status === 'completed' ? 'border-2 border-cream-400' : 
                         status === 'available' ? 'border-2 border-pastel-400' : 
                         'border-2 border-warm-300'}`}
            >
              {/* Day Header */}
              <div className="flex items-center gap-4 mb-4">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold ${
                  status === 'completed' 
                    ? 'bg-cream-500 text-white' 
                    : status === 'available' 
                    ? 'bg-pastel-500 text-white' 
                    : 'bg-warm-400 text-warm-600'
                }`}>
                  {day.id}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-warm-800">{day.title}</h3>
                  <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${
                    status === 'completed' 
                      ? 'bg-cream-100 text-cream-800' 
                      : status === 'available' 
                      ? 'bg-pastel-100 text-pastel-800' 
                      : 'bg-warm-100 text-warm-600'
                  }`}>
                    {status === 'completed' ? '✓ Completed' : 
                     status === 'available' ? '🔄 Available' : '🔒 Locked'}
                  </span>
                </div>
              </div>

              {/* Lessons List */}
              <div className="space-y-3">
                {day.lessons.map((lesson, lessonIndex) => (
                  <motion.div
                    key={lessonIndex}
                    whileHover={{ scale: status !== 'locked' ? 1.02 : 1 }}
                    className={`p-3 rounded-lg cursor-pointer transition-all duration-200 ${
                      status === 'completed' 
                        ? 'bg-cream-50 border border-cream-200' 
                        : status === 'available' 
                        ? 'bg-pastel-50 border border-pastel-200 hover:bg-pastel-100' 
                        : 'bg-warm-50 border border-warm-200'
                    }`}
                    onClick={() => status !== 'locked' && handleLessonClick(day.id, lessonIndex)}
                  >
                    <div className="flex items-center justify-between">
                      <span className={`font-medium ${
                        status === 'completed' 
                          ? 'text-cream-800' 
                          : status === 'available' 
                          ? 'text-pastel-800' 
                          : 'text-warm-600'
                      }`}>
                        {lessonIndex + 1}. {lesson}
                      </span>
                      {status === 'completed' && (
                        <span className="text-cream-600">✓</span>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Day Action Button */}
              <div className="mt-4 text-center">
                <button
                  onClick={() => handleDayClick(day.id)}
                  disabled={status === 'locked'}
                  className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
                    status === 'completed' 
                      ? 'bg-cream-500 text-white cursor-default' 
                      : status === 'available' 
                      ? 'btn-primary' 
                      : 'bg-warm-300 text-warm-500 cursor-not-allowed'
                  }`}
                >
                  {status === 'completed' ? 'Completed' : 
                   status === 'available' ? 'Start Day' : 'Locked'}
                </button>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Week Navigation */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="flex justify-between items-center mt-12"
      >
        <button
          onClick={() => navigate(`/week/${Math.max(1, parseInt(weekId) - 1)}`)}
          disabled={parseInt(weekId) === 1}
          className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
            parseInt(weekId) === 1 
              ? 'bg-warm-300 text-warm-500 cursor-not-allowed' 
              : 'btn-secondary'
          }`}
        >
          ← Previous Week
        </button>
        
        <button
          onClick={() => navigate('/weeks')}
          className="px-6 py-3 rounded-full font-medium bg-warm-100 text-warm-700 hover:bg-warm-200 transition-colors"
        >
          Back to Weeks
        </button>
        
        <button
          onClick={() => navigate(`/week/${Math.min(12, parseInt(weekId) + 1)}`)}
          disabled={parseInt(weekId) === 12}
          className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
            parseInt(weekId) === 12 
              ? 'bg-warm-300 text-warm-500 cursor-not-allowed' 
              : 'btn-primary'
          }`}
        >
          Next Week →
        </button>
      </motion.div>
    </motion.div>
  );
};

export default WeekDashboard;
