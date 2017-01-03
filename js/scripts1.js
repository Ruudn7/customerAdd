var butto = document.querySelector("#yesNo"),
    butto1 = document.querySelector("#yesNo1"),
    butto2 = document.querySelector("#yesNo2");

console.log(butto);



function buttonChange(but){

    if(but.className === "button2") {
        but.classList.remove("button2");
        but.classList.add("button2_1");
        but.textContent = "Nie";
    } else {
         but.classList.add("button2");
        but.classList.remove("button2_1");
        but.textContent = "Tak";
    }

}


butto.addEventListener("click" ,function(e){


     var but = butto ;

   buttonChange(but);

  

});

butto1.addEventListener("click" ,function(e){

     var but = butto1 ;

   buttonChange(but);

});




butto2.addEventListener("click" ,function(e){

     var but = butto2 ;

   buttonChange(but);

});

