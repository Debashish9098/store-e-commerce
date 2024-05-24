function copyMenu() {
  // Copy contents from .dpt-cat to .departments
  var dptCategory = document.querySelector(".dpt-cat");
  var dptPlace = document.querySelector(".departments");
  dptPlace.innerHTML = dptCategory.innerHTML;

  // Copy contents from .header-nav nav to .off-canvas nav
  var mainNav = document.querySelector(".header-nav nav");
  var navPlace = document.querySelector(".off-canvas nav");
  navPlace.innerHTML = mainNav.innerHTML;

  // Copy contents from .header-top .wrapper to .off-canvas .thetop-nav
  var topNav = document.querySelector(".header-top .wrapper");
  var topPlace = document.querySelector(".off-canvas .thetop-nav");
  topPlace.innerHTML = topNav.innerHTML;
}

// Call the copyMenu function to execute it
copyMenu();

// show mobile menu

const menuButton = document.querySelector(".trigger"),
  closeButton = document.querySelector(".t-close"),
  addclass = document.querySelector(".site");
menuButton.addEventListener("click", function () {
  addclass.classList.toggle("showmenu");
});

closeButton.addEventListener("click", function () {
  addclass.classList.remove("showmenu");
});

// show sub menu on mobile

const submenus = document.querySelectorAll(".has-child .icon-small");

submenus.forEach((submenu) => {
  submenu.addEventListener("click", toggle);
});

function toggle(e) {
  e.preventDefault();

  submenus.forEach((item) => {
    if (item.closest(".has-child") !== this.closest(".has-child")) {
      item.closest(".has-child").classList.remove("expand");
    }
  });

  if (this.closest(".has-child").classList.contains("expand")) {
    this.closest(".has-child").classList.remove("expand");
  } else {
    this.closest(".has-child").classList.add("expand");
  }
}

// slider

const swiper = new Swiper(".myslider", {
  loop: true,
  autoplay: {
    delay: 5000,
  },
  pagination: {
    el: ".swiper-pagination",
  },
});

// show search

const searchButton = document.querySelector(".t-search");
const tClose = document.querySelector(".search-close");
const showClass = document.querySelector(".site");

searchButton.addEventListener("click", function () {
  showClass.classList.toggle("showsearch");
});

tClose.addEventListener("click", function () {
  showClass.classList.remove("showsearch");
});

// show dpt menu

const dptButton = document.querySelector(".dpt-cat .dpt-trigger");
const dptClass = document.querySelector(".site");

dptButton.addEventListener("click", function () {
  dptClass.classList.toggle("showdpt");
});

//  product image slider

var productThumb = new Swiper(".small-image", {
  loop: true,
  spaceBetween: 10,
  slidesPerView: 3,
  freeMode: true,
  watchSlidesProgress: true,
  breakpoints: {
    481: {
      spaceBetween: 32,
    },
  },
});

var productBig = new Swiper(".big-image", {
  loop:true,
  autoHeight:true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  thumbs: {
    swiper: productThumb
  }
});

// stock products bar width percentage 

var stocks = document.querySelectorAll('.products .stock');
for (let x = 0; x < stocks.length; x++) {
  let stock = stocks[x].dataset.stock,
      available = stocks[x].querySelector('.qty-available').innerHTML,
      sold = stocks[x].querySelector('.qty-sold').innerHTML,
      percent = sold * 100 / stock;

  stocks[x].querySelector('.available').style.width = percent + '%';
}


// Filter

document.addEventListener('DOMContentLoaded', function() {
  const FtoShow = '.filter';
  const Fpopup = document.querySelector(FtoShow);
  const Ftrigger = document.querySelector('.filter-trigger');

  if (Fpopup && Ftrigger) {
    Ftrigger.addEventListener('click', () => {
      setTimeout(() => {
        if (!Fpopup.classList.contains('show')) {
          Fpopup.classList.add('show');
        }
      }, 250);
    });

    document.addEventListener('click', (e) => {
      const isClosest = e.target.closest(FtoShow);
      if (!isClosest && Fpopup.classList.contains('show')) {
        Fpopup.classList.remove('show');
      }
    });
  }
});




// show cart

const divtoshow = 'mini-cart';
const divpoppup = document.querySelector('.mini-cart');
const divTrigger = document.querySelector('.cart-trigger');

divTrigger.addEventListener('click', () => {
    setTimeout(() => {
        if (!divpoppup.classList.contains('show')) {
            divpoppup.classList.add('show');
        }
    }, 250);
});

// close by click outside

document.addEventListener('click', (e) => {
    const isClosest = e.target.closest(divtoshow);
    if (!isClosest && divpoppup.classList.contains('show')) {
        divpoppup.classList.remove('show')
    }
});

// ṣhow modal on load

window.onload = function () {
  document.querySelector('.site').classList.toggle('showmodal')
}
document.querySelector('.modalclose').addEventListener('click', function (){
  document.querySelector('.site').classList.remove('showmodal')
})


const backToTopLink = document.querySelector('.backtotop a');

backToTopLink.addEventListener('click', function(event) {
  event.preventDefault(); // Prevent default link behavior
  window.scrollTo({ top: 0, behavior: 'smooth' }); // Smooth scroll to top
});



