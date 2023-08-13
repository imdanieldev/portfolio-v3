"use strict";

const cssbtn = document.querySelectorAll(".cssbtn")[0];
const head = document.querySelectorAll("head")[0];

function addcss() {
  head.innerHTML += '<link rel="stylesheet" href="./assets/styles/style.css">';
  cssbtn.textContent = "Remove Css";
  cssbtn.setAttribute("onclick", "removecss()");
}
function removecss() {
  head.innerHTML -= '<link rel="stylesheet" href="./assets/styles/style.css">';
  cssbtn.textContent = "Add Css";
  cssbtn.setAttribute("onclick", "addcss()");
}

const year = document.getElementById("year");
let thisYear = new Date().getFullYear();
year.textContent = thisYear;
