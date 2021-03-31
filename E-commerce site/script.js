const buttons = document.querySelectorAll(".btn");
const brand = document.querySelector(".slider");
const slides = document.querySelectorAll(".slide");
const slide2 = document.querySelector(".slide-2");
const brand1 = document.querySelector(".brand-1");

// Button Ripple Effect

buttons.forEach((button) => {
  button.addEventListener("mouseover", function (e) {
    //   Position from the viewport from the top
    const x = e.clientX;
    // Position from the viewport from the left
    const y = e.clientY;

    const btnTop = e.target.offsetTop;
    const btnLeft = e.target.offsetLeft;

    const xInside = x - btnLeft;
    const yInside = y - btnTop;

    const circle = document.createElement("span");
    circle.classList.add("circle");
    circle.style.top = yInside + "px";
    circle.style.top = xInside + "px";

    this.appendChild(circle);

    setTimeout(() => circle.remove(), 500);
  });
});

// Auto Slide Icon
const sliderIcon = [
  {
    img1: "img/logo1.png",
    img2: "img/logo2.png",
    img3: "img/logo3.png",
    img4: "img/fila.JPG",
    img5: "img/maggi.JPG",
    img6: "img/logo4.png",
  },
];

let idx = 0;
function updateTestimonial() {
  const gotoSlide = function (slide) {};
}

setInterval(updateTestimonial, 10000);
