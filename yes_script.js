// 1. Musique synchronisée
window.addEventListener('load', () => {
    const audio = document.getElementById('victory-music');
    const savedTime = localStorage.getItem('musicTimestamp');
    if (savedTime) audio.currentTime = parseFloat(savedTime);
    audio.volume = 0.5;
    audio.play().catch(() => {
        document.body.addEventListener('click', () => audio.play(), {once: true});
    });
});

// 2. Pluie de cœurs (améliorée)
function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    const items = ['❤️','💖','💝','🌹','🪱','🐸','🫦','🦒','🐼','💕'];
    heart.innerHTML = items[Math.floor(Math.random() * items.length)];
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.fontSize = Math.random() * 25 + 15 + 'px';
    heart.style.animationDuration = Math.random() * 3 + 2 + 's';
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 5000);
}
setInterval(createHeart, 50);

// --- CONFIGURATION DES DATES ---
const dateChat = new Date("2025-12-30T22:00:00"); // Date 1ère discussion
const dateMeet = new Date("2026-01-17T14:30:00"); // Date 1ère rencontre
const dateCouple = new Date(); // Date officielle de couple

function calculateTime(targetDate, elementId) {
    const now = new Date();
    const diff = now - targetDate;

    if (diff < 0) {
        document.getElementById(elementId).innerHTML = "À venir ! ✨";
        return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const mins = Math.floor((diff / 1000 / 60) % 60);
    const secs = Math.floor((diff / 1000) % 60);

    document.getElementById(elementId).innerHTML = 
        `${days}j ${hours}h ${mins}m ${secs}s`;
}

function updateAllTimers() {
    calculateTime(dateChat, 'timer-chat');
    calculateTime(dateMeet, 'timer-meet');
    calculateTime(dateCouple, 'timer-couple');
}

// Mise à jour toutes les secondes
setInterval(updateAllTimers, 1000);
updateAllTimers(); // Appel immédiat pour éviter le délai de 1s