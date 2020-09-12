// Closes hamburger menu automatically after clicking link
$('.navbar-collapse a:not(.dropdown-toggle)').click(function () {
  $('.navbar-collapse').collapse('hide');
});

// Scrolls up so nav doesn't cover title
const shiftWindow = () => {
  if (location.hash === '#about') {
    scrollBy(0, -60);
  }
};

// Listens for click
window.addEventListener('hashchange', shiftWindow);
