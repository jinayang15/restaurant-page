import "./styles.css";
import generateHomePage from "./home";
import generateMenuPage from "./menu";

function clear(element) {
  element.textContent = "";
}

function clearActive() {
  const active = document.querySelectorAll(".active");
  if (active) {
    active.forEach((element) => {
      element.classList.remove("active");
    });
  }
}

function appendChildrenToContent(content, iterable) {
  for (const element of iterable) {
    content.appendChild(element);
  }
}

function buildHomePage(content) {
  clear(content);
  appendChildrenToContent(content, generateHomePage());
}

function buildMenuPage(content) {
  clear(content);
  appendChildrenToContent(content, generateMenuPage());
}

function main() {
  const content = document.querySelector("#content");
  const home = document.querySelector(".home-button");
  const menu = document.querySelector(".menu-button");
  const contactUs = document.querySelector(".contact-us-button");

  clear(content);
  home.classList.add("active");
  buildHomePage(content);

  home.addEventListener("click", () => {
    clearActive();
    if (!home.classList.contains("active")) {
      home.classList.add("active");
      buildHomePage(content);
    }
  });

  menu.addEventListener("click", () => {
    clearActive();
    if (!menu.classList.contains("active")) {
      menu.classList.add("active");
      buildMenuPage(content);
    }
  });
}

main();
