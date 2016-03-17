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
    }
    window.smoothScroll=plugin;
})(window, document);
