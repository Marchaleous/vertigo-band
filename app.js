const aboutLink = document.getElementById('aboutLink');

const shiftWindow = function () {
  scrollBy(0, -60);
};
if (location.hash) shiftWindow();
window.addEventListener('hashchange', shiftWindow);
