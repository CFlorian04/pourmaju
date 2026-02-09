const messages = [
    "Tu es sûre ?",
    "Vraiment sûre ??",
    "Tu es certaine ?",
    "Pookie, s'il te plaît...",
    "Réfléchis-y bien !",
    "Si tu dis non, je vais être vraiment triste...",
    "Je vais être très triste...",
    "Je vais être très très très triste...",
    "D'accord, j'arrête de demander...",
    "Je plaisante, dis oui s'il te plaît ! ❤️",
    "Est-ce que c'est ton dernier mot ?",
    "Tu me brises le cœur... 💔",
    "Et si je te donne un chocolat ?",
    "Même pour un petit bisou ?",
    "Regarde ce pauvre petit chaton... 🐱",
    "Allez, juste un petit clic sur le 'Oui' !",
    "Je vais faire la tête !",
    "Tu es dure en affaire...",
    "Je ne savais pas que tu étais si cruelle...",
    "Bon, maintenant tu fais exprès non ?",
    "Attrape-moi si tu peux !"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    
    // Changer le texte du bouton Non
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    
    // Faire grossir le bouton Oui
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.4}px`;

    // Easter Egg : Changement de couleur du Oui après 5 refus
    if (messageIndex === 5) {
        yesButton.style.backgroundColor = "#e91e63";
        yesButton.textContent = "DIS OUI ! ✨";
    }

    // Bouton fuyant après 10 clics
    if (messageIndex > 10) {
        noButton.style.position = 'fixed';
        const padding = 20;
        const maxX = window.innerWidth - noButton.offsetWidth - padding;
        const maxY = window.innerHeight - noButton.offsetHeight - padding;
        
        const x = Math.random() * (maxX - padding) + padding;
        const y = Math.random() * (maxY - padding) + padding;
        
        noButton.style.left = `${x}px`;
        noButton.style.top = `${y}px`;
    }
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}

// Easter Egg Mobile : Appui long sur le GIF (2 secondes)
const gif = document.getElementById('valentine-gif');
let timer;

gif.addEventListener('touchstart', () => {
    timer = setTimeout(() => {
        document.body.style.backgroundColor = "#ffc1e3";
        document.getElementById('main-title').classList.add('rainbow-text');
    }, 2000);
});

gif.addEventListener('touchend', () => {
    clearTimeout(timer);
});