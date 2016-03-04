                ////scroll function/////
var returnDiv = document.getElementsByClassName('return-div')[0];
var element = document.querySelectorAll(".nav__main a");
console.log("sākumā element ir " + element);
for (var i = 1; i < element.length; ++i) {
    element[i].addEventListener("click", scrollFunction, false)
}
returnDiv.addEventListener("click", scrollFunction, false)

function offsetTop(el) {
    var top = 0;
    var rect =el.getBoundingClientRect();
    var top =rect.top+window.scrollY;
    return top;
}

function scrollFunction(e) {
    e.preventDefault(); // e ir event object, this būs element(īstais vajag), atceļam default, lai uz nedarbotos kā links
    console.log(this);
    console.log(this.getAttribute("href"));
    el = this.getAttribute("href");
    console.log("el ir " + el);
    el = document.querySelector(el);
    console.log("el adrese html ir " + el);
    var top = offsetTop(el);
    var currDist = window.scrollY;
    var distance = 80;
    var dir = ((top - currDist) > 0) ? true : false;
    console.log("curr Dist ir " + currDist);
    var timerId = setInterval(function() {
        console.log("window position " + document.documentElement.scrollTop);
        console.log("top= "+top);

        if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
            console.log("you're at the bottom of the page");
            clearInterval(timerId);

        } else if (Math.abs(window.scrollY - top) < distance) {
            window.scrollTo(0, top);
            clearInterval(timerId);
        } else {
            if (dir) {
                currDist += distance;
            } else {
                currDist -= distance;
            }
            window.scrollTo(0, currDist);
            console.log("scrolling");
        }
    }, 40);
}

                     ////////Paslēpt return arrow////////

function hideReturnDiv() {
    var scrollTop = (typeof window.scrollY !== "undefined") ? window.scrollY : document.documentElement.scrollTop;
    if (scrollTop > 500) {
        returnDiv.classList.add("active");
    } else {
        returnDiv.classList.remove("active");
    }
}
window.onscroll = hideReturnDiv;

                    ///////Formas validācija///////////

document.querySelector(".contact-form").onsubmit=function(e){
    console.log("click")
    e.preventDefault();
    var inputDiv=document.querySelector(".form__inputs");
    var input1=document.querySelector(".form__input1");
    var input1Wrap =document.querySelector(".form__input1-wrap");
    var input2=document.querySelector(".form__input2");
    var input2Wrap =document.querySelector(".form__input2-wrap");
    var bubble=document.createElement("div");
    var errors;
    var input1WrapHasBubble=input1Wrap.contains(bubble);
    bubble.classList.add("bubble");
    var bubble2= bubble.cloneNode();
    console.log(input1);
    if(input1.value.trim()==""){
        console.log("input 1 is empty")
        if(!input1Wrap.contains(bubble)){
            console.log("input1 add bubble");
            input1Wrap.appendChild(bubble);
            console.log(input1Wrap.contains(bubble));
        }

    }
    else if(input1WrapHasBubble){
        input1Wrap.removeChild(bubble);
    }
    if(input2.value.indexOf("@")==-1){
        if(!input2Wrap.contains(bubble2)){
            input2Wrap.appendChild(bubble2);
            errors+=1;
    }
    else {
        console.log("remove bubble");
        input2Wrap.removeChild(document.querySelector(".bubble"));
        }
    }
}
