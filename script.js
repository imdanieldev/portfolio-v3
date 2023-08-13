let cssbtn = document.querySelectorAll(".cssbtn")[0];
let head = document.querySelectorAll("head")[0];
function addcss(){
    head.innerHTML += '<link rel="stylesheet" href="./style.css">';
    cssbtn.innerHTML = "Remove Css";
    cssbtn.setAttribute("onclick", "removecss()");
};
function removecss(){
    head.innerHTML -= '<link rel="stylesheet" href="./style.css">';
    cssbtn.innerHTML = "Add Css";
    cssbtn.setAttribute("onclick", "addcss()");
}