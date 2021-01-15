'use strict';

const animContainer = document.getElementById('cta-btn');

const animation = lottie.loadAnimation({
    container: animContainer,
    renderer: 'svg',
    loop: false,
    autoplay: false,
    path: './data/v_01.json'
});

animation.addEventListener('data_ready', function() {
    animContainer.addEventListener('click', function() {
        animation.goToAndPlay(1);
    });
    // const shadowLayer = animContainer.getElementById('shadow');
    // console.log(shadowLayer);
});
