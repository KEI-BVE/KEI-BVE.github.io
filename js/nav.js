// nav.js
document.addEventListener("DOMContentLoaded", function () {
  const menuButton = document.querySelector("#mainNav .menu");
  const panel = document.querySelector("#mainNav .panel");

  if (menuButton && panel) {
    menuButton.addEventListener("click", () => {
      panel.classList.toggle("open");
    });
  }

  const submenuAnchors = document.querySelectorAll("#mainNav li.has-sub > a");
  submenuAnchors.forEach((anchor) => {
    anchor.addEventListener("click", (e) => {
      e.preventDefault();
      anchor.parentElement.classList.toggle("open");
    });
  });
});
