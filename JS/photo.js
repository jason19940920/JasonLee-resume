//@DOM
const responsiveBar = document.querySelector('.responsive-bar');
const responsiveMenu = document.querySelector('.responsive-menu');


responsiveBar.addEventListener('click', () => {
    responsiveMenu.classList.toggle('slide-in');
})

$(function(){
    $('#work').magnificPopup({
        delegate:'a',
        type:'image',
        gallery:{
            enabled:true
        }
    });
})