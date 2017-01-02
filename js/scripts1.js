var butto = document.querySelector("#yesNo"),
    butto1 = document.querySelector("#yesNo1"),
    butto2 = document.querySelector("#yesNo2");

console.log(butto);



function buttonChange(){

    if(butto.className === "button2") {
        butto.classList.remove("button2");
        butto.classList.add("button2_1");
        butto.textContent = "Nie";
    } else {
         butto.classList.add("button2");
        butto.classList.remove("button2_1");
        butto.textContent = "Tak";
    }

}

butto.addEventListener("click" ,function(e){



   buttonChange();

});

function buttonChange1(){

    if(butto1.className === "button2") {
        butto1.classList.remove("button2");
        butto1.classList.add("button2_1");
        butto1.textContent = "Nie";
    } else {
         butto1.classList.add("button2");
        butto1.classList.remove("button2_1");
        butto1.textContent = "Tak";
    }

}

butto1.addEventListener("click" ,function(e){



   buttonChange1();

});


function buttonChange2(){

    if(butto2.className === "button2") {
        butto2.classList.remove("button2");
        butto2.classList.add("button2_1");
        butto2.textContent = "Nie";
    } else {
         butto2.classList.add("button2");
        butto2.classList.remove("button2_1");
        butto2.textContent = "Tak";
    }

}

butto2.addEventListener("click" ,function(e){



   buttonChange2();

});
