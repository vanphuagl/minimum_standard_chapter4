/* eslint-disable no-useless-escape */
/* eslint-disable indent */
/*eslint linebreak-style: ["error", "windows"]*/

let $ = document.querySelector.bind(document);
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
let scrollBar = $(".c-scrollbar");

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

  if (scrollTopHeader > 70) {
    header.classList.add("is-active");
    scrollBar.classList.add("is-active");
  } else {
    header.classList.remove("is-active");
    scrollBar.classList.remove("is-active");
  }

  if (scrollTopHeader > window.innerHeight - 80) {
    scrollTop.classList.add("is-active");
  } else {
    scrollTop.classList.remove("is-active");
  }
}

/* ---------------------------- SCROLL BAR HEADER --------------------------- */
window.addEventListener("load", function () {
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

navToggle.addEventListener("click", function () {
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

/* -------------------------------- VALIDATE -------------------------------- */
const form = document.getElementById("form");
const username = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const survey = document.getElementById("survey");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  checkInputs();
});

function checkInputs() {
  // trim to remove the whitespaces
  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();
  const phoneValue = phone.value.trim();
  const surveyValue = survey.value.trim();

  if (usernameValue === "") {
    setErrorFor(username, "ユーザー名は空白にできません");
  } else {
    setSuccessFor(username);
  }

  if (emailValue === "") {
    setErrorFor(email, "電子メールを空白にすることはできません");
  } else if (!isEmail(emailValue)) {
    setErrorFor(email, "有効な電子メールではありません");
  } else {
    setSuccessFor(email);
  }

  if (phoneValue === "") {
    setErrorFor(phone, "電話を空白にすることはできません");
  } else {
    setSuccessFor(phone);
  }
  if (surveyValue === "") {
    setErrorFor(survey, "メッセージを空白にすることはできません");
  } else {
    setSuccessFor(survey);
  }

  if (usernameValue && emailValue && phoneValue && surveyValue !== "") {
    let data = {
      name: usernameValue,
      email: emailValue,
      phone: phoneValue,
      message: surveyValue,
    };
    let resultString = "";
    // for (const [key, value] of Object.entries(data)) {
    //   resultString += `${key}: ${value}\n`;
    // }

    for (var key in data) {
      if (data.hasOwnProperty(key)) {
        var value = data[key];
        resultString += key + ": " + value + "\n";
      }
    }
    alert("Your mail has been sent successfully!\n" + resultString);
  }
}
function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");
  formControl.className = "p-form__item error p-form__item--require";
  small.innerText = message;
}

function setSuccessFor(input) {
  const formControl = input.parentElement;
  formControl.className = "p-form__item p-form__item--require";
}

function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}
