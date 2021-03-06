//@DOM
const responsiveBar = document.querySelector('.responsive-bar');
const responsiveMenu = document.querySelector('.responsive-menu');


responsiveBar.addEventListener('click', () => {
    responsiveMenu.classList.toggle('slide-in');
})

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.carousel');
    var instances = M.Carousel.init(elems);
  });

  // Or with jQuery

  $(document).ready(function(){
    $('.carousel').carousel();
  });
      