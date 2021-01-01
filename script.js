'use strict';

const toggleSwitch = document.querySelector('#toggle-switch');
const wishes = document.querySelector('#wishes');

toggleSwitch.addEventListener('change', () => {
    const currentTheme = document.documentElement.getAttribute('view-mode');
    if (currentTheme && currentTheme === 'dark') {
        document.documentElement.removeAttribute('view-mode');
    } else {
        document.documentElement.setAttribute('view-mode', 'dark');
    }
    showConfetti();
});

const showConfetti = () => {
    // To show confetti on screen
    setTimeout(() => {
        party.screen({
            count: 500 * (window.innerWidth / 1980),
            countVariation: 0.5,
            angleSpan: 0,
            yVelocity: -100,
            yVelocityVariation: 2,
            rotationVelocityLimit: 6,
            scaleVariation: 0.8
        });
    }, 1000);
}

// Code for Chrome, Safari and Opera
wishes.addEventListener("webkitAnimationEnd", showConfetti);

// Standard syntax
wishes.addEventListener("animationend", showConfetti);

