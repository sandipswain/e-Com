const cards = document.querySelectorAll(".cards");
const buttons = document.querySelectorAll(".btn");
const cardImg = document.querySelectorAll(".cards-img");
const cardTitle = document.querySelectorAll(".cards-title");
const cardDesc = document.querySelectorAll(".cards-desc");
const cardBtn = document.querySelectorAll(".cards-btn");

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
// Button Ripple Effect ends

for (let i = 0; i <= 5; i++) {
  // Animate mouse in
  cards[i].addEventListener("mouseenter", (e) => {
    cards[i].style.transition = "none";
    cardImg[i].style.transform = "translateZ(15rem)";
    cardTitle[i].style.transform = "translateZ(8rem)";
    cardDesc[i].style.transform = "translateZ(10rem)";
    cardBtn[i].style.transform = "translateZ(8rem)";
  });

  // Animate mouse in
  cards[i].addEventListener("mouseleave", (e) => {
    cards[i].style.transition = "all 0.5s ease";
    cardImg[i].style.transform = "translateZ(0)";
    cardTitle[i].style.transform = "translateZ(0)";
    cardDesc[i].style.transform = "translateZ(0)";
    cardBtn[i].style.transform = "translateZ(0)";
  });
}
