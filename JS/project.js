//@DOM
const responsiveBar = document.querySelector('.responsive-bar');
const responsiveMenu = document.querySelector('.responsive-menu');


responsiveBar.addEventListener('click', () => {
    responsiveMenu.classList.toggle('slide-in');
})

// document.addEventListener('DOMContentLoaded', function() {
//     var elems = document.querySelectorAll('.carousel');
    
//   });

  // Or with jQuery

  $(document).ready(function(){
    $('.carousel').carousel({
      indicators: true
    });
    setInterval(() => {
      $('.carousel').carousel('next')
    },5000);
    
  });

      