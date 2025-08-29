// App State
let currentScreen = 'welcome';
let currentWeek = 1;
let currentDay = 1;
let currentLesson = 0;
let currentQuestion = 0;
let totalPoints = 0;
let currentLevel = 1;
let daysActive = 0;
let lessonsCompleted = 0;
let achievements = [];
let weeklyStreak = 0;
let totalXP = 0;

// Comprehensive 12-Week Syllabus Data
const weeklySyllabus = [
    // Week 1: Alphabet & Greetings
    {
        week: 1,
        title: "Alphabet & Greetings",
        goal: "Learn alphabet, numbers, and basic greetings",
        days: [
            {
                day: 1,
                title: "Alphabet & Pronunciation",
                lessons: [
                    { type: "learn", content: "alphabet", title: "Learn the Alphabet", duration: "15 min" },
                    { type: "practice", content: "alphabet_quiz", title: "Practice Letters", duration: "10 min" },
                    { type: "speak", content: "alphabet_speak", title: "Say the Letters", duration: "5 min" }
                ]
            },
            {
                day: 2,
                title: "Numbers 1-20",
                lessons: [
                    { type: "learn", content: "numbers", title: "Learn Numbers", duration: "15 min" },
                    { type: "practice", content: "numbers_quiz", title: "Count Numbers", duration: "10 min" },
                    { type: "speak", content: "numbers_speak", title: "Say Numbers", duration: "5 min" }
                ]
            },
            {
                day: 3,
                title: "Basic Greetings",
                lessons: [
                    { type: "learn", content: "greetings", title: "Learn Greetings", duration: "15 min" },
                    { type: "practice", content: "greetings_quiz", title: "Practice Greetings", duration: "10 min" },
                    { type: "speak", content: "greetings_speak", title: "Say Greetings", duration: "5 min" }
                ]
            },
            {
                day: 4,
                title: "Self Introduction",
                lessons: [
                    { type: "learn", content: "introduction", title: "Learn Introduction", duration: "15 min" },
                    { type: "practice", content: "introduction_quiz", title: "Practice Introduction", duration: "10 min" },
                    { type: "speak", content: "introduction_speak", title: "Introduce Yourself", duration: "5 min" }
                ]
            },
            {
                day: 5,
                title: "Week 1 Review",
                lessons: [
                    { type: "review", content: "week1_review", title: "Review Week 1", duration: "20 min" },
                    { type: "quiz", content: "week1_quiz", title: "Week 1 Quiz", duration: "10 min" }
                ]
            }
        ]
    },
    // Week 2: Family & Objects
    {
        week: 2,
        title: "Family & Objects",
        goal: "Learn family members and common objects",
        days: [
            {
                day: 1,
                title: "Family Members",
                lessons: [
                    { type: "learn", content: "family", title: "Learn Family", duration: "15 min" },
                    { type: "practice", content: "family_quiz", title: "Practice Family", duration: "10 min" },
                    { type: "speak", content: "family_speak", title: "Talk About Family", duration: "5 min" }
                ]
            },
            {
                day: 2,
                title: "House Objects",
                lessons: [
                    { type: "learn", content: "objects", title: "Learn Objects", duration: "15 min" },
                    { type: "practice", content: "objects_quiz", title: "Practice Objects", duration: "10 min" },
                    { type: "speak", content: "objects_speak", title: "Name Objects", duration: "5 min" }
                ]
            },
            {
                day: 3,
                title: "This/That/These/Those",
                lessons: [
                    { type: "learn", content: "demonstratives", title: "Learn This/That", duration: "15 min" },
                    { type: "practice", content: "demonstratives_quiz", title: "Practice This/That", duration: "10 min" },
                    { type: "speak", content: "demonstratives_speak", title: "Use This/That", duration: "5 min" }
                ]
            },
            {
                day: 4,
                title: "Numbers 21-100 & Age",
                lessons: [
                    { type: "learn", content: "numbers_extended", title: "Learn More Numbers", duration: "15 min" },
                    { type: "practice", content: "numbers_extended_quiz", title: "Practice Numbers", duration: "10 min" },
                    { type: "speak", content: "numbers_extended_speak", title: "Say Your Age", duration: "5 min" }
                ]
            },
            {
                day: 5,
                title: "Family Role-Play",
                lessons: [
                    { type: "roleplay", content: "family_intro", title: "Introduce Family", duration: "20 min" },
                    { type: "speak", content: "family_conversation", title: "Family Conversation", duration: "10 min" }
                ]
            }
        ]
    },
    // Week 3: Colors, Days, Questions
    {
        week: 3,
        title: "Colors, Days & Questions",
        goal: "Learn colors, days of week, and basic questions",
        days: [
            {
                day: 1,
                title: "Colors",
                lessons: [
                    { type: "learn", content: "colors", title: "Learn Colors", duration: "15 min" },
                    { type: "practice", content: "colors_quiz", title: "Practice Colors", duration: "10 min" },
                    { type: "speak", content: "colors_speak", title: "Name Colors", duration: "5 min" }
                ]
            },
            {
                day: 2,
                title: "Days of the Week",
                lessons: [
                    { type: "learn", content: "days", title: "Learn Days", duration: "15 min" },
                    { type: "practice", content: "days_quiz", title: "Practice Days", duration: "10 min" },
                    { type: "speak", content: "days_speak", title: "Say Days", duration: "5 min" }
                ]
            },
            {
                day: 3,
                title: "What is this?",
                lessons: [
                    { type: "learn", content: "questions_basic", title: "Learn Questions", duration: "15 min" },
                    { type: "practice", content: "questions_basic_quiz", title: "Practice Questions", duration: "10 min" },
                    { type: "speak", content: "questions_basic_speak", title: "Ask Questions", duration: "5 min" }
                ]
            },
            {
                day: 4,
                title: "How many?",
                lessons: [
                    { type: "learn", content: "counting_questions", title: "Learn Counting Questions", duration: "15 min" },
                    { type: "practice", content: "counting_questions_quiz", title: "Practice Counting", duration: "10 min" },
                    { type: "speak", content: "counting_questions_speak", title: "Ask How Many", duration: "5 min" }
                ]
            },
            {
                day: 5,
                title: "Week 3 Review Game",
                lessons: [
                    { type: "game", content: "week3_game", title: "Fun Review Game", duration: "20 min" },
                    { type: "quiz", content: "week3_quiz", title: "Week 3 Quiz", duration: "10 min" }
                ]
            }
        ]
    }
    // Additional weeks would continue here...
];

