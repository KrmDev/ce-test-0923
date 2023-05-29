const greyStar = document.querySelector(".grey-star");
const greyStarRounded = document.querySelector(".grey-star-rounded");
const yellowStar = document.querySelector(".yellow-star");
const yellowStarRounded = document.querySelector(".yellow-star-rounded");
const portal = document.querySelector(".portal");

let state = 0;

function animateStar(star, isReverse = false) {
    star.classList.add('animate');

    setTimeout(function() {
        star.classList.add(isReverse ? 'star-rounded' : 'star-pointy');
    }, 1000);

    setTimeout(function() {
        star.classList.remove('animate', isReverse ? 'star-pointy' : 'star-rounded');
    }, 2000);
}


greyStar.addEventListener('click', function() {
    animateStar(greyStar);

    setTimeout(function() {
        greyStar.classList.add('hidden');
        greyStarRounded.classList.remove('hidden');
        animateStar(greyStarRounded);
    }, 2000);

    setTimeout(function() {
        portal.classList.add('open');
    }, 4000);

    setTimeout(function() {
        greyStarRounded.classList.add('hidden');
        yellowStarRounded.classList.remove('hidden');
        animateStar(yellowStarRounded, true);
    }, 6000);

    setTimeout(function() {
        yellowStarRounded.classList.add('hidden');
        yellowStar.classList.remove('hidden');
        animateStar(yellowStar);
    }, 7000);

    setTimeout(function() {
        portal.classList.remove('open');
        state = 1;
    }, 8000);
});

yellowStar.addEventListener('click', function() {
    animateStar(yellowStar, portal, true);
});

function handleClick() {
    if (state === 0) {
       
        portal.classList.remove("hidden");
        portal.classList.add("opening");
        portal.style.zIndex = "3"; 

        
        greyStar.classList.add("animate");

        setTimeout(() => {
            greyStar.classList.add("hidden");
            greyStarRounded.classList.remove("hidden");
            greyStarRounded.classList.add("animate");
        }, 2000);

        setTimeout(() => {
            greyStarRounded.classList.add("hidden");
            yellowStar.classList.remove("hidden");
            yellowStar.classList.add("animate");
            portal.style.zIndex = "1";
        }, 4000);

        setTimeout(() => {
            yellowStar.classList.add("hidden");
            yellowStarRounded.classList.remove("hidden");
            portal.classList.remove("opening");
            portal.classList.add("closing");
        }, 6000);

        setTimeout(() => {
            portal.classList.add("hidden");
            portal.classList.remove("closing");
            state = 1;
        }, 8000);

    } else {

        portal.classList.remove("hidden");
        portal.classList.add("opening");
        portal.style.zIndex = "3"; 

        
        yellowStarRounded.classList.add("animateReverse");

        setTimeout(() => {
            yellowStarRounded.classList.add("hidden");
            yellowStar.classList.remove("hidden");
            yellowStar.classList.add("animateReverse");
        }, 2000);

        setTimeout(() => {
            yellowStar.classList.add("hidden");
            greyStarRounded.classList.remove("hidden");
            greyStarRounded.classList.add("animateReverse");
            portal.style.zIndex = "1"; 
        }, 4000);

        setTimeout(() => {
            greyStarRounded.classList.add("hidden");
            greyStar.classList.remove("hidden");
            portal.classList.remove("opening");
            portal.classList.add("closing");
        }, 6000);

        setTimeout(() => {
            portal.classList.add("hidden");
            portal.classList.remove("closing");
            state = 0;
        }, 8000);
    }
}

greyStar.addEventListener("click", handleClick);
greyStarRounded.addEventListener("click", handleClick);
yellowStar.addEventListener("click", handleClick);
yellowStarRounded.addEventListener("click", handleClick);





  
  
  