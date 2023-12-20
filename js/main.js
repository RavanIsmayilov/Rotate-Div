var container = document.querySelector(".container");


function scrollRotate(){

    container.style.transform = "rotate(" + window.pageYOffset/2 + "deg)";
        
}

window.onscroll = function () {
    scrollRotate()
};

