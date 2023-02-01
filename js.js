const chevron = document.querySelector(".chevron");
const navContainer = document.querySelector(".nav-container");

const unfoldMenu = () => {
  chevron.addEventListener("click", () => {
    navContainer.classList.toggle("show-menu");
    chevron.classList.toggle("chevron-direction");
  });
};

unfoldMenu();

const goUpArrow = document.querySelector(".go-up");

const goUp = () => {
  goUpArrow.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
};

goUp();

// const swiper = new Swiper(".swiper", {
//   // Optional parameters
//   direction: "vertical",
//   loop: true,

//   // If we need pagination
//   pagination: {
//     el: ".swiper-pagination",
//   },

//   // Navigation arrows
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },

//   // And if we need scrollbar
//   scrollbar: {
//     el: ".swiper-scrollbar",
//   },
// });
