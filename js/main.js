'use strict';

// WOW
let wow = new WOW({
  boxClass: 'wow', // animated element css class (default is wow)
  animateClass: 'animate__animated', // animation css class (default is animated)
  offset: 90, // distance to the element when triggering the animation (default is 0)
  mobile: false, // trigger animations on mobile devices (default is true)
  //live: true, // act on asynchronously loaded content (default is true)
  /*callback: function (box) {
    // the callback is fired every time an animation is started
    // the argument that is passed in is the DOM node being animated
  },*/
});
wow.init();

// Burger
document.addEventListener('DOMContentLoaded', () => {

  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {

    // Add a click event on each of them
    $navbarBurgers.forEach(el => {
      el.addEventListener('click', () => {

        // Get the target from the "data-target" attribute
        const target = el.dataset.target;
        const $target = document.getElementById(target);

        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        el.classList.toggle('is-active');
        $target.classList.toggle('is-active');

      });
    });
  }
});

// Navbar Scroll
window.onscroll = () => {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("navbar").classList.add("navbar__scroll");
  } else {
    document.getElementById("navbar").classList.remove("navbar__scroll");
  }
};