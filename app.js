// Dengue Champions Quiz - Application Logic

let audioCtx = null;

// Initialize Audio Context on user interaction
function initAudio() {
  if (!audioCtx) {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  }
  if (audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
}

// Synthesize Cute Retro Sound Effects
function playFeedbackSound(isCorrect) {
  try {
    initAudio();
    if (!audioCtx) return;

    const osc = audioCtx.createOscillator();
    const gainNode = audioCtx.createGain();
    osc.connect(gainNode);
    gainNode.connect(audioCtx.destination);

    const now = audioCtx.currentTime;

    if (isCorrect) {
      // Happy "Ding-ding!" chime (sine wave)
      osc.type = 'sine';
      osc.frequency.setValueAtTime(523.25, now); // C5
      osc.frequency.setValueAtTime(659.25, now + 0.08); // E5
      osc.frequency.setValueAtTime(783.99, now + 0.16); // G5
      osc.frequency.setValueAtTime(1046.50, now + 0.24); // C6
      
      gainNode.gain.setValueAtTime(0, now);
      gainNode.gain.linearRampToValueAtTime(0.15, now + 0.05);
      gainNode.gain.exponentialRampToValueAtTime(0.001, now + 0.45);
      
      osc.start(now);
      osc.stop(now + 0.45);
    } else {
      // Soft "Wah-wah" double-buzz (triangle wave)
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(220, now); // A3
      osc.frequency.linearRampToValueAtTime(165, now + 0.15); // E3
      
      gainNode.gain.setValueAtTime(0, now);
      gainNode.gain.linearRampToValueAtTime(0.15, now + 0.05);
      gainNode.gain.setValueAtTime(0.15, now + 0.15);
      gainNode.gain.exponentialRampToValueAtTime(0.001, now + 0.35);

      osc.start(now);
      osc.stop(now + 0.35);
    }
  } catch (e) {
    console.warn("Audio Context blocked or not supported:", e);
  }
}

// Helper to shuffle an array
function shuffleArray(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

// Build question ID lookup map
const questionLookup = {};
Object.keys(QUESTIONS_DATA).forEach(level => {
  QUESTIONS_DATA[level].forEach(q => {
    questionLookup[q.id] = q;
  });
});

// App State variables
let currentLevel = 'easy';
let currentPage = 0; // 0-indexed page inside current level
let userAnswers = {}; // Map of { questionId: selectedIndex }
let shuffledOrders = {
  easy: [],
  moderate: [],
  veryHard: [],
  options: {}
};

// Total questions per level configurations
const LEVEL_CONFIGS = {
  easy: { pages: 4, hue: 150, emoji: '🟢', label: 'Easy Level' },
  moderate: { pages: 3, hue: 35, emoji: '🟡', label: 'Moderate Level' },
  veryHard: { pages: 3, hue: 340, emoji: '🔴', label: 'Very Hard Level' }
};

// Mascot speech database
const MASCOT_MESSAGES = {
  welcome: "Hi there! I'm Detective Dani. Let's hunt down those Aedes mosquitoes together! Pick a level above and let's start the quiz. 🔍",
  pageComplete: "Outstanding! 🎉 You've answered all 10 questions on this page. You are a true Dengue-fighting champion! Keep going!",
  easyStart: "Let's learn the basics! Easy level will teach you what Dengue is and where mosquitoes lay eggs. You can do it! 🌟",
  moderateStart: "Great job! Let's look at Moderate level. Here we will learn about mosquito behavior and how to protect our homes. 🏡",
  veryHardStart: "Incredible work! Very Hard level is for real mosquito scientists. Let's study mosquito lifecycles and biological controls! 🔬"
};

// Load scores and random orders from localStorage on startup
function loadState() {
  const savedAnswers = localStorage.getItem('dengue_quiz_answers');
  const savedLevel = localStorage.getItem('dengue_quiz_level');
  const savedPage = localStorage.getItem('dengue_quiz_page');
  const savedShuffled = localStorage.getItem('dengue_quiz_shuffled');

  if (savedAnswers) {
    userAnswers = JSON.parse(savedAnswers);
  }
  if (savedLevel) {
    currentLevel = savedLevel;
  }
  if (savedPage) {
    currentPage = parseInt(savedPage, 10);
  }

  // Load or generate shuffled orders
  let needToGenerate = true;
  if (savedShuffled) {
    try {
      const parsed = JSON.parse(savedShuffled);
      if (parsed.easy && parsed.moderate && parsed.veryHard && parsed.options) {
        shuffledOrders = parsed;
        needToGenerate = false;
      }
    } catch(e) {
      needToGenerate = true;
    }
  }

  if (needToGenerate) {
    regenerateShuffles();
  }
}

// Generate new random shuffles of questions and options
function regenerateShuffles() {
  shuffledOrders = {
    easy: shuffleArray(QUESTIONS_DATA.easy.map(q => q.id)),
    moderate: shuffleArray(QUESTIONS_DATA.moderate.map(q => q.id)),
    veryHard: shuffleArray(QUESTIONS_DATA.veryHard.map(q => q.id)),
    options: {}
  };
  
  // Shuffle option indices (0, 1, 2, 3) for each question
  Object.keys(QUESTIONS_DATA).forEach(level => {
    QUESTIONS_DATA[level].forEach(q => {
      shuffledOrders.options[q.id] = shuffleArray([0, 1, 2, 3]);
    });
  });
  
  saveState();
}

// Save scores and shuffles to localStorage
function saveState() {
  localStorage.setItem('dengue_quiz_answers', JSON.stringify(userAnswers));
  localStorage.setItem('dengue_quiz_level', currentLevel);
  localStorage.setItem('dengue_quiz_page', currentPage.toString());
  localStorage.setItem('dengue_quiz_shuffled', JSON.stringify(shuffledOrders));
}

// Calculate total correct questions
function calculateTotalScore() {
  let score = 0;
  Object.keys(QUESTIONS_DATA).forEach(level => {
    QUESTIONS_DATA[level].forEach(q => {
      if (userAnswers[q.id] !== undefined && userAnswers[q.id] === q.correct) {
        score++;
      }
    });
  });
  return score;
}

// Render total score in the header
function updateScoreDisplay() {
  const scoreSpan = document.getElementById('total-score');
  if (scoreSpan) {
    scoreSpan.textContent = calculateTotalScore();
  }
}

// Set global color theme based on level
function updateTheme() {
  const config = LEVEL_CONFIGS[currentLevel];
  document.documentElement.style.setProperty('--hue', config.hue);
}

// Set custom message in Detective Dani's speech bubble
function setMascotMessage(text) {
  const bubble = document.getElementById('mascot-bubble-text');
  if (bubble) {
    bubble.textContent = text;
  }
}

// Spawn falling confetti particles on page completion
function triggerConfetti() {
  const container = document.getElementById('confetti-container');
  if (!container) return;

  container.innerHTML = '';
  const colors = ['#ffd32a', '#ff3f34', '#0be881', '#3c40c6', '#05c46b', '#ffc048', '#575fcf', '#ff5e57'];

  for (let i = 0; i < 80; i++) {
    const particle = document.createElement('div');
    particle.className = 'confetti-particle';
    
    const left = Math.random() * 100;
    const delay = Math.random() * 2;
    const duration = 2 + Math.random() * 3;
    const size = 6 + Math.random() * 8;
    const color = colors[Math.floor(Math.random() * colors.length)];

    particle.style.left = left + 'vw';
    particle.style.animationDelay = delay + 's';
    particle.style.animationDuration = duration + 's';
    particle.style.width = size + 'px';
    particle.style.height = size + 'px';
    particle.style.backgroundColor = color;
    particle.style.setProperty('--p-color', color);

    container.appendChild(particle);
  }

  setTimeout(() => {
    container.innerHTML = '';
  }, 5000);
}

// Check if all questions on the current page are answered
function checkPageCompletion() {
  const questions = getPageQuestions();
  const allAnswered = questions.every(q => userAnswers[q.id] !== undefined);
  
  if (allAnswered) {
    setMascotMessage(MASCOT_MESSAGES.pageComplete);
    triggerConfetti();
    playFeedbackSound(true);
    setTimeout(() => playFeedbackSound(true), 250); // Double chime
  }
}

// Retrieve the 10 questions corresponding to the active level and page, mapped from the shuffled IDs
function getPageQuestions() {
  const ids = shuffledOrders[currentLevel] || [];
  const startIdx = currentPage * 10;
  const pageIds = ids.slice(startIdx, startIdx + 10);
  return pageIds.map(id => questionLookup[id]).filter(Boolean);
}

// Select an answer option for a question
function handleAnswerSelect(question, optionIdx, btnElement, cardElement) {
  initAudio();
  
  // Guard clause: already answered
  if (userAnswers[question.id] !== undefined) return;

  const isCorrect = (optionIdx === question.correct);
  userAnswers[question.id] = optionIdx;
  saveState();
  
  // Highlight correct/incorrect answer states on UI
  btnElement.classList.add(isCorrect ? 'correct' : 'incorrect');
  btnElement.classList.add(isCorrect ? 'correct-anim' : 'shake-anim');
  cardElement.classList.add(isCorrect ? 'answered-correct' : 'answered-incorrect');
  
  playFeedbackSound(isCorrect);
  
  // Disable all option buttons for this card
  const allButtons = cardElement.querySelectorAll('.option-btn');
  allButtons.forEach(btn => btn.disabled = true);

  // If incorrect, highlight the correct option in green
  if (!isCorrect) {
    const correctBtn = cardElement.querySelector(`.option-btn[data-orig-idx="${question.correct}"]`);
    if (correctBtn) {
      correctBtn.classList.add('correct');
    }
  }

  // Display explanation box below options
  const explanationBox = cardElement.querySelector('.explanation-box');
  if (explanationBox) {
    explanationBox.querySelector('.explanation-text').innerHTML = `
      <strong>${isCorrect ? 'Correct! 🎉' : 'Oops! 💡'}</strong> ${question.explanation}
    `;
    explanationBox.style.display = 'flex';
  }

  // Make mascot reply with appropriate speech
  const speechText = isCorrect 
    ? `Way to go! 🌟 ${question.explanation}` 
    : `Don't give up! 💡 Here is why: ${question.explanation}`;
  setMascotMessage(speechText);

  updateScoreDisplay();
  updateProgress();
  checkPageCompletion();
}

// Update the progress bar and pagination buttons
function updateProgress() {
  const questions = getPageQuestions();
  const answeredCount = questions.filter(q => userAnswers[q.id] !== undefined).length;
  
  const progressPercent = (answeredCount / questions.length) * 100;
  const fill = document.getElementById('progress-fill');
  if (fill) fill.style.width = `${progressPercent}%`;

  const progressLabel = document.getElementById('progress-label-text');
  if (progressLabel) {
    progressLabel.textContent = `${answeredCount} of ${questions.length} answered`;
  }

  const prevBtn = document.getElementById('btn-prev');
  const nextBtn = document.getElementById('btn-next');
  const config = LEVEL_CONFIGS[currentLevel];

  if (prevBtn) prevBtn.disabled = (currentPage === 0);
  if (nextBtn) nextBtn.disabled = (currentPage >= config.pages - 1);
}

// Render the 10 questions of the active page in the HTML container
function renderQuestions() {
  const container = document.getElementById('questions-container');
  if (!container) return;

  container.innerHTML = '';
  const questions = getPageQuestions();

  const config = LEVEL_CONFIGS[currentLevel];
  const pageLabel = document.getElementById('current-page-label');
  if (pageLabel) {
    pageLabel.textContent = `Page ${currentPage + 1} of ${config.pages}`;
  }

  const levelTitle = document.getElementById('level-title-text');
  if (levelTitle) {
    levelTitle.textContent = `${config.emoji} ${config.label}`;
  }

  questions.forEach((q, displayIdx) => {
    const card = document.createElement('div');
    card.className = 'question-card';
    card.id = `q-card-${q.id}`;
    
    const overallNum = (currentPage * 10) + displayIdx + 1;

    const answeredIdx = userAnswers[q.id];
    const isAnswered = answeredIdx !== undefined;
    const isAnswerCorrect = isAnswered && (answeredIdx === q.correct);

    if (isAnswered) {
      card.classList.add(isAnswerCorrect ? 'answered-correct' : 'answered-incorrect');
    }

    const cardHeader = `
      <div class="question-header">
        <span class="q-number">Q${overallNum}</span>
        <h2 class="q-text">${q.question}</h2>
      </div>
    `;
    
    // Build options list using the stored shuffled index sequence for this question
    const optionsLetters = ['A', 'B', 'C', 'D'];
    const optionOrder = shuffledOrders.options[q.id] || [0, 1, 2, 3];
    
    let optionsHtml = '<div class="options-grid">';
    optionOrder.forEach((originalIdx, displayLetterIdx) => {
      const optionText = q.options[originalIdx];
      let extraClass = '';
      
      if (isAnswered) {
        if (originalIdx === q.correct) {
          extraClass = 'correct';
        } else if (originalIdx === answeredIdx) {
          extraClass = 'incorrect';
        }
      }
      const disabledAttr = isAnswered ? 'disabled' : '';
      
      optionsHtml += `
        <button class="option-btn ${extraClass}" data-orig-idx="${originalIdx}" ${disabledAttr}>
          <span class="option-letter">${optionsLetters[displayLetterIdx]}</span>
          <span>${optionText}</span>
        </button>
      `;
    });
    optionsHtml += '</div>';

    const explanationStyle = isAnswered ? 'style="display: flex;"' : 'style="display: none;"';
    const explanationTitleText = isAnswerCorrect ? 'Correct! 🎉' : 'Oops! 💡';
    const explanationHtml = `
      <div class="explanation-box" ${explanationStyle}>
        <span class="explanation-icon">${isAnswerCorrect ? '🎉' : '💡'}</span>
        <div class="explanation-text">
          <strong>${explanationTitleText}</strong> ${q.explanation}
        </div>
      </div>
    `;

    card.innerHTML = cardHeader + optionsHtml + explanationHtml;

    // Attach click listeners to option buttons
    const optionBtns = card.querySelectorAll('.option-btn');
    optionBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        const originalIdx = parseInt(btn.getAttribute('data-orig-idx'), 10);
        handleAnswerSelect(q, originalIdx, btn, card);
      });
    });

    container.appendChild(card);
  });

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Level Change handler
function switchLevel(levelId) {
  if (currentLevel === levelId) return;
  
  currentLevel = levelId;
  currentPage = 0; // Reset to page 1
  saveState();
  
  document.querySelectorAll('.level-tab').forEach(tab => {
    tab.classList.toggle('active', tab.getAttribute('data-level') === levelId);
  });

  updateTheme();
  
  if (levelId === 'easy') {
    setMascotMessage(MASCOT_MESSAGES.easyStart);
  } else if (levelId === 'moderate') {
    setMascotMessage(MASCOT_MESSAGES.moderateStart);
  } else if (levelId === 'veryHard') {
    setMascotMessage(MASCOT_MESSAGES.veryHardStart);
  }

  renderQuestions();
  updateProgress();
}

