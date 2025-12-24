const topbar = document.querySelector('.topbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 0) {
    topbar.classList.add('blur');
  } else {
    topbar.classList.remove('blur');
  }
});
