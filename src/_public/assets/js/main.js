/* eslint-disable indent */
/*eslint linebreak-style: ["error", "windows"]*/

let $ = document.querySelector.bind(document);
let $$ = document.querySelectorAll.bind(document);
window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};
// header
let header = $(".c-header");
let headerNavList = $(".c-header__list");
let scrollTop = $(".c-scroll");
let showNavSub1 = $("#show-navsub1");
let showNavSub2 = $("#show-navsub2");
let goBack = $("#goBack");

// slider
let slider = $(".p-slider__wrapper");
let sliderControl = $$(".p-slider__circle");
let postNews = $(".p-slider__news");
let postNewsItems = $$(".p-slider__news > a");
let nextPost = $("#next");
let prevPost = $("#prev");
let currentSlide = 1;
let currentPost = 0;

// reality
let realityList = $(".p-reality__list");
let realityListItems = $$(".p-reality__list > li");
let btnLeft = $(".p-reality__btnleft");
let btnRight = $(".p-reality__btnright");
let currentIndex = 0;

/* --------------------------------- SCROLL TO TOP --------------------------------- */
window.onscroll = function () {
  handleScrollTopHeader();
};

function handleScrollTopHeader() {
  let scrollTopHeader =
    window.pageYOffset ||
    document.documentElement.scrollTop ||
    document.body.scrollTop ||
    0;

  if (scrollTopHeader > 50) {
    header.classList.add("is-active");
  } else {
    header.classList.remove("is-active");
  }

  if (scrollTopHeader > window.innerHeight - 80) {
    scrollTop.classList.add("is-active");
  } else {
    scrollTop.classList.remove("is-active");
  }
}

/* ---------------------------- SCROLL BAR HEADER --------------------------- */
window.addEventListener("load", () => {
  const scrollBar = document.querySelector(".c-scrollbar");
  window.addEventListener("scroll", function () {
    let scrollY = window.pageYOffset;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    scrollBar.style.width = (scrollY / height) * 100 + "%";
  });
});

/* ---------------------------------- MENU ---------------------------------- */
const navToggle = $("#showMenu");
const bodyOverflow = $("body");

navToggle.addEventListener("click", () => {
  bodyOverflow.classList.toggle("is-notscroll");
});

/* --------------------------------- SUBMENU -------------------------------- */
goBack.onclick = function () {
  headerNavList.classList.remove("is-navsub1", "is-navsub2");
};
showNavSub1.onclick = function () {
  headerNavList.classList.add("is-navsub1");
};
showNavSub2.onclick = function () {
  headerNavList.classList.add("is-navsub2");
};

/* --------------------------------- SLIDER --------------------------------- */
let clearSlider = function () {
  for (let i = 0; i < sliderControl.length; i++) {
    slider.classList.remove(`p-slider__visual${i + 1}`);
  }
};

let clearSliderControl = function () {
  for (let i = 0; i < sliderControl.length; i++) {
    sliderControl[i].classList.remove("is-active");
  }
};

let clearPostSlider = function () {
  for (let i = 0; i < postNewsItems.length; i++) {
    postNews.classList.remove(`is-next${i}`);
  }
};

for (let i = 0; i < sliderControl.length; i++) {
  sliderControl[i].onclick = function () {
    clearSlider();
    clearSliderControl();
    slider.classList.add(`p-slider__visual${i + 1}`);
    sliderControl[i].classList.add("is-active");
  };
}

let renderSlider = function () {
  clearSlider();
  clearSliderControl();
  slider.classList.add(`p-slider__visual${currentSlide}`);
  sliderControl[currentSlide - 1].classList.add("is-active");
};

let nextSlider = function () {
  currentSlide = currentSlide >= sliderControl.length ? 1 : currentSlide + 1;
  renderSlider();
};

slider.classList.add("p-slider__visual1");

/* ---------------------------------- POST ---------------------------------- */
let nextPostNews = function () {
  clearPostSlider();
  currentPost = currentPost >= postNewsItems.length ? 1 : currentPost + 1;
  postNews.classList.add(`is-next${currentPost}`);
};

let prevPostNews = function () {
  clearPostSlider();
  currentPost = currentPost <= 0 ? postNewsItems.length - 1 : currentPost - 1;
  postNews.classList.add(`is-next${currentPost}`);
};
prevPost.onclick = prevPostNews;
nextPost.onclick = nextPostNews;

/* --------------------------------- REALITY -------------------------------- */
let clearRealityListItems = function () {
  for (let i = 0; i < realityListItems.length; i++) {
    realityList.classList.remove(`is-next${i}`);
  }
};

let prevRealityItem = function () {
  clearRealityListItems();
  currentIndex =
    currentIndex <= 0 ? realityListItems.length - 1 : currentIndex - 1;
  realityList.classList.add(`is-next${currentIndex}`);
};

let nextRealityItem = function () {
  clearRealityListItems();
  currentIndex =
    currentIndex >= realityListItems.length - 1 ? 0 : currentIndex + 1;
  realityList.classList.add(`is-next${currentIndex}`);
};
btnLeft.onclick = prevRealityItem;
btnRight.onclick = nextRealityItem;

/* -------------------------------- INTERVAL -------------------------------- */
setInterval(() => {
  nextSlider();
  nextPostNews();
  nextRealityItem();
}, 8000);
