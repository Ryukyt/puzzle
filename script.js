// Phase 1 validation
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

// Phase 2 validation
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

// Phase 3 validation
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

// Phase 4 validation
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
function showTruth() {
    const result = document.getElementById('result');
    const buttons = document.getElementById('buttons');
    
    if (!localStorage.getItem('choice')) {
        result.textContent = '"To know the truth, message @Esparzamartonize"';
        buttons.style.display = 'none';
        localStorage.setItem('choice', 'truth');
    }
}

function showGift() {
    const result = document.getElementById('result');
    const buttons = document.getElementById('buttons');
    
    if (!localStorage.getItem('choice')) {
        result.textContent = '"Please paste an Amazon item link. Max budget: 5000 Iranian Rial"';
        buttons.style.display = 'none';
        localStorage.setItem('choice', 'gift');
    }
}

// Disable back button on final page
if (window.location.href.includes('final.html')) {
    window.history.pushState(null, '', window.location.href);
    window.onpopstate = function(event) {
        window.history.pushState(null, '', window.location.href);
    };
}