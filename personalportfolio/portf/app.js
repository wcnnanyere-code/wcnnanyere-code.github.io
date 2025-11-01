const hamburger = document.getElementById('hamburger');
const nav = document.querySelector('nav');
const icon = hamburger.querySelector('i');
const overlay = document.querySelector('.menu-overlay');

// 🔹 Apre o chiude il menu
hamburger.addEventListener('click', () => {
  nav.classList.toggle('active');
  overlay.classList.toggle('active');
  icon.classList.toggle('fa-bars');
  icon.classList.toggle('fa-xmark');
});

// 🔹 Chiude il menu se clicchi sull’overlay bianco
overlay.addEventListener('click', () => {
  nav.classList.remove('active');
  overlay.classList.remove('active');
  icon.classList.add('fa-bars');
  icon.classList.remove('fa-xmark');
});

// 🔹 Chiude il menu se clicchi su un link
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('active');
    overlay.classList.remove('active');
    icon.classList.add('fa-bars');
    icon.classList.remove('fa-xmark');
  });
});

// 🔹 Nasconde l’hamburger quando scrolli in giù
let lastScrollY = window.scrollY;

window.addEventListener('scroll', () => {
  if (window.scrollY > lastScrollY && window.scrollY > 100) {
    // Scorri in giù → nascondi
    hamburger.style.opacity = '0';
    hamburger.style.pointerEvents = 'none';
    hamburger.style.transform = 'translateY(-20px)';
  } else {
    // Scorri in su → mostra
    hamburger.style.opacity = '1';
    hamburger.style.pointerEvents = 'auto';
    hamburger.style.transform = 'translateY(0)';
  }
  lastScrollY = window.scrollY;
});
