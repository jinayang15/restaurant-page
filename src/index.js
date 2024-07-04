import "./styles.css";
import generateHomepage from "./home";

function clear(element) {
  element.textContent = "";
}

function appendChildrenToContent(content, iterable) {
  for (const element of iterable) {
    content.appendChild(element);
  }
}

function buildHomepage(content) {
  clear(content);
  appendChildrenToContent(content, generateHomepage());
}

function main() {
  const content = document.querySelector("#content");
  const home = document.querySelector(".home");
  const menu = document.querySelector(".menu");
  const contactUs = document.querySelector(".contact-us");

  home.classList.add("active");
  buildHomepage(content);

  home.addEventListener("click", () => {
    if (!home.classList.contains("active")) {
      home.classList.add("active");
      buildHomepage(content);
    }
  });
}

main();
