"use strict";

const cssbtn = document.querySelectorAll(".cssbtn")[0];
const head = document.querySelectorAll("head")[0];

function addcss() {
  head.innerHTML += '<link rel="stylesheet" href="./assets/styles/reset.css">';
  head.innerHTML += '<link rel="stylesheet" href="./assets/styles/fonts.css">';
  head.innerHTML += '<link rel="stylesheet" href="./assets/styles/style.css">';
  cssbtn.textContent = "Remove CSS";
  cssbtn.setAttribute("onclick", "removecss()");
  themeSwitch.style = "display: unset";
}
function removecss() {
  head.innerHTML -= '<link rel="stylesheet" href="./assets/styles/reset.css">';
  head.innerHTML -= '<link rel="stylesheet" href="./assets/styles/fonts.css">';
  head.innerHTML -= '<link rel="stylesheet" href="./assets/styles/style.css">';
  cssbtn.textContent = "Add CSS";
  cssbtn.setAttribute("onclick", "addcss()");
  themeSwitch.style = "display: none";
}

function calculateSettingAsThemeString({
  localStorageTheme,
  systemSettingDark,
}) {
  if (localStorageTheme !== null) {
    return localStorageTheme;
  }

  if (systemSettingDark.matches) {
    return "dark";
  }

  return "light";
}

function updateButton({ buttonEl, isDark }) {
  const newCta = isDark ? "Change to light theme" : "Change to dark theme";

  buttonEl.setAttribute("aria-label", newCta);
  buttonEl.innerText = newCta;
}

function updateThemeOnHtmlEl({ theme }) {
  document.querySelector("html").setAttribute("data-theme", theme);
}

const themeSwitch = document.querySelector("[data-theme-toggle]");
const localStorageTheme = localStorage.getItem("theme");
const systemSettingDark = window.matchMedia("(prefers-color-scheme: dark)");

let currentThemeSetting = calculateSettingAsThemeString({
  localStorageTheme,
  systemSettingDark,
});

updateButton({
  buttonEl: themeSwitch,
  isDark: currentThemeSetting === "dark",
});
updateThemeOnHtmlEl({ theme: currentThemeSetting });

themeSwitch.addEventListener("click", (event) => {
  const newTheme = currentThemeSetting === "dark" ? "light" : "dark";

  localStorage.setItem("theme", newTheme);
  updateButton({ buttonEl: themeSwitch, isDark: newTheme === "dark" });
  updateThemeOnHtmlEl({ theme: newTheme });

  currentThemeSetting = newTheme;
});

const year = document.getElementById("year");
let thisYear = new Date().getFullYear();
year.textContent = thisYear;
