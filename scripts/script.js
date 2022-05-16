// JavaScript Document
console.log("Howdy!");

var deButton = document.querySelector(".spring");
var deMario = document.querySelector(".mario");

deButton.addEventListener("click", springenMaar);

function springenMaar() {
    deMario.classList.add("ikBenAanHetSpringen");
    deMario.addEventListener("animationend", function(e) {
        console.log(e);
        e.target.classList.remove("ikBenAanHetSpringen");
    });
}



var hetJaar = document.querySelector(".eerste");
var deNintendo = document.querySelector(".gamewatch");

hetJaar.addEventListener("click", laatZien);

function laatZien() {
    deNintendo.classList.toggle("laatMijZien");
}