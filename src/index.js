import "./styles-reset.css";
import "./styles.css";

import { createHomeContent } from "./home.js";
import { createMenuContent } from "./menu.js";
import { createAboutContent } from "./about.js";

console.log("we are loaded.");

const nav = document.getElementById("nav");

// depending on nav element clcicked erase content and load in selected content
nav.addEventListener("click", (e) => {
  const contentDiv = document.getElementById("content");
  contentDiv.innerHTML = "";
  let target = e.target;
  if (target.id === "home") {
    createHomeContent();
  }
  if (target.id === "menu") {
    createMenuContent();
  }
  if (target.id === "about") {
    createAboutContent();
  }
});

// by default load home content
createHomeContent();
