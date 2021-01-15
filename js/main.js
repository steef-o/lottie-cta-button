'use strict';

// get container ref from DOM.
const animContainer = document.getElementById('cta-btn');

// init animation
const animation = lottie.loadAnimation({
    container: animContainer,
    renderer: 'svg',
    loop: false,
    autoplay: false,
    path: './data/v_01.json'
});

// Wait for animation to be initialized
animation.addEventListener('data_ready', function() {
    //Add click event lister
    animContainer.addEventListener('click', function() {
        // Play animation from start.
        animation.goToAndPlay(1);
    });
});
