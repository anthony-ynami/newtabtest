$(document).ready(function() {

    // MAKE THE WORLD SPIN
    var worldElement = $('.world')[0],
        worldImages = [
            'images/world-1.png',
            'images/world-2.png',
            'images/world-3.png'
        ],
        currentImageIndex = 0;

    setInterval(spinWorld, 1000);

    function spinWorld() {
        currentImageIndex ++;

        if (currentImageIndex === worldImages.length) {
            currentImageIndex = 0;
        }

        worldElement.setAttribute('src', worldImages[currentImageIndex]);
    }
    
var affirms = [
'Every day and in every way I am getting better and better','I am abundantly joyful and happy','I am so grateful for my life','I find beauty and joy in ordinary things','My life is a joy. I relax easily and open myself up to delightful surprises','My life is a joy filled with love, fun and friendship','I choose love, joy and freedom, open my heart and allow wonderful things to flow into my life','I am free, and always have been. Experiences that made me feel like a victim were only experiences that appeared and disappeared in the arena of consciousness that I am',
];
function newAffirm(){
    var randomNumber = Math.floor(Math.random()*(affirms.length));
    document.getElementById('affirmDisp').innerHTML = affirms[randomNumber];
    console.log("affirmed");
};

});
