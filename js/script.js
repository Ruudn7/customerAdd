(function(){

    var form = document.querySelector("#myForm"),
        fields = form.querySelectorAll("[data-error]"),
        pass = form.querySelector("#passw");

function isNotEmpty(field) {

    return field.value !== "";
        
}

function isAtLeast(field, min) {

    return field.value.length >= min;
}

function isEmail(field) {

    return field.value.indexOf("@") !== -1;

}

function isTheSame(field) {

    return pass.value !== fields[2].value;
    

}



function displayErrors(errors) {

    var ul = document.querySelector("ul.errors");

    if(!ul) {

        ul = document.createElement("ul");

        ul.classList.add("errors");

    }

    ul.innerHTML = "";

    errors.forEach(function(error){

    var li = document.createElement("li");

        li.textContent = error;

        ul.appendChild(li);
    });

form.parentNode.insertBefore(ul, form);

}




form.addEventListener("submit", function(e){

    e.preventDefault();

    var errors = [];

    for( var i = 0; i < fields.length; i++){

       var  field = fields[i],
            isValid = false;

       
        if(field.type === "text"){
            isValid = isNotEmpty(field);
       } else  if(field.type === "email"){
            isValid = isEmail(field);
       } else if(field.type === "password"){
            isValid = isAtLeast(field, 5);
        } 
        
       



        if (!isValid) {
            field.classList.add("error");
            errors.push(field.dataset.error);
        } else {
            field.classList.remove("error");
        }
    }

    if(errors.length > 0){
        displayErrors(errors);
    } else {
        form.submit();
    }


    console.log(fields[2].value);
    console.log(fields[3].value);
    console.log(pass.value);
    console.log(errors);
}, false);
 
})();