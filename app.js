
let container = document.querySelector(".container");
let counter = Number(window.prompt("How many image do you want to display? The maximum is 5000 image and the minimum is 1 image"));

async function loadingData() {
    let api = await fetch("https://jsonplaceholder.typicode.com/photos");
    let getData = await api.json();

    displayImage(getData);

}

loadingData();

function displayImage(data) {
    for (let i = 0; i < counter; i++) {
        let htmlCode = `<div class="item">
        <img class="image" src="${data[i].url}" loading="lazy">
        <h2>${data[i].title}</h2>
        </div>`;

        container.insertAdjacentHTML("afterbegin", htmlCode);
    }
}
