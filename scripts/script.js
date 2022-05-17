//animatie mario laten springen
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


//variabelen game & watch
var gameWatchButton = document.querySelector(".gamewatchbutton");
var gameWatch = document.querySelector(".gamewatch");

//variabelen gameboy
var gameBoyButton = document.querySelector(".gameboybutton");
var gameBoy = document.querySelector(".gameboy");

//variabelen nintendo switch
var nintendoSwitchButton = document.querySelector(".switchbutton");
var nintendoSwitch = document.querySelector(".switch");

var tijdLijn = document.querySelector("menu");
var terugKnop =document.querySelector(".terugnaarmap");

//eventisteners
gameWatchButton.addEventListener("click", klikOpGamewatch);
gameBoyButton.addEventListener("click", klikOpGameboy);
nintendoSwitchButton.addEventListener("click", klikOpSwitch);
terugKnop.addEventListener("click", laatMapZien);


//functies klik op
function klikOpGamewatch() {
    gameWatch.classList.add("laatGamewatchZien");
    gameBoy.classList.remove("laatGameboyZien");
    nintendoSwitch.classList.remove("laatSwitchZien");
    tijdLijn.classList.add("menuVeranderen");
}

function klikOpGameboy() {
    gameBoy.classList.add("laatGameboyZien");
    gameWatch.classList.remove("laatGamewatchZien");
    nintendoSwitch.classList.remove("laatSwitchZien");
    tijdLijn.classList.add("menuVeranderen");
}


function klikOpSwitch() {
    nintendoSwitch.classList.add("laatSwitchZien");
    gameWatch.classList.remove("laatGamewatchZien");
    gameBoy.classList.remove("laatGameboyZien");
    tijdLijn.classList.add("menuVeranderen");
}

function laatMapZien() {
    tijdLijn.classList.remove("menuVeranderen");
    gameWatch.classList.remove("laatGamewatchZien");
    gameBoy.classList.remove("laatGameboyZien");
    nintendoSwitch.classList.remove("laatSwitchZien");
}