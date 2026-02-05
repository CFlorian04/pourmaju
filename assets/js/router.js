const routes = {
    home: `<h1>Coucou toi ❤️</h1><p>Bienvenue dans notre petit coin du web.</p>`,
    timeline: `<h2>Notre premier mois</h2>...`,
    gallery: `<h2>Quelques souvenirs</h2>...`,
    message: `<h2>Juste un mot...</h2>...`
};

const navigate = (target) => {
    const container = document.getElementById('view-container');
    container.style.opacity = 0; // Transition out

    setTimeout(() => {
        container.innerHTML = routes[target];
        container.style.opacity = 1; // Transition in
        window.scrollTo(0, 0);
    }, 200);
};

document.querySelectorAll('.nav-item').forEach(btn => {
    btn.addEventListener('click', (e) => {
        const target = e.currentTarget.getAttribute('data-target');
        navigate(target);
        
        // Update UI active state
        document.querySelector('.active').classList.remove('active');
        e.currentTarget.classList.add('active');
    });
});