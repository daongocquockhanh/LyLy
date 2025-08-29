// App State
let currentScreen = 'welcome';
let currentLesson = 0;
let currentQuestion = 0;
let totalPoints = 0;
let currentLevel = 1;
let daysActive = 0;
let lessonsCompleted = 0;
let achievements = [];

// Lesson Data - Starting from absolute basics
const lessons = [
    {
        title: "Lesson 1: Basic Greetings",
        questions: [
            {
                type: "word",
                word: "Hello",
                meaning: "Xin chào",
                image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=300&h=300&fit=crop&crop=face"
            },
            {
                type: "word",
                word: "Goodbye",
                meaning: "Tạm biệt",
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face"
            },
            {
                type: "quiz",
                question: "What does 'Hello' mean?",
                options: ["Tạm biệt", "Xin chào", "Cảm ơn", "Xin lỗi"],
                correct: 1
            },
            {
                type: "word",
                word: "Thank you",
                meaning: "Cảm ơn",
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face"
            },
            {
                type: "quiz",
                question: "How do you say 'Goodbye' in English?",
                options: ["Hello", "Goodbye", "Thank you", "Please"],
                correct: 1
            }
        ]
    },
    {
        title: "Lesson 2: Numbers 1-10",
        questions: [
            {
                type: "word",
                word: "One",
                meaning: "Một",
                image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=300&fit=crop"
            },
            {
                type: "word",
                word: "Two",
                meaning: "Hai",
                image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=300&fit=crop"
            },
            {
                type: "quiz",
                question: "What number is 'Three'?",
                options: ["1", "2", "3", "4"],
                correct: 2
            },
            {
                type: "word",
                word: "Four",
                meaning: "Bốn",
                image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=300&fit=crop"
            },
            {
                type: "quiz",
                question: "Count: One, Two, Three, ___?",
                options: ["Five", "Four", "Six", "Seven"],
                correct: 1
            }
        ]
    },
    {
        title: "Lesson 3: Colors",
        questions: [
            {
                type: "word",
                word: "Red",
                meaning: "Đỏ",
                image: "https://images.unsplash.com/photo-1513151233558-d860c5398176?w=300&h=300&fit=crop"
            },
            {
                type: "word",
                word: "Blue",
                meaning: "Xanh dương",
                image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=300&fit=crop"
            },
            {
                type: "quiz",
                question: "What color is the sky?",
                options: ["Red", "Blue", "Green", "Yellow"],
                correct: 1
            },
            {
                type: "word",
                word: "Green",
                meaning: "Xanh lá",
                image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=300&fit=crop"
            },
            {
                type: "quiz",
                question: "What color are trees?",
                options: ["Red", "Blue", "Green", "Yellow"],
                correct: 2
            }
        ]
    },
    {
        title: "Lesson 4: Family",
        questions: [
            {
                type: "word",
                word: "Mother",
                meaning: "Mẹ",
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face"
            },
            {
                type: "word",
                word: "Father",
                meaning: "Bố",
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face"
            },
            {
                type: "quiz",
                question: "Who is your mother's husband?",
                options: ["Brother", "Father", "Sister", "Son"],
                correct: 1
            },
            {
                type: "word",
                word: "Sister",
                meaning: "Chị/Em gái",
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face"
            },
            {
                type: "quiz",
                question: "What do you call your father's daughter?",
                options: ["Mother", "Sister", "Brother", "Father"],
                correct: 1
            }
        ]
    },
    {
        title: "Lesson 5: Animals",
        questions: [
            {
                type: "word",
                word: "Dog",
                meaning: "Con chó",
                image: "https://images.unsplash.com/photo-1547407139-3c921a66005c?w=300&h=300&fit=crop"
            },
            {
                type: "word",
                word: "Cat",
                meaning: "Con mèo",
                image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=300&h=300&fit=crop"
            },
            {
                type: "quiz",
                question: "Which animal says 'Meow'?",
                options: ["Dog", "Cat", "Bird", "Fish"],
                correct: 1
            },
            {
                type: "word",
                word: "Bird",
                meaning: "Con chim",
                image: "https://images.unsplash.com/photo-1444464666168-49d633b03d91?w=300&h=300&fit=crop"
            },
            {
                type: "quiz",
                question: "What animal can fly?",
                options: ["Dog", "Cat", "Bird", "Fish"],
                correct: 2
            }
        ]
    }
];

// Initialize the app
document.addEventListener('DOMContentLoaded', function() {
    loadProgress();
    updateDisplay();
});

// Screen Management
function showScreen(screenName) {
    // Hide all screens
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });
    
    // Show target screen
    document.getElementById(screenName + 'Screen').classList.add('active');
    
    // Update navigation
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    currentScreen = screenName;
    
    if (screenName === 'welcome') {
        document.querySelector('.nav-btn:first-child').classList.add('active');
    } else if (screenName === 'progress') {
        document.querySelector('.nav-btn:nth-child(2)').classList.add('active');
    }
}

