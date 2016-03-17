(function(window, document){
    var plugin=function(event){
    event.preventDefault();
    var errors={};
    var inputDiv=document.querySelector(".form__input3-wrap");
    var inputs=document.querySelectorAll("[data-input-type]");
    var inputType;
    bubble.classList.add("bubble");
    bubble.classList.remove("bubble-confirm");
    if(document.querySelector(".form__inputs .bubble")){
        inputDiv.removeChild(bubble);
    }
    for(var i=0;i<inputs.length;i++){
        inputType=inputs[i].getAttribute("data-input-type");
        console.log(inputs[i].getAttribute("data-input-type"));
        if(inputType=="text"){
            if(inputs[i].value.trim()==""){
                errors.input1Error="Aizpildiet visus laukumus! ";
            }
        }
        if(inputType=="email"){
            if(inputs[i].value.indexOf("@")==-1){
                errors.input2Error="Ievadiet pareizu e-pastu! ";
            }
        }
    }
    if (Object.keys(errors).length > 0){
        inputDiv.appendChild(bubble);
        var value="";
        console.log(errors);
        for(var key in errors) {
            console.log(key);
            value+= errors[key];
            bubble.innerHTML=value;
        }
    }else{
        inputDiv.appendChild(bubble);
        bubble.innerHTML="Forma nosūtīta!";
        bubble.classList.add("bubble-confirm");
    }
}
window.formValid=plugin;
})(window, document);
