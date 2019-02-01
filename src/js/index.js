"use strict";

var menuButton = document.querySelector(".js-button");
var menu = document.querySelector(".js-menu");
menuButton.addEventListener("click", function (e) {
    console.log('hi');
    e.preventDefault();
    menu.classList.toggle("main-nav__list--closed");
});
