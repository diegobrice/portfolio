const navbar = document.querySelector(".navbar");
const homebg = document.querySelector(".home__background");
// const elements = document.querySelectorAll(".services__item");

window.addEventListener("scroll", function () {
  window.scrollY > 100 && (navbar.style.background = `rgba(0,0,0,0.9)`);
  window.scrollY < 100 && (navbar.style.background = `transparent`);
  homebg.style.backgroundPosition = `-${window.scrollY / 5}px`;
});

// window.addEventListener("mousemove", parallax);

// function parallax(e) {
//   elements.forEach((item) => {
//     const speed = item.getAttribute("data-speed");
//     console.log(speed);
//     const x = (window.innerWidth - e.pageX * speed) / 100;
//     const y = (window.innerHeight - e.pageY * speed) / 100;
//     item.style.transform = `translateX(${x}px) translateY(${y}px)`;
//   });
// }
