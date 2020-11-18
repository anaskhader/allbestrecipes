fetch ('localhose:3000')
.then(response => response.json())
.then(data => RenderData(data));

const cont = document.getElementById("container")

function RenderData(data) {
    data.forEach((r) => {
        const card = document.createElement("div")
        const title = document.createElement("h2")
        title.innerText = r.title
        const image = document.createElement("img")
        image.classList.add("image")
        image.setAttribute("src", r.image)
        const ingredients = document.createElement("p")
        ingredients.innerText = r.ingredients
        card.appendChild(title)
        card.appendChild(image)
        card.appendChild(ingredients)

        card.classList.add("card")
        
        title.classList.add("retitle")
        ingredients.classList.add("ingred")

        cont.appendChild(card)
    });
}