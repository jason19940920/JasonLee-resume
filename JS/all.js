//@DOM
const responsiveBar = document.querySelector('.responsive-bar');
const responsiveMenu = document.querySelector('.responsive-menu');


responsiveBar.addEventListener('click', () => {
    responsiveMenu.classList.toggle('slide-in');
})

//add boxshadow for header when scroll
$(window).scroll(function() {     
    var scroll = $(window).scrollTop();
    if (scroll > 0) {
        $("header").addClass("shadow");
    }
    else {
        $("header").removeClass("shadow");
    }
});