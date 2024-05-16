
"use strict";
let btn = document.getElementById("addBtn");
btn.addEventListener(
    "click",
    displayInfo,
    { once: true });

function displayInfo() {
    let textElement = document.getElementById("number");
    let id = textElement.value;
    let url = 'https://jsonplaceholder.typicode.com/todos/' +id;
    console.log(url);
    fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(response => {
            if (response.status === 200) {
                return response.json();
            }
        })
        .then(data => {

            document.getElementById("msgArea").textContent = JSON.stringify(data,undefined,2);

        });
}