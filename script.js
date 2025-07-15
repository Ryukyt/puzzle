// Shared phase logic
function checkCode() {
  const code = document.getElementById('codeInput').value.trim();
  const error = document.getElementById('error');
  if (code === '157') {
    window.location.href = 'phase2.html';
  } else {
    error.classList.remove('hidden');
    setTimeout(() => error.classList.add('hidden'), 2000);
  }
}

function checkKrishu() {
  const answer = document.getElementById('answerInput').value.trim().toLowerCase();
  const error = document.getElementById('error');
  if (answer === 'krishu') {
    window.location.href = 'phase3.html';
  } else {
    error.classList.remove('hidden');
    setTimeout(() => error.classList.add('hidden'), 2000);
  }
}

function checkPhase3() {
  const code = document.getElementById('codeInput').value.trim();
  const error = document.getElementById('error');
  if (code === '311155') {
    window.location.href = 'phase4.html';
  } else {
    error.classList.remove('hidden');
    setTimeout(() => error.classList.add('hidden'), 2000);
  }
}

function checkPhase4() {
  const answer = document.getElementById('answerInput').value.trim().toLowerCase();
  const error = document.getElementById('error');
  if (answer === 'korean style maggie') {
    window.location.href = 'final.html';
  } else {
    error.classList.remove('hidden');
    setTimeout(() => error.classList.add('hidden'), 2000);
  }
}

// Final phase logic
function showFinalResult(choice, message) {
  const result = document.getElementById('result');
  const buttons = document.getElementById('buttons');

  if (!localStorage.getItem('choice')) {
    localStorage.setItem('choice', choice);
    result.textContent = message;
    result.classList.remove('hidden');
    buttons.style.display = 'none';
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const truthBtn = document.getElementById('truth');
  const giftBtn = document.getElementById('gift');
  const result = document.getElementById('result');
  const buttons = document.getElementById('buttons');

  // Button click logic
  if (truthBtn && giftBtn) {
    truthBtn.addEventListener('click', () =>
      showFinalResult('truth', 'To know the truth, message @Esparzamartonize')
    );

    giftBtn.addEventListener('click', () =>
      showFinalResult('gift', 'Please send the Amazon item link that you wish to purchase to @Esparzamartonize. Max budget: 5000 Iranian Rial')
    );
  }

  // Persist result after reload
  const savedChoice = localStorage.getItem('choice');
  if (savedChoice) {
    buttons.style.display = 'none';
    result.classList.remove('hidden');
    result.textContent =
      savedChoice === 'truth'
        ? 'To know the truth, message @Esparzamartonize'
        : 'Please send the Amazon item link that you wish to purchase to @Esparzamartonize. Max budget: 5000 Iranian Rial';
  }

  // Disable back button on final.html
  if (window.location.href.includes('final.html')) {
    history.pushState(null, '', location.href);
    window.addEventListener('popstate', () => {
      history.pushState(null, '', location.href);
    });
  }
});
