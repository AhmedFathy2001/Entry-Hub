"use strict";
window.addEventListener("load", () => {

    const extract = document.getElementById("extract");
    const jsonExtract = document.getElementById("jsonExtract");
    const symptomsTable = document.getElementById("symptomsTable")
    const symptomsTextBox = document.getElementById("symptomsTextBox");

    extract.addEventListener("click", () => {
        if (!symptomsTextBox.value) {
            symptomsTextBox.classList.add("is-invalid");
        } else {
            jsonExtract.classList.replace("d-none", "d-inlineblock");
            symptomsTable.classList.replace("d-none", "d-block");
            symptomsTextBox.classList.remove("is-invalid");
            symptomsFetch();
        }

    });

    async function symptomsFetch() {
        let url = "https://api.medera.ai/query/parse"
        let data = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: { "text": "a female with a headache pain", "age": { "value": 20 } }
        });
        console.log(data.json());
        return data.json();
    }
});