// Lesson Content Data
const lessonContent = {
    alphabet: {
        title: "The English Alphabet",
        words: [
            { letter: "A", word: "Apple", meaning: "Quả táo", image: "🍎" },
            { letter: "B", word: "Ball", meaning: "Quả bóng", image: "⚽" },
            { letter: "C", word: "Cat", meaning: "Con mèo", image: "🐱" },
            { letter: "D", word: "Dog", meaning: "Con chó", image: "🐕" },
            { letter: "E", word: "Elephant", meaning: "Con voi", image: "🐘" }
        ]
    },
    numbers: {
        title: "Numbers 1-20",
        words: [
            { number: "1", word: "One", meaning: "Một", image: "1️⃣" },
            { number: "2", word: "Two", meaning: "Hai", image: "2️⃣" },
            { number: "3", word: "Three", meaning: "Ba", image: "3️⃣" },
            { number: "4", word: "Four", meaning: "Bốn", image: "4️⃣" },
            { number: "5", word: "Five", meaning: "Năm", image: "5️⃣" }
        ]
    },
    greetings: {
        title: "Basic Greetings",
        words: [
            { word: "Hello", meaning: "Xin chào", image: "👋" },
            { word: "Goodbye", meaning: "Tạm biệt", image: "👋" },
            { word: "Good morning", meaning: "Chào buổi sáng", image: "🌅" },
            { word: "Good afternoon", meaning: "Chào buổi chiều", image: "☀️" },
            { word: "Good night", meaning: "Chúc ngủ ngon", image: "🌙" }
        ]
    }
};

// Initialize the app
document.addEventListener('DOMContentLoaded', function() {
    loadProgress();
    updateDisplay();
    initializeDashboard();
});

// Dashboard Functions
function initializeDashboard() {
    const dashboard = document.getElementById('dashboardScreen');
    if (dashboard) {
        renderDashboard();
    }
}

function renderDashboard() {
    const dashboard = document.getElementById('dashboardScreen');
    if (!dashboard) return;

    const currentWeekData = weeklySyllabus[currentWeek - 1];
    const currentDayData = currentWeekData.days[currentDay - 1];

    dashboard.innerHTML = `
        <div class="dashboard-header">
            <h2>Your English Journey</h2>
            <div class="progress-overview">
                <div class="week-progress">
                    <span>Week ${currentWeek} of 12</span>
                    <div class="progress-bar">
                        <div class="progress-fill" style="width: ${(currentWeek / 12) * 100}%"></div>
                    </div>
                </div>
                <div class="streak-info">
                    <span>🔥 ${weeklyStreak} day streak</span>
                </div>
            </div>
        </div>

        <div class="current-week">
            <h3>${currentWeekData.title}</h3>
            <p>${currentWeekData.goal}</p>
            
            <div class="week-days">
                ${currentWeekData.days.map((day, index) => `
                    <div class="day-item ${index + 1 === currentDay ? 'current' : index + 1 < currentDay ? 'completed' : 'upcoming'}">
                        <div class="day-number">${day.day}</div>
                        <div class="day-info">
                            <span class="day-title">${day.title}</span>
                            <span class="day-status">
                                ${index + 1 === currentDay ? 'Today' : index + 1 < currentDay ? '✓ Completed' : 'Coming up'}
                            </span>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>

        <div class="today-lesson">
            <h3>Today's Lesson: ${currentDayData.title}</h3>
            <div class="lesson-modules">
                ${currentDayData.lessons.map((lesson, index) => `
                    <div class="lesson-module ${lesson.type}">
                        <div class="module-icon">
                            ${getModuleIcon(lesson.type)}
                        </div>
                        <div class="module-info">
                            <h4>${lesson.title}</h4>
                            <span class="duration">${lesson.duration}</span>
                        </div>
                        <button class="btn btn-primary" onclick="startModule(${currentWeek}, ${currentDay}, ${index})">
                            Start
                        </button>
                    </div>
                `).join('')}
            </div>
        </div>

        <div class="quick-actions">
            <button class="btn btn-secondary" onclick="showProgress()">
                <i class="fas fa-chart-line"></i> View Progress
            </button>
            <button class="btn btn-secondary" onclick="showAchievements()">
                <i class="fas fa-trophy"></i> Achievements
            </button>
        </div>
    `;
}

function getModuleIcon(type) {
    const icons = {
        learn: '<i class="fas fa-book-open"></i>',
        practice: '<i class="fas fa-pencil-alt"></i>',
        speak: '<i class="fas fa-microphone"></i>',
        review: '<i class="fas fa-redo"></i>',
        quiz: '<i class="fas fa-question-circle"></i>',
        game: '<i class="fas fa-gamepad"></i>',
        roleplay: '<i class="fas fa-theater-masks"></i>'
    };
    return icons[type] || '<i class="fas fa-star"></i>';
}

// Module Functions
function startModule(week, day, moduleIndex) {
    currentWeek = week;
    currentDay = day;
    currentLesson = moduleIndex;
    
    const weekData = weeklySyllabus[week - 1];
    const dayData = weekData.days[day - 1];
    const module = dayData.lessons[moduleIndex];
    
    showScreen('lesson');
    loadModule(module);
}

function loadModule(module) {
    const lessonCard = document.getElementById('lessonCard');
    const lessonTitle = document.getElementById('lessonTitle');
    
    lessonTitle.textContent = `${module.title} - ${module.duration}`;
    
    switch(module.type) {
        case 'learn':
            renderLearnModule(module);
            break;
        case 'practice':
            renderPracticeModule(module);
            break;
        case 'speak':
            renderSpeakModule(module);
            break;
        case 'quiz':
            renderQuizModule(module);
            break;
        case 'review':
            renderReviewModule(module);
            break;
        case 'game':
            renderGameModule(module);
            break;
        case 'roleplay':
            renderRoleplayModule(module);
            break;
        default:
            lessonCard.innerHTML = '<p>Module type not implemented yet.</p>';
    }
}

function renderLearnModule(module) {
    const lessonCard = document.getElementById('lessonCard');
    const content = lessonContent[module.content];
    
    if (!content) {
        lessonCard.innerHTML = '<p>Content not available yet.</p>';
        return;
    }
    
    lessonCard.innerHTML = `
        <div class="learn-module">
            <h3>${content.title}</h3>
            <div class="word-cards">
                ${content.words.map(word => `
                    <div class="word-card">
                        <div class="word-image">${word.image || '📚'}</div>
                        <h4>${word.word || word.letter || word.number}</h4>
                        <p class="meaning">${word.meaning}</p>
                        <button class="btn btn-small" onclick="playAudio('${word.word || word.letter || word.number}')">
                            <i class="fas fa-volume-up"></i> Listen
                        </button>
                    </div>
                `).join('')}
            </div>
            <div class="module-navigation">
                <button class="btn btn-primary" onclick="completeModule()">
                    <i class="fas fa-check"></i> I've Learned This
                </button>
            </div>
        </div>
    `;
}

function renderPracticeModule(module) {
    const lessonCard = document.getElementById('lessonCard');
    
    lessonCard.innerHTML = `
        <div class="practice-module">
            <h3>Practice Time!</h3>
            <div class="practice-exercise">
                <p>This is where practice exercises will go.</p>
                <button class="btn btn-primary" onclick="completeModule()">
                    <i class="fas fa-check"></i> Complete Practice
                </button>
            </div>
        </div>
    `;
}

function renderSpeakModule(module) {
    const lessonCard = document.getElementById('lessonCard');
    
    lessonCard.innerHTML = `
        <div class="speak-module">
            <h3>Speaking Practice</h3>
            <div class="speech-recognition">
                <p>Click the microphone and try to say the words!</p>
                <button class="btn btn-primary" id="speakBtn" onclick="startSpeechRecognition()">
                    <i class="fas fa-microphone"></i> Start Speaking
                </button>
                <div id="speechResult" class="speech-result"></div>
            </div>
            <button class="btn btn-primary" onclick="completeModule()">
                <i class="fas fa-check"></i> Complete Speaking
            </button>
        </div>
    `;
}

function renderQuizModule(module) {
    const lessonCard = document.getElementById('lessonCard');
    
    lessonCard.innerHTML = `
        <div class="quiz-module">
            <h3>Quiz Time!</h3>
            <div class="quiz-question">
                <p>Quiz questions will appear here.</p>
                <button class="btn btn-primary" onclick="completeModule()">
                    <i class="fas fa-check"></i> Complete Quiz
                </button>
            </div>
        </div>
    `;
}

function renderReviewModule(module) {
    const lessonCard = document.getElementById('lessonCard');
    
    lessonCard.innerHTML = `
        <div class="review-module">
            <h3>Review Time!</h3>
            <div class="review-content">
                <p>Review all the things you learned this week.</p>
                <button class="btn btn-primary" onclick="completeModule()">
                    <i class="fas fa-check"></i> Complete Review
                </button>
            </div>
        </div>
    `;
}

function renderGameModule(module) {
    const lessonCard = document.getElementById('lessonCard');
    
    lessonCard.innerHTML = `
        <div class="game-module">
            <h3>Fun Game!</h3>
            <div class="game-content">
                <p>Play a fun game to review what you learned.</p>
                <button class="btn btn-primary" onclick="completeModule()">
                    <i class="fas fa-check"></i> Complete Game
                </button>
            </div>
        </div>
    `;
}

function renderRoleplayModule(module) {
    const lessonCard = document.getElementById('lessonCard');
    
    lessonCard.innerHTML = `
        <div class="roleplay-module">
            <h3>Role Play Practice</h3>
            <div class="roleplay-content">
                <p>Practice real conversations with role play.</p>
                <button class="btn btn-primary" onclick="completeModule()">
                    <i class="fas fa-check"></i> Complete Role Play
                </button>
            </div>
        </div>
    `;
}

function completeModule() {
    totalXP += 25;
    totalPoints += 25;
    
    // Check if day is completed
    const weekData = weeklySyllabus[currentWeek - 1];
    const dayData = weekData.days[currentDay - 1];
    
    if (currentLesson === dayData.lessons.length - 1) {
        // Day completed
        completeDay();
    } else {
        // Move to next module
        currentLesson++;
        loadModule(dayData.lessons[currentLesson]);
    }
    
    saveProgress();
    updateDisplay();
}

function completeDay() {
    weeklyStreak++;
    daysActive++;
    
    if (currentDay === 5) {
        // Week completed
        completeWeek();
    } else {
        // Move to next day
        currentDay++;
        showMessage('🎉 Day completed! Great job! 🎉', 'success');
        setTimeout(() => {
            showDashboard();
        }, 2000);
    }
}

function completeWeek() {
    if (currentWeek < 12) {
        currentWeek++;
        currentDay = 1;
        showMessage('🎊 Week completed! You\'re amazing! 🎊', 'success');
        
        // Show confetti animation
        showConfetti();
        
        setTimeout(() => {
            showDashboard();
        }, 3000);
    } else {
        // All weeks completed!
        showMessage('🏆 Congratulations! You\'ve completed your English Journey! 🏆', 'success');
        setTimeout(() => {
            showWelcome();
        }, 3000);
    }
}

function showConfetti() {
    // Simple confetti effect
    for (let i = 0; i < 50; i++) {
        setTimeout(() => {
            const confetti = document.createElement('div');
            confetti.className = 'confetti';
            confetti.style.left = Math.random() * 100 + 'vw';
            confetti.style.animationDelay = Math.random() * 3 + 's';
            confetti.style.backgroundColor = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#feca57'][Math.floor(Math.random() * 5)];
            document.body.appendChild(confetti);
            
            setTimeout(() => {
                if (confetti.parentNode) {
                    confetti.parentNode.removeChild(confetti);
                }
            }, 3000);
        }, i * 100);
    }
}

// Speech Recognition
function startSpeechRecognition() {
    if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        const recognition = new SpeechRecognition();
        
        recognition.lang = 'en-US';
        recognition.continuous = false;
        recognition.interimResults = false;
        
        recognition.onstart = function() {
            document.getElementById('speakBtn').innerHTML = '<i class="fas fa-microphone-slash"></i> Listening...';
            document.getElementById('speakBtn').disabled = true;
        };
        
        recognition.onresult = function(event) {
            const result = event.results[0][0].transcript;
            document.getElementById('speechResult').innerHTML = `
                <p><strong>You said:</strong> ${result}</p>
                <p class="feedback">Great pronunciation! 🎉</p>
            `;
        };
        
        recognition.onerror = function(event) {
            document.getElementById('speechResult').innerHTML = '<p class="error">Error: ' + event.error + '</p>';
        };
        
        recognition.onend = function() {
            document.getElementById('speakBtn').innerHTML = '<i class="fas fa-microphone"></i> Try Again';
            document.getElementById('speakBtn').disabled = false;
        };
        
        recognition.start();
    } else {
        alert('Speech recognition is not supported in this browser.');
    }
}

// Screen Management
function showScreen(screenName) {
    // Hide all screens
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });
    
    // Show target screen
    const targetScreen = document.getElementById(screenName + 'Screen');
    if (targetScreen) {
        targetScreen.classList.add('active');
    }
    
    // Update navigation
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    currentScreen = screenName;
    
    if (screenName === 'welcome') {
        document.querySelector('.nav-btn:first-child').classList.add('active');
    } else if (screenName === 'dashboard') {
        document.querySelector('.nav-btn:nth-child(2)').classList.add('active');
        renderDashboard();
    } else if (screenName === 'progress') {
        document.querySelector('.nav-btn:nth-child(3)').classList.add('active');
        updateProgressDisplay();
    }
}

function showWelcome() {
    showScreen('welcome');
}

function showDashboard() {
    showScreen('dashboard');
}

function showProgress() {
    showScreen('progress');
    updateProgressDisplay();
}

function showAchievements() {
    // For future implementation
    alert('Achievements coming soon!');
}

function goBack() {
    if (currentScreen === 'lesson') {
        showDashboard();
    } else if (currentScreen === 'progress') {
        showDashboard();
    }
}

// Progress Management
function loadProgress() {
    const saved = localStorage.getItem('lylyProgress');
    if (saved) {
        const progress = JSON.parse(saved);
        totalPoints = progress.totalPoints || 0;
        currentLevel = progress.currentLevel || 1;
        daysActive = progress.daysActive || 0;
        lessonsCompleted = progress.lessonsCompleted || 0;
        achievements = progress.achievements || [];
        currentWeek = progress.currentWeek || 1;
        currentDay = progress.currentDay || 1;
        weeklyStreak = progress.weeklyStreak || 0;
        totalXP = progress.totalXP || 0;
    }
    
    // Check if it's a new day
    const lastActive = localStorage.getItem('lylyLastActive');
    const today = new Date().toDateString();
    
    if (lastActive !== today) {
        daysActive++;
        localStorage.setItem('lylyLastActive', today);
    }
}

function saveProgress() {
    const progress = {
        totalPoints,
        currentLevel,
        daysActive,
        lessonsCompleted,
        achievements,
        currentWeek,
        currentDay,
        weeklyStreak,
        totalXP,
        lastSaved: new Date().toISOString()
    };
    
    localStorage.setItem('lylyProgress', JSON.stringify(progress));
}

function updateDisplay() {
    const levelElement = document.getElementById('currentLevel');
    const pointsElement = document.getElementById('totalPoints');
    
    if (levelElement) levelElement.textContent = currentLevel;
    if (pointsElement) pointsElement.textContent = totalPoints;
}

function updateProgressDisplay() {
    const totalPointsDisplay = document.getElementById('totalPointsDisplay');
    const currentLevelDisplay = document.getElementById('currentLevelDisplay');
    const daysActiveDisplay = document.getElementById('daysActive');
    const lessonsCompletedDisplay = document.getElementById('lessonsCompleted');
    
    if (totalPointsDisplay) totalPointsDisplay.textContent = totalPoints;
    if (currentLevelDisplay) currentLevelDisplay.textContent = currentLevel;
    if (daysActiveDisplay) daysActiveDisplay.textContent = daysActive;
    if (lessonsCompletedDisplay) lessonsCompletedDisplay.textContent = lessonsCompleted;
    
    // Update achievements
    updateAchievements();
}

function updateAchievements() {
    const achievementsList = document.getElementById('achievementsList');
    if (!achievementsList) return;
    
    // Check for new achievements
    checkAchievements();
    
    if (achievements.length === 0) {
        achievementsList.innerHTML = '<p>Complete lessons to earn achievements!</p>';
    } else {
        achievementsList.innerHTML = achievements.map(achievement => `
            <div class="achievement-item">
                <i class="fas fa-${achievement.icon}"></i>
                <span>${achievement.name}</span>
            </div>
        `).join('');
    }
}

function checkAchievements() {
    const newAchievements = [];
    
    if (totalPoints >= 100 && !achievements.find(a => a.name === 'First Steps')) {
        newAchievements.push({ name: 'First Steps', icon: 'star' });
    }
    
    if (lessonsCompleted >= 5 && !achievements.find(a => a.name === 'Lesson Master')) {
        newAchievements.push({ name: 'Lesson Master', icon: 'graduation-cap' });
    }
    
    if (daysActive >= 7 && !achievements.find(a => a.name === 'Week Warrior')) {
        newAchievements.push({ name: 'Week Warrior', icon: 'calendar' });
    }
    
    if (currentLevel >= 3 && !achievements.find(a => a.name === 'Level Up!')) {
        newAchievements.push({ name: 'Level Up!', icon: 'trophy' });
    }
    
    if (currentWeek >= 2 && !achievements.find(a => a.name === 'Week Champion')) {
        newAchievements.push({ name: 'Week Champion', icon: 'medal' });
    }
    
    if (newAchievements.length > 0) {
        achievements.push(...newAchievements);
        newAchievements.forEach(achievement => {
            showMessage(`🏆 New Achievement: ${achievement.name}! 🏆`, 'success');
        });
        saveProgress();
    }
}

// Utility Functions
function showMessage(message, type = 'info') {
    // Create message element
    const messageEl = document.createElement('div');
    messageEl.className = `message message-${type}`;
    messageEl.textContent = message;
    messageEl.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#4CAF50' : type === 'error' ? '#f44336' : '#2196F3'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 10px;
        box-shadow: 0 4px 20px rgba(0,0,0,0.2);
        z-index: 1000;
        animation: slideIn 0.3s ease;
    `;
    
    document.body.appendChild(messageEl);
    
    // Remove after 3 seconds
    setTimeout(() => {
        messageEl.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => {
            if (messageEl.parentNode) {
                messageEl.parentNode.removeChild(messageEl);
            }
        }, 300);
    }, 3000);
}

// Add CSS animations for messages and confetti
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
    @keyframes slideOut {
        from { transform: translateX(0); opacity: 1; }
        to { transform: translateX(100%); opacity: 0; }
    }
    
    .confetti {
        position: fixed;
        width: 10px;
        height: 10px;
        top: -10px;
        z-index: 9999;
        animation: confettiFall 3s linear forwards;
    }
    
    @keyframes confettiFall {
        to {
            transform: translateY(100vh) rotate(360deg);
        }
    }
`;
document.head.appendChild(style);

// Auto-save progress every 30 seconds
setInterval(saveProgress, 30000);
