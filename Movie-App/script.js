const bar = document.querySelector("#bar");
const displayMenu = () => {
  const mainNav = document.querySelector("#main-nav");
  mainNav.classList.toggle("responsive");
};

bar.addEventListener("click", (e) => {
  e.preventDefault();
  displayMenu();
});