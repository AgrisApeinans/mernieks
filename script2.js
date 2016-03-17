                    ///scroll function///

window.smoothScroll();

                    ///Paslēpt return arrow///

var returnDiv = document.getElementsByClassName('return-div')[0];
function hideReturnDiv() {
    var scrollTop = (typeof window.scrollY !== "undefined") ? window.scrollY : document.documentElement.scrollTop;
    if (scrollTop > 500) {
        returnDiv.classList.add("active");
    } else {
        returnDiv.classList.remove("active");
    }
}
window.onscroll = hideReturnDiv;

                    ///Carousel///

var slider=document.querySelector("[data-plugin=slider]");
window.sliderFunct(slider);

                    ///Formas validācija///

var bubble=document.createElement("div");
document.querySelector(".contact-form").onsubmit=formValid;
