let elmcon = document.querySelector(".elem-container");
let fixed = document.querySelector(".fixed");
let elm = document.querySelectorAll(".eml");
let t1 = document.querySelectorAll(".t1");
let innertext = document.querySelector(".innertext");
elmcon.addEventListener("mouseenter", function () {
  fixed.style.display = "block";
});
elmcon.addEventListener("mouseleave", () => {
  fixed.style.display = "none";
});
elm.forEach((e) => {
  e.addEventListener("mouseenter", () => {
    let image = e.getAttribute("data-imag");
    fixed.style.backgroundImage = `url(${image})`;
  });
});

fixed.addEventListener("mouseenter", function () {
  fixed.style.display = "block";
});

const selectItem = (v1) => {
  v1.style.borderColor = "#fe320a";
  v1.style.color = "#ffffff";
};
t1.forEach((t1) => {
  t1.addEventListener("click", () => {
    t1.classList.add(selectItem(t1));
    changetext(t1);
  });

  t1.addEventListener("mouseleave", () => {
    t1.style.borderColor = "#92908d";
    t1.style.color = "#92908d";
  });
});

const v0 = ` The innovative concept aimed to create a visually stunning and functional solution, incorporating cutting-edge design principles and methodologies.`;
const v1 = `The design project, featuring innovative concepts and cutting-edge principles, was meticulously executed by the skilled team, ensuring seamless delivery, precision implementation, and exceptional quality control.`;
const v2 = ` The skilled team meticulously brought the design to life, ensuring seamless project delivery, precision implementation, and exceptional quality control.`;

const changetext = (value) => {
  if (value == t1[0]) {
    innertext.innerText = v0;
  } else if (value == t1[1]) {
    innertext.innerText = v1;
  } else if (value == t1[2]) {
    innertext.innerText = v2;
  }
};
var swiper = new Swiper(".mySwiper", {
  slidesPerView: "auto",
  centeredSlides: true,
  spaceBetween: 20,
});

let menu = document.querySelector("nav h3");
let fullScr = document.querySelector(".full-scr");
let image = document.querySelector("nav img");
let flag = 0;
menu.addEventListener("click", () => {
  if (flag == 0) {
    fullScr.style.top = 0;
    image.style.opacity = 0;
    flag = 1;
  } else {
    fullScr.style.top = "-100%";
    image.style.opacity = "1";
    flag = 0;
  }
});
let loder = document.querySelector(".loder");
setTimeout(() => {
  loder.style.top = "-100%";
}, 4200);
