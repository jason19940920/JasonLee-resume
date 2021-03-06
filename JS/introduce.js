//@DOM
const responsiveBar = document.querySelector('.responsive-bar');
const responsiveMenu = document.querySelector('.responsive-menu');
const search = document.querySelector('#search')


responsiveBar.addEventListener('click', () => {
    responsiveMenu.classList.toggle('slide-in');
})

search.addEventListener('click', () => {
    document.querySelector('.introduce').style.opacity = "1";
    document.querySelector('.introduce').style.transform = "translateY(-40px)";    
    document.querySelector('footer').style.opacity = "1"; 
    document.querySelector('footer').style.transform = "translateY(-40px)"; 
    document.querySelector('.input').style.opacity = "0"; 
})

// typed.js
$(document).ready(() => {
    var typed = new Typed('#auto-type', {
        strings: [
            '我的名字叫李季謙^300，喜歡接受新的挑戰與學習新事物',
            '因嚮往著周遊日本並架設屬於自己的旅遊部落格',
            '希望能成為將創意與所學結合並繪製成網頁的前端工程師。'
        ],
        typeSpeed: 60,
        backSpeed: 20,
        loop: true,
    });
})
