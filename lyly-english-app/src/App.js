import React, { useState, useEffect, useCallback } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// Import week components
import Welcome from './components/Welcome';
import WeekSelector from './components/WeekSelector';
import WeekDashboard from './components/WeekDashboard';
import Lesson from './components/Lesson';
import Progress from './components/Progress';

// App state context
export const AppContext = React.createContext();

function App() {
  const [appState, setAppState] = useState({
    currentWeek: 1,
    currentDay: 1,
    totalXP: 0,
    daysActive: 0,
    lessonsCompleted: 0,
    achievements: [],
    weeklyStreak: 0,
    completedLessons: {},
    lastActiveDate: null,
  });

  useEffect(() => {
    const savedProgress = localStorage.getItem('lylyProgress');
    if (savedProgress) {
      try {
        const parsed = JSON.parse(savedProgress);
        setAppState(prev => ({ ...prev, ...parsed }));
      } catch (e) {
        // ignore corrupt data
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('lylyProgress', JSON.stringify(appState));
  }, [appState]);

  const updateAppState = (updates) => {
    setAppState(prev => ({ ...prev, ...updates }));
  };

  const completeLesson = useCallback((weekId, dayId, lessonId) => {
    setAppState(prev => {
      const key = `${weekId}-${dayId}-${lessonId}`;

      // Prevent double-counting
      if (prev.completedLessons[key]) {
        return prev;
      }

      const newCompleted = { ...prev.completedLessons, [key]: true };

      // Check if all 3 lessons in the day are done
      const allDayLessons = [1, 2, 3].every(
        lid => newCompleted[`${weekId}-${dayId}-${lid}`]
      );

      let newDay = prev.currentDay;
      let newWeek = prev.currentWeek;

      if (allDayLessons && weekId === prev.currentWeek && dayId === prev.currentDay) {
        if (dayId >= 5) {
          // Week complete — advance to next week
          if (weekId < 12) {
            newWeek = prev.currentWeek + 1;
            newDay = 1;
          }
        } else {
          newDay = prev.currentDay + 1;
        }
      }

      // Streak tracking
      const today = new Date().toISOString().split('T')[0];
      let newStreak = prev.weeklyStreak;
      let newDaysActive = prev.daysActive;
      if (prev.lastActiveDate !== today) {
        newDaysActive = prev.daysActive + 1;
        const yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1);
        const yesterdayStr = yesterday.toISOString().split('T')[0];
        if (prev.lastActiveDate === yesterdayStr) {
          newStreak = prev.weeklyStreak + 1;
        } else if (!prev.lastActiveDate) {
          newStreak = 1;
        } else {
          newStreak = 1;
        }
      }

      return {
        ...prev,
        completedLessons: newCompleted,
        currentWeek: newWeek,
        currentDay: newDay,
        totalXP: prev.totalXP + 25,
        lessonsCompleted: prev.lessonsCompleted + 1,
        daysActive: newDaysActive,
        weeklyStreak: newStreak,
        lastActiveDate: today,
      };
    });
  }, []);

  return (
    <AppContext.Provider value={{ appState, updateAppState, completeLesson }}>
      <Router>
        <div className="min-h-screen bg-gradient-to-br from-pastel-50 via-pastel-100 to-pastel-200 relative overflow-hidden">
          {/* Pink decorative background elements */}
          <div className="absolute inset-0 bg-pink-dots opacity-10"></div>
          <div className="absolute top-0 left-0 w-96 h-96 bg-pink-blush opacity-60"></div>
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-pink-blush opacity-50"></div>
          <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-pink-blush opacity-40"></div>
          <div className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-pink-blush opacity-45"></div>

          {/* Floating Pink Hearts Background */}
          <div className="absolute top-10 left-10 text-4xl text-pastel-400 animate-pink-float opacity-70 pointer-events-none">💖</div>
          <div className="absolute top-20 right-20 text-3xl text-pastel-300 animate-float opacity-80 pointer-events-none">💕</div>
          <div className="absolute top-32 left-1/3 text-5xl text-pastel-500 animate-pink-glow opacity-60 pointer-events-none">💗</div>
          <div className="absolute top-40 right-1/4 text-2xl text-pastel-400 animate-gentle-bounce opacity-75 pointer-events-none">💝</div>
          <div className="absolute top-1/2 left-16 text-4xl text-pastel-300 animate-pink-float opacity-70 pointer-events-none">💖</div>
          <div className="absolute top-1/2 right-16 text-3xl text-pastel-500 animate-float opacity-80 pointer-events-none">💕</div>
          <div className="absolute top-2/3 left-1/4 text-4xl text-pastel-400 animate-pink-glow opacity-65 pointer-events-none">💗</div>
          <div className="absolute top-2/3 right-1/3 text-2xl text-pastel-300 animate-gentle-bounce opacity-75 pointer-events-none">💝</div>
          <div className="absolute bottom-20 left-20 text-4xl text-pastel-500 animate-pink-float opacity-70 pointer-events-none">💖</div>
          <div className="absolute bottom-32 right-24 text-3xl text-pastel-400 animate-float opacity-80 pointer-events-none">💕</div>
          <div className="absolute bottom-40 left-1/3 text-5xl text-pastel-300 animate-pink-glow opacity-60 pointer-events-none">💗</div>
          <div className="absolute bottom-16 right-1/4 text-2xl text-pastel-500 animate-gentle-bounce opacity-75 pointer-events-none">💝</div>

          {/* Additional floating hearts in corners */}
          <div className="absolute top-5 left-5 text-2xl text-pastel-400 animate-pink-float opacity-60 pointer-events-none">💖</div>
          <div className="absolute top-5 right-5 text-2xl text-pastel-300 animate-float opacity-70 pointer-events-none">💕</div>
          <div className="absolute bottom-5 left-5 text-2xl text-pastel-500 animate-pink-glow opacity-65 pointer-events-none">💗</div>
          <div className="absolute bottom-5 right-5 text-2xl text-pastel-400 animate-gentle-bounce opacity-70 pointer-events-none">💝</div>

          {/* Floating hearts in middle areas */}
          <div className="absolute top-1/3 left-1/2 text-3xl text-pastel-400 animate-pink-float opacity-60 pointer-events-none">💖</div>
          <div className="absolute top-1/2 right-1/3 text-4xl text-pastel-300 animate-float opacity-70 pointer-events-none">💕</div>
          <div className="absolute bottom-1/3 left-1/2 text-3xl text-pastel-500 animate-pink-glow opacity-65 pointer-events-none">💗</div>
          <div className="absolute bottom-1/2 right-1/2 text-4xl text-pastel-400 animate-gentle-bounce opacity-70 pointer-events-none">💝</div>

          {/* More floating hearts for extra pinkness */}
          <div className="absolute top-16 left-1/4 text-3xl text-pastel-400 animate-pink-float opacity-55 pointer-events-none">💖</div>
          <div className="absolute top-24 right-1/3 text-4xl text-pastel-300 animate-float opacity-65 pointer-events-none">💕</div>
          <div className="absolute top-36 left-2/3 text-2xl text-pastel-500 animate-pink-glow opacity-70 pointer-events-none">💗</div>
          <div className="absolute top-44 right-2/3 text-3xl text-pastel-400 animate-gentle-bounce opacity-60 pointer-events-none">💝</div>
          <div className="absolute bottom-24 left-1/3 text-4xl text-pastel-300 animate-pink-float opacity-65 pointer-events-none">💖</div>
          <div className="absolute bottom-36 right-1/2 text-3xl text-pastel-500 animate-float opacity-70 pointer-events-none">💕</div>
          <div className="absolute bottom-28 left-2/3 text-2xl text-pastel-400 animate-pink-glow opacity-55 pointer-events-none">💗</div>
          <div className="absolute bottom-44 right-1/3 text-4xl text-pastel-300 animate-gentle-bounce opacity-65 pointer-events-none">💝</div>

          <AppContent />
        </div>
      </Router>
    </AppContext.Provider>
  );
}

function AppContent() {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <>
      {/* Header */}
      <header className="bg-gradient-to-r from-pastel-500 via-pastel-600 to-pastel-700 text-white shadow-pink-glow relative z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <h1 className="text-2xl font-bold flex items-center gap-3">
              <span className="text-pastel-100 animate-pink-float">❤️</span>
              <span className="font-handwriting text-3xl">LyLy's English Journey</span>
            </h1>
            <nav className="flex gap-4">
              <button
                onClick={() => navigate('/')}
                className="hover:bg-white/20 px-3 py-2 rounded-lg transition-colors duration-200"
              >
                Home
              </button>
              <button
                onClick={() => navigate('/weeks')}
                className="hover:bg-white/20 px-3 py-2 rounded-lg transition-colors duration-200"
              >
                Weeks
              </button>
              <button
                onClick={() => navigate('/progress')}
                className="hover:bg-white/20 px-3 py-2 rounded-lg transition-colors duration-200"
              >
                Progress
              </button>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative">
        {/* Enhanced decorative elements with more pink */}
        <div className="absolute top-0 right-0 w-40 h-40 bg-wavy-pattern bg-no-repeat bg-contain opacity-80 animate-pink-float pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-brush-stroke bg-no-repeat bg-contain opacity-90 animate-pink-glow pointer-events-none"></div>
        <div className="absolute top-1/3 left-0 w-24 h-24 bg-brush-stroke bg-no-repeat bg-contain opacity-70 animate-float pointer-events-none"></div>
        <div className="absolute bottom-1/3 right-0 w-28 h-28 bg-wavy-pattern bg-no-repeat bg-contain opacity-75 animate-gentle-bounce pointer-events-none"></div>

        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Welcome />} />
            <Route path="/weeks" element={<WeekSelector />} />
            <Route path="/week/:weekId" element={<WeekDashboard />} />
            <Route path="/lesson/:weekId/:dayId/:lessonId" element={<Lesson />} />
            <Route path="/progress" element={<Progress />} />
          </Routes>
        </AnimatePresence>
      </main>
    </>
  );
}

export default App;
