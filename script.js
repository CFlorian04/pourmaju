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
    "Attrape-moi si tu peux !",
    "Erreur 404 : Cœur non trouvé",
    "Mes avocats vont te contacter.",
    "Même Chat GPT dirait oui !",
    "Je vais appeler ta maman.",
    "Tu veux que je chante ? Non ? Alors dis oui !",
    "Je vais bouder pendant 100 ans.",
    "C'est ton index qui a glissé ?",
    "Ok, je demande au chat à la place...",
    "Le chat a dit oui lui !",
    "Tu es plus têtue qu'une mule !",
    "Je vais transformer ce bouton en poussière.",
    "Hé ! Reviens ici !",
    "Pourquoi tu me fuis ? 🏃‍♂️",
    "C'est une caméra cachée ?",
    "Tu as gagné un voyage... vers le bouton OUI !",
    "Je t'offre un tacos si tu dis oui.",
    "Une pizza ?",
    "Un abonnement Netflix ?",
    "Bon, j'utilise mon joker : S'IL TE PLAÎT !",
    "Clique sur le gros bouton vert, il est plus beau.",
    "Je ne partirai pas d'ici tant que c'est pas OUI."
];

let messageIndex = 0;
let musicStarted = false;

// Démarrer la musique au premier clic
document.body.addEventListener('click', () => {
    if (!musicStarted) {
        const music = document.getElementById('bg-music');
        music.volume = 0.5;
        music.play();
        musicStarted = true;
    }
}, { once: true });

function handleNoClick() {
    // Jouer le bruit du "Non"
    const noSound = document.getElementById('no-sound');
    noSound.currentTime = 0;
    noSound.play();

    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    
    // Le bouton Oui devient énorme
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.35}px`;

    // Le bouton Non s'enfuit après 5 clics
    if (messageIndex > 5) {
        noButton.style.position = 'fixed';
        const padding = 50;
        const x = Math.random() * (window.innerWidth - noButton.offsetWidth - padding);
        const y = Math.random() * (window.innerHeight - noButton.offsetHeight - padding);
        noButton.style.left = `${x}px`;
        noButton.style.top = `${y}px`;
    }
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}

// Fonction pour faire passer la vache
function launchCow() {
    const cow = document.getElementById('cow-egg');
    if (cow) {
        cow.style.display = 'block';
        // On réinitialise l'animation (en la supprimant puis la remettant)
        cow.style.animation = 'none';
        cow.offsetHeight; // "Trick" pour forcer le navigateur à noter le changement
        cow.style.animation = "cow-walk 10s linear forwards";
    }
}

// Lancement immédiat au bout de 5 secondes, puis boucle toutes les 30 secondes
setTimeout(() => {
    launchCow();
    setInterval(launchCow, 60000); // 30000ms = 30 secondes
}, 10000);

// Easter Egg : Image subliminale
function triggerSubliminal() {
    const overlay = document.getElementById('subliminal-overlay');
    overlay.style.display = 'flex';
    setTimeout(() => {
        overlay.style.display = 'none';
    }, 120); 
}