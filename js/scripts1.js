(function() {

function createButton() {

var button = document.createElement("button");

button.classList.add("backToTop", "hidden");
button.textContent = "Powrót do góry";
document.body.appendChild(button);


return button;

}

var button = createButton ();

function animateScroll(){

    if(document.body.scrollTop > 0) {
        window.scrollBy(0, -5);
        setTimeout(animateScroll, 10);

    }

}

button.addEventListener("click" ,function(e){

    e.stopPropagation();

    animateScroll();

});


window.addEventListener("scroll", function(){

if(document.body.scrollTop > 200 ){
    button.classList.remove("hidden");
} else {
    button.classList.add("hidden");   
}

}, false);


})();