
let burger = document.querySelector('.nav__burger');
let menu = document.querySelector('.nav__list');
let menuLinks = menu.querySelectorAll('.nav__link');

burger.addEventListener('click', 
  function () {
    burger.classList.toggle('burger-active');

    menu.classList.toggle('nav__list-active');

    document.body.classList.toggle('stop-scroll');
  });

menuLinks.forEach(function (el) {
  el.addEventListener('click', 
  
    function () {

      burger.classList.remove('burger-active');

      menu.classList.remove('nav__list-active');

      document.body.classList.remove('stop-scroll');
    });
})

const swiper = new Swiper('.swiper', {
  setWrapperSize: true,
  slidesPerView: 1,
  slidesPerGroup: 1,
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },
})

let tabsBtn = document.querySelectorAll('.how-we-work__item-btn');
let tabsItem = document.querySelectorAll('.how-we-work__bottom-content');

tabsBtn.forEach(function(element){
  element.addEventListener('click', function(e){
    const path = e.currentTarget.dataset.path;

    tabsBtn.forEach(function(btn){ btn.classList.remove('how-we-work__item-btn_active')});
    e.currentTarget.classList.add('how-we-work__item-btn_active');

    tabsItem.forEach(function(element){ element.classList.remove('how-we-work__bottom-content_active')});
    document.querySelector(`[data-target="${path}"]`).classList.add('how-we-work__bottom-content_active');
  });
});

$( function() {
  $( "#accordion" ).accordion({
    active: false,
    heightStyle: "content",
    collapsible: true,
  });
  
} );


document.querySelector("#search").addEventListener("click", 
  function () {
    document.querySelector("#form").classList.toggle("active");
    document.querySelector("#search").classList.toggle("act");
    document.querySelector("#menu").classList.toggle("act");
    document.querySelector("#burger").classList.toggle("act");
});

document.querySelector("#close").addEventListener("click", 
  function () {
    document.querySelector("#form").classList.toggle("active");
    document.querySelector("#search").classList.toggle("act");
    document.querySelector("#menu").classList.toggle("act");
    document.querySelector("#burger").classList.toggle("act");
});