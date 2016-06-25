(function(window, document){
    var plugin=function(){
    var returnDiv = document.getElementsByClassName('return-div')[0];
    var element = document.querySelectorAll(".nav__main a");
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
        e.preventDefault();
        el = this.getAttribute("href");
        el = document.querySelector(el);
        var top = offsetTop(el);
        var currDist = window.scrollY;
        var distance = 10;
        var dir = ((top - currDist) > 0) ? true : false;
        var timerId = setInterval(function() {
            if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
                clearInterval(timerId);

            } else if (Math.abs(window.scrollY - top) < distance) {
                window.scrollTo(0, top);
                clearInterval(timerId);
            } else {
                distance += 5;
                if (dir) {
                    currDist += distance;
                } else {
                    currDist -= distance;
                }
                window.scrollTo(0, currDist);
            }
        }, 40);
    }
    }
    window.smoothScroll=plugin;
})(window, document);