// Pagination Controls handlers
function handlePrevPage() {
  if (currentPage > 0) {
    currentPage--;
    saveState();
    renderQuestions();
    updateProgress();
  }
}

function handleNextPage() {
  const config = LEVEL_CONFIGS[currentLevel];
  if (currentPage < config.pages - 1) {
    currentPage++;
    saveState();
    renderQuestions();
    updateProgress();
  }
}

// Initial Setup
document.addEventListener('DOMContentLoaded', () => {
  loadState();
  updateTheme();
  updateScoreDisplay();
  
  document.querySelectorAll('.level-tab').forEach(tab => {
    const levelId = tab.getAttribute('data-level');
    tab.classList.toggle('active', levelId === currentLevel);

    tab.addEventListener('click', () => {
      switchLevel(levelId);
    });
  });

  const prevBtn = document.getElementById('btn-prev');
  const nextBtn = document.getElementById('btn-next');
  
  if (prevBtn) prevBtn.addEventListener('click', handlePrevPage);
  if (nextBtn) nextBtn.addEventListener('click', handleNextPage);

  const isFirstVisit = Object.keys(userAnswers).length === 0;
  setMascotMessage(isFirstVisit ? MASCOT_MESSAGES.welcome : "Welcome back, detective! Let's continue protecting our neighborhood!");

  renderQuestions();
  updateProgress();
  
  // Double click logo to reset score and reshuffle all questions
  const logo = document.querySelector('.brand-area');
  if (logo) {
    logo.addEventListener('dblclick', () => {
      if (confirm("Reset all quiz scores, reshuffle the questions and start fresh?")) {
        userAnswers = {};
        currentPage = 0;
        currentLevel = 'easy';
        regenerateShuffles();
        location.reload();
      }
    });
  }
});
