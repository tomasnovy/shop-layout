// Hamburger Menu

const sidebar = document.getElementById('mobile-menu');


document.addEventListener('click', function(event) {
  if (event.target.classList.contains('toggle')) {
    event.preventDefault();
    sidebar.classList.toggle('open');
  }
}, false);


// Overlay on hover

$('.bestsellers-item a').hover(
  function() {
    $(this).find('.overlay').toggleClass('overlay-visible');
  }
);

