const profile = document.querySelector('.profile');
const share = document.querySelector('.share-pop-up');
const shareBtn = document.querySelector('.share');
const shareBtnPopUp = document.querySelector('.pop-up');

shareBtn.addEventListener('click', () => {
    if (document.documentElement.scrollWidth < 1440) {
        profile.classList.toggle('hidden');
        share.classList.toggle('hidden');
    } else {
        share.classList.toggle('hidden');
    }
});

shareBtnPopUp.addEventListener('click', () => {
    profile.classList.toggle('hidden');
    share.classList.toggle('hidden');
});