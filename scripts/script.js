"use strict";
window.addEventListener("load", () => {

    const extract = document.getElementById("extract");
    const jsonExtract = document.getElementById("jsonExtract");
    const symptomsTable = document.getElementById('symptomsTable')

    extract.addEventListener("click", () => {
        jsonExtract.classList.replace("d-none", "d-inlineblock");
        symptomsTable.classList.replace("d-none", "d-block");
    });
});