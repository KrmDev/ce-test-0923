const greyStar = document.querySelector('.grey-star');
const portal = document.querySelector('.portal');

greyStar.addEventListener('click', showPortal);

function showPortal() {
  portal.classList.remove('hidden');
}


greyStar.addEventListener('click', () => {
  portal.classList.remove('hidden');
  greyStar.classList.add('clicked');
});



