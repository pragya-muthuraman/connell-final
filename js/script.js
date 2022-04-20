
window.onload = function () {
  const navList = document.querySelector("#nav");
  const canvasEle = document.querySelector("#offcanvasNavbar");

  const videoModalEle = document.querySelector("#videoModal");
  const videoEle = videoModalEle.querySelector("video");

  videoModalEle.addEventListener("shown.bs.modal", () => {
    videoEle.play();
  });

  videoModalEle.addEventListener("hide.bs.modal", () => {
    videoEle.pause();
    video.currentTime = 0;
  })

  navList.addEventListener("click", () =>
    setTimeout(function () {
      const hash = window.location.hash.substr(1);
      if (hash) {
        navList.querySelector(".active").classList.remove("active");
        navList.querySelector(`#nav-${hash}`).classList.add("active");
      }
    })
  );
  const bsOffcanvas = new bootstrap.Offcanvas(canvasEle);
  canvasEle.addEventListener("click", (event) => {
    setTimeout(() => {
      bsOffcanvas.hide();
    }, 700);
  });
};

// Scroll active
const navLi = document.querySelectorAll("#nav li");
const contactLink = document.querySelector("#nav-contact");
const anchorEle = [];
let scrollCheck = true;
navLi.forEach((ele) => {
  anchorEle.push(document.querySelector(`#${ele.id.split("-")[1]}`));
});

anchorEle.pop();

console.log(anchorEle);
window.onscroll = () => {
  var current = "";

  anchorEle.forEach((section) => {
    const sectionTop = section.offsetTop;
    if (scrollCheck) {
      if (pageYOffset >= sectionTop - 70 || pageYOffset >= sectionTop) {
        current = `nav-${section.getAttribute("id")}`;
      }
    } else {
      current = "nav-contact";
    }
  });

  navLi.forEach((li) => {
    li.classList.remove("active");
    if (li.id === current) {
      // console.log("SELECTED NAV ELE", li);
      li.classList.add("active");
    }
  });
};

contactLink.addEventListener("click", () => {
  scrollCheck = false;
  contactLink.classList.add("active");
  setTimeout(() => {
    scrollCheck = true;
  }, 2000);
});

// latest news
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 150,
  loop: false,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 150,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 100,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 226,
    },
    1440: {
      slidesPerView: 3,
      spaceBetween: 23,
    },
    4000: {
      slidesPerView: 4,
      spaceBetween: 0,
    }
  },
});
//change logo on scroll function
$(function () { 
  $(window).scroll(function () {
      if ($(this).scrollTop() < 5) { 
          $('.navbar .navbar-brand img').attr('src','./images/banner/connoll-final-logo.svg');
          $(".fixed-top").css("background" , "transparent");
          $(".fixed-top").css("top" , "100px");
          $(".navbar-custom").css("height" , "29px");
      }
      if ($(this).scrollTop() > 5) { 
          $('.navbar .navbar-brand img').attr('src','./images/banner/onscroll-logo.svg');
          $(".fixed-top").css("background" , "#002060");
          $(".fixed-top").css("top" , "0px");
          $(".navbar-custom").css("height" , "52px");
      }
  })
});

// testimonial
var swiper = new Swiper(".mySwiper-testi", {
  slidesPerView: 1,
  spaceBetween: 131,
  loop: false,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next7',
    prevEl: '.swiper-button-prev7',
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    768: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    1024: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    1440: {
      slidesPerView: 1,
      spaceBetween: 20,
    }
  },
});

//banner image
var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 10000); // Change image every 4 seconds
}


// dropdown menu
document.addEventListener("DOMContentLoaded", function(){
  if (window.innerWidth < 992) {
  

    document.querySelectorAll('.navbar .dropdown').forEach(function(everydropdown){
      everydropdown.addEventListener('hidden.bs.dropdown', function () {

          this.querySelectorAll('.submenu').forEach(function(everysubmenu){

            everysubmenu.style.display = 'none';
          });
      })
    });
  
    document.querySelectorAll('.dropdown-menu a').forEach(function(element){
      element.addEventListener('click', function (e) {
          let nextEl = this.nextElementSibling;
          if(nextEl && nextEl.classList.contains('submenu')) {	

            e.preventDefault();
            if(nextEl.style.display == 'block'){
              nextEl.style.display = 'none';
            } else {
              nextEl.style.display = 'block';
            }
  
          }
      });
    })
  }

  }); 
  // modal bootstrap
  var myModal = document.getElementById('myModal')
var myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', function () {
  myInput.focus()
})
