$(document).ready(function () {
    var techHits = document.getElementById("techHits");
    var allTech = document.getElementById("allTech");

    var showTech = document.getElementById("showTech");
    showTech.onclick = function () {
        techHits.classList.add("d-none");
        allTech.classList.remove("d-none");
    };

    var hideTech = document.getElementById("hideTech");
    hideTech.onclick = function () {
        allTech.classList.add("d-none");
        techHits.classList.remove("d-none");
    };
});