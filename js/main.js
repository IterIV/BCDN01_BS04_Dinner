// Dark and Light Mode
function modeChange(){
    var darkBtn = document.getElementById("dark__btn");
    var lightBtn = document.getElementById("light__btn");
    var body = document.body;
    var isLight = darkBtn.className=="";
    if (isLight) {
        lightBtn.classList.remove("d-none");
        darkBtn.classList.add("d-none");
        body.classList.add("darkMode");
    } else {
        darkBtn.classList.remove("d-none");
        lightBtn.classList.add("d-none");
        body.classList.remove("darkMode");
    }

}

// Navbar Open and close
function openNav() {
    var navMenu = document.getElementById("navbar_menuContent");
    navMenu.classList.remove("d-none");
}
function closeNav() {
    document.getElementById("navbar_menuContent").classList.add("d-none");
}

// Counting up Number
$('.counter').countUp();


//Video
$(document).ready(function () {
  $(".popup-with-zoom-anim").magnificPopup({
    type: "inline",
    closeOnBgClick: true, // Tắt popup khi click vào vùng tối
    midClick: true, 
    preloader: false, //Tắt thông báo trạng thái khi load popup
    closeBtnInside: true, //Nút close hiển thị trong popup
    enableEscapeKey: true, //Sử dụng nút esc để tắt popup
    fixedContentPos: false, //Tùy chọn thuộc tính position:absolute
    fixedBgPos: true, 
    removalDelay: 300,
    mainClass: "my-mfp-zoom-in"
  });
});


// Slick Carousel
$(document).ready(function(){
    $('.say__carousel').slick({
        dots: true,
        slidesToShow: 1,
        arrows: false
    });
  });

// Back to Top Button
mybutton = document.getElementById("myBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0; 
}