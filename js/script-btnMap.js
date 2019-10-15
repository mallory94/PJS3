var estCache = false;
var btn = document.querySelector('.btnCarte')



btn.onclick = function appelCarte(){
    var mapItems = document.querySelector('.contenuCarte *')
    
    if (estCache == false) {
        mapItems.classList.add('cachee')
        estCache = true;
    }
    else {
        var mapItemsCaches = document.querySelector('.cachee')
        mapItemsCaches.classList.remove('cachee')
        estCache = false;
    }
}
