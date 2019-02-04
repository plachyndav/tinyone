"use strict";

var menuButton = document.querySelector(".js-button");
var menu = document.querySelector(".js-menu");
menuButton.addEventListener("click", function (e) {
    e.preventDefault();
    menu.classList.toggle("main-nav__list--closed");
});

var iconList = document.querySelectorAll(".js-icon");
var sliderList = document.querySelectorAll(".js-slider-item");
var sliderToggles = document.querySelectorAll(".js-toggle");
sliderToggles.forEach(function (item, index, array) {
    item.addEventListener("click", function (e) {
        e.preventDefault();
        removeActive(array);
        item.classList.add("slider__toggle--active");
        hideSliderItem(sliderList);
        sliderList[index].classList.add("slider__item--active");
        removeOpacity(iconList);
        iconList[index].classList.add("slider__img-wrapper--active");
    });
});

function removeActive(array) {
    array.forEach(function (item) {
        item.classList.remove("slider__toggle--active");
    });
}

function hideSliderItem(array) {
    array.forEach(function (item) {
        item.classList.remove("slider__item--active");
    });
}

function removeOpacity(array) {
    array.forEach(function (item) {
        item.classList.remove("slider__img-wrapper--active");
    });
}

