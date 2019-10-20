var estMin = false;
var btnMin = document.querySelector('.minMenu')

var elementsACacher = document.querySelector('.menu')
var header = document.querySelector('.header')
var banderole = document.querySelector('.banderole')

function minimiseMenu(){
    elementsACacher.classList.add('menu-cache')
    estMin = true;
    banderole.classList.remove('banderole-cachee');
    renommeBouton();
    console.log("minimise")
}


function maximiseMenu(){
    elementsACacher.classList.remove('menu-cache')
    estMin = false;
    banderole.classList.add('banderole-cachee');
    renommeBouton();
    console.log("maximise")
}

btnMin.onclick = function minMaxMenu(){
    if (estMin == true) {
        maximiseMenu();
        
    }

    else {
        
        minimiseMenu();
    }
}

function renommeBouton(){
    if (estMin == true)
        btnMin.innerHTML = "MENU";
    else {
        btnMin.innerHTML = "réduire";
    }
}

function autoRedim() {
    
    if (window.innerWidth <= 700 && estMin == false) {
        minimiseMenu()
    }
    if (window.innerWidth > 700 ) {
        maximiseMenu();
        banderole.classList.remove('banderole-cachee');
    }
}
window.onresize = function(){
    autoRedim();
}

window.onload = function(){
    autoRedim();
}


