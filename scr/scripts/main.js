const menuBtn = document.querySelector('.menu-btn');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
  if(!menuOpen) {
    menuBtn.classList.add('open');
    menuOpen = true;
  } else {
    menuBtn.classList.remove('open');
    menuOpen = false;
  }
});

const navResp = document.querySelector('.topnav');
let navSmall = false;
navResp.addEventListener('click', () => {
  if(!navSmall) {
    navResp.classList.add('responsive');
    navSmall = true;
  } else {
    navResp.classList.remove('responsive');
    navSmall = false;
  }
});