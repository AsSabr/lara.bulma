'use strict'; // WOW

var wow = new WOW({
  boxClass: 'wow',
  // animated element css class (default is wow)
  animateClass: 'animate__animated' // animation css class (default is animated)
  //offset: 0, // distance to the element when triggering the animation (default is 0)
  //mobile: true, // trigger animations on mobile devices (default is true)
  //live: true, // act on asynchronously loaded content (default is true)

  /*callback: function (box) {
    // the callback is fired every time an animation is started
    // the argument that is passed in is the DOM node being animated
  },*/

});
wow.init(); // Burger

document.addEventListener('DOMContentLoaded', function () {
  // Get all "navbar-burger" elements
  var $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0); // Check if there are any navbar burgers

  if ($navbarBurgers.length > 0) {
    // Add a click event on each of them
    $navbarBurgers.forEach(function (el) {
      el.addEventListener('click', function () {
        // Get the target from the "data-target" attribute
        var target = el.dataset.target;
        var $target = document.getElementById(target); // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"

        el.classList.toggle('is-active');
        $target.classList.toggle('is-active');
      });
    });
  }
});