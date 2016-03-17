(function(window, document){
    var plugin=function(sliderElement){
        //dabūt aktīvā elementa indeksu, elementu skaitu, nepieciešamos elementus
        var sliderItems=sliderElement.querySelectorAll(".slider-item");
        var sliderBtns=sliderElement.querySelectorAll(".slider__buttons .button");
        var sliderNext=sliderElement.querySelector(".slider__next");
        var sliderPrev=sliderElement.querySelector(".slider__prev");
        var itemCount=sliderItems.length;
        var activeItemIndx;
        for (var i = 0; i < itemCount; i++) {
            if(sliderItems[i].classList.contains("active")){
                activeItemIndx=i;
            };
        };
        // funkcija iekšā- aktivizē(activate, deactivate), gan pogu gan bildi
        activate=function(activate,deactivate){
            if(activate<0){
                activate=itemCount-1;
            };
            if(activate>=itemCount){
                activate=0;
            };
            activeItemIndx=activate;
            sliderItems.item(activate).classList.add("active");
            sliderItems.item(deactivate).classList.remove("active");
            sliderBtns.item(activate).classList.add("active");
            sliderBtns.item(deactivate).classList.remove("active");
        }
        carouselEvent=function(e){
            e.preventDefault();
            if(this==sliderNext){
                activate(activeItemIndx+1,activeItemIndx);
            }
            else if(this==sliderPrev){
                activate(activeItemIndx-1,activeItemIndx);
            }
            else{
                if(this!=sliderBtns.item(activeItemIndx)){
                    btnIndex = [].indexOf.call (this.parentNode.children, this)
                    console.log(btnIndex);
                    activate(btnIndex, activeItemIndx);
                }
            }
        }
        // funkcija katrai pogai pieliks onclick event
        sliderNext.onclick=carouselEvent;
        sliderPrev.onclick=carouselEvent;
        for(var i=0;i<itemCount;i++){
            sliderBtns[i].onclick=carouselEvent;
        }
    }

    window.sliderFunct=plugin;
})(window, document);
