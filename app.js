const container = document.querySelector(".container");

async function getNumberOfImages() {
    let num;
    do {
        num = Number(window.prompt("How many images do you want to display? The maximum is 5000 images and the minimum is 1 image."));
        if (isNaN(num) || num > 5000 || num < 1) {
            alert("The number must be between 1 and 5000.");
        }
    } while (isNaN(num) || num > 5000 || num < 1);
    return num;
}

async function fetchImageData() {
    const response = await fetch("https://jsonplaceholder.typicode.com/photos");
    const data = await response.json();
    return data;
}

async function displayImages() {
    const imageData = await fetchImageData();
    const numImages = await getNumberOfImages();

    for (let i = 0; i < numImages; i++) {
        let htmlCode = `<div class="item">
        <img class="image" src="${imageData[i].url}" loading="lazy">
        <h2>${imageData[i].title}</h2>
        </div>`;

        container.insertAdjacentHTML("afterbegin", htmlCode);
    }
}

displayImages();