function showWelcome() {
    showScreen('welcome');
}

function showProgress() {
    showScreen('progress');
    updateProgressDisplay();
}

function showSettings() {
    // For future implementation
    alert('Settings coming soon!');
}

function goBack() {
    if (currentScreen === 'lesson') {
        showWelcome();
    } else if (currentScreen === 'progress') {
        showWelcome();
    }
}

// Learning Functions
function startLearning() {
    currentLesson = 0;
    currentQuestion = 0;
    showScreen('lesson');
    loadLesson();
}

function loadLesson() {
    const lesson = lessons[currentLesson];
    const question = lesson.questions[currentQuestion];
    
    document.getElementById('lessonTitle').textContent = lesson.title;
    document.getElementById('lessonProgress').textContent = `${currentQuestion + 1}/${lesson.questions.length}`;
    
    const lessonCard = document.getElementById('lessonCard');
    
    if (question.type === 'word') {
        lessonCard.innerHTML = `
            <div class="word-card">
                <img src="${question.image}" alt="${question.word}" onerror="this.src='https://via.placeholder.com/300x300/667eea/ffffff?text=${question.word}'">
                <h4>${question.word}</h4>
                <p>${question.meaning}</p>
            </div>
        `;
    } else if (question.type === 'quiz') {
        lessonCard.innerHTML = `
            <div class="quiz-card">
                <h4>${question.question}</h4>
                <div class="options-grid">
                    ${question.options.map((option, index) => `
                        <button class="option-btn" onclick="selectAnswer(${index})">
                            ${option}
                        </button>
                    `).join('')}
                </div>
            </div>
        `;
    }
    
    // Update navigation buttons
    document.getElementById('prevBtn').disabled = currentQuestion === 0;
    document.getElementById('nextBtn').textContent = currentQuestion === lesson.questions.length - 1 ? 'Finish' : 'Next';
}

function selectAnswer(selectedIndex) {
    const lesson = lessons[currentLesson];
    const question = lesson.questions[currentQuestion];
    
    const optionBtns = document.querySelectorAll('.option-btn');
    
    // Disable all buttons
    optionBtns.forEach(btn => btn.style.pointerEvents = 'none');
    
    // Show correct/incorrect
    optionBtns.forEach((btn, index) => {
        if (index === question.correct) {
            btn.classList.add('correct');
        } else if (index === selectedIndex) {
            btn.classList.add('incorrect');
        }
    });
    
    // Award points
    if (selectedIndex === question.correct) {
        totalPoints += 10;
        showMessage('Correct! +10 points! 🎉', 'success');
    } else {
        showMessage('Try again! 💪', 'info');
    }
    
    // Auto-advance after delay
    setTimeout(() => {
        if (currentQuestion < lesson.questions.length - 1) {
            nextQuestion();
        } else {
            completeLesson();
        }
    }, 2000);
}

function nextQuestion() {
    const lesson = lessons[currentLesson];
    
    if (currentQuestion < lesson.questions.length - 1) {
        currentQuestion++;
        loadLesson();
    } else {
        completeLesson();
    }
}

function previousQuestion() {
    if (currentQuestion > 0) {
        currentQuestion--;
        loadLesson();
    }
}

function completeLesson() {
    lessonsCompleted++;
    totalPoints += 50; // Bonus for completing lesson
    
    // Check for level up
    if (totalPoints >= currentLevel * 100) {
        currentLevel++;
        showMessage(`🎊 Level Up! You're now at Level ${currentLevel}! 🎊`, 'success');
    }
    
    showMessage('🎉 Lesson completed! Great job! 🎉', 'success');
    
    // Save progress
    saveProgress();
    
    // Return to welcome screen
    setTimeout(() => {
        showWelcome();
    }, 2000);
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
        lastSaved: new Date().toISOString()
    };
    
    localStorage.setItem('lylyProgress', JSON.stringify(progress));
}

function updateDisplay() {
    document.getElementById('currentLevel').textContent = currentLevel;
    document.getElementById('totalPoints').textContent = totalPoints;
}

function updateProgressDisplay() {
    document.getElementById('totalPointsDisplay').textContent = totalPoints;
    document.getElementById('currentLevelDisplay').textContent = currentLevel;
    document.getElementById('daysActive').textContent = daysActive;
    document.getElementById('lessonsCompleted').textContent = lessonsCompleted;
    
    // Update achievements
    updateAchievements();
}

function updateAchievements() {
    const achievementsList = document.getElementById('achievementsList');
    
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

// Add CSS animations for messages
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
`;
document.head.appendChild(style);

// Auto-save progress every 30 seconds
setInterval(saveProgress, 30000);
