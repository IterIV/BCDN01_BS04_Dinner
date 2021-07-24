
function openNav() {
    var navMenu = document.getElementById("navbar_menuContent");
    navMenu.classList.remove("d-none");
}
function closeNav() {
    document.getElementById("navbar_menuContent").classList.add("d-none");
}

// Counting up Number
$('.counter').countUp();

// Slick Carousel
$(document).ready(function(){
    $('.say__carousel').slick({
        dots: true,
        slidesToShow: 1,
        arrows: false
    });
  });