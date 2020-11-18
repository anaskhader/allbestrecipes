fetch ('localhose:3000')
.then(response => response.json())
.then(data => RenderData(data));

const cont = document.getElementById("container")

function RenderData(data) {
    data.forEach((r) => {
        const recard = document.createElement("div")
        const title = document.createElement("h2")
        title.innerText = r.title
        const image = document.createElement("img")
        image.setAttribute("src", "banner-img")
        const ingredients = document.createElement("p")
        ingredients.innerText = r.ingredients
    });
}