/*2.1*/
document.querySelector('.show-btn').addEventListener('click', () => {
    document.querySelector('.a').classList.toggle('close');
    })



/*2.2*/
document.querySelector('.swap-btn').addEventListener(('click'), () => {
    document.querySelector('.items').classList.toggle('swap');
})

/*2.3*/
const modal = document.querySelector('.popup');
const closePopup = document.querySelector('.popup__btn');

function showPopup() {
    modal.style.visibility = 'visible';
    modal.style.opacity = '1';
    modal.style.transition = 'all 0.5s ease-out 0s';
}
setTimeout(showPopup, 500);

closePopup.addEventListener('click', () => {
    modal.style.visibility = 'hidden';
    modal.style.opacity = '0';
})
