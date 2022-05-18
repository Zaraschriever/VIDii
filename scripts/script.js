//animatie mario laten springen
var deSwitchButton = document.querySelector(".switch .spring");
var deSwitchMario = document.querySelector(".switch .mario");

deSwitchButton.addEventListener("click", springenSwitchMaar);
deSwitchButton.addEventListener("keydown", springenSwitchMaar);

function springenSwitchMaar() {
    deSwitchMario.classList.add("ikBenAanHetSpringen");
    deSwitchMario.addEventListener("animationend", function(e) {
        // console.log(e);
        e.target.classList.remove("ikBenAanHetSpringen");
    });
}

//animatie mario laten groeien
var deSwitchGroeiButton = document.querySelector(".switch .groei");
var deSwitchMario = document.querySelector(".switch .mario");

deSwitchGroeiButton.addEventListener("click", groeienSwitchMaar);
deSwitchGroeiButton.addEventListener("keydown", groeienSwitchMaar);

function groeienSwitchMaar() {
    deSwitchMario.classList.add("ikBenAanHetGroeien");
    deSwitchMario.addEventListener("animationend", function(e) {
        e.target.classList.remove("ikBenAanHetGroeien");
    });
}


//variabelen game & watch
var gameWatchButton = document.querySelector(".gamewatchbutton");
var gameWatch = document.querySelector(".gamewatch");

//variabelen gameboy
var gameBoyButton = document.querySelector(".gameboybutton");
var gameBoy = document.querySelector(".gameboy");

//variabelen gameboy advance
var advanceButton = document.querySelector(".advancebutton");
var advance = document.querySelector(".advance");

//variabelen ds
var dsButton = document.querySelector(".dsbutton");
var ds = document.querySelector(".ds");

//variabelen nintendo switch
var nintendoSwitchButton = document.querySelector(".switchbutton");
var nintendoSwitch = document.querySelector(".switch");

var tijdLijn = document.querySelector("menu");
var terugKnop =document.querySelector(".terugnaarmap");

//eventisteners
gameWatchButton.addEventListener("click", klikOpGamewatch);
gameBoyButton.addEventListener("click", klikOpGameboy);
nintendoSwitchButton.addEventListener("click", klikOpSwitch);
advanceButton.addEventListener("click", klikOpAdvance);
dsButton.addEventListener("click", klikOpDs);

terugKnop.addEventListener("click", laatMapZien);


//functies klik op
function klikOpGamewatch() {
    gameWatch.classList.add("laatGamewatchZien");

    gameBoy.classList.remove("laatGameboyZien");
    advance.classList.remove("laatAdvanceZien");
    ds.classList.remove("laatDsZien");
    nintendoSwitch.classList.remove("laatSwitchZien");

    tijdLijn.classList.add("menuVeranderen");
}

function klikOpGameboy() {
    gameBoy.classList.add("laatGameboyZien");

    gameWatch.classList.remove("laatGamewatchZien");
    advance.classList.remove("laatAdvanceZien");
    ds.classList.remove("laatDsZien");
    nintendoSwitch.classList.remove("laatSwitchZien");

    tijdLijn.classList.add("menuVeranderen");
}

function klikOpAdvance() {
    advance.classList.add("laatAdvanceZien");

    gameWatch.classList.remove("laatGamewatchZien");
    gameBoy.classList.remove("laatGameboyZien");
    ds.classList.remove("laatDsZien");
    nintendoSwitch.classList.remove("laatSwitchZien");   

    tijdLijn.classList.add("menuVeranderen");
}

function klikOpDs() {
    ds.classList.add("laatDsZien");

    gameWatch.classList.remove("laatGamewatchZien");
    gameBoy.classList.remove("laatGameboyZien");
    advance.classList.remove("laatAdvanceZien");
    nintendoSwitch.classList.remove("laatSwitchZien");

    tijdLijn.classList.add("menuVeranderen");
}

function klikOpSwitch() {
    nintendoSwitch.classList.add("laatSwitchZien");

    gameWatch.classList.remove("laatGamewatchZien");
    gameBoy.classList.remove("laatGameboyZien");
    advance.classList.remove("laatAdvanceZien");
    ds.classList.remove("laatDsZien");

    tijdLijn.classList.add("menuVeranderen");
}

function laatMapZien() {
    tijdLijn.classList.add("menuOmhoog");

    tijdLijn.classList.remove("menuVeranderen");
    gameWatch.classList.remove("laatGamewatchZien");
    gameBoy.classList.remove("laatGameboyZien");
    advance.classList.remove("laatAdvanceZien");
    ds.classList.remove("laatDsZien");
    nintendoSwitch.classList.remove("laatSwitchZien");
}