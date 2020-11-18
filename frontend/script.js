fetch ('http://localhost:3000/')
.then(response => response.json())
.then(data => RenderData(data));


const cont = document.getElementById("container")

// function goToDetails(id){
    
//     fetch ('http://localhost:3000/recipes/'+id)
//     .then(response => response.json())
//     .then(data => RenderPage(data));
// }
function RenderPage(data){
    cont.innerHTML = ""
    h2.innerText = data.title
    
    image.setAttribute("src", data.image)
    
    ingredients.innerText = data.ingredients
    ingredients.classList.add("details")

}

function goToModal(ingredients){
    const modal = document.createElement('div')
    modal.classList.add('modal')
    // create the inner modal div with appended argument
    const child = document.createElement('div')
    child.classList.add('child')
    const element = document.createElement('p')
    element.classList.add("para")
    element.innerText = ingredients
    child.appendChild(element)
    // render the modal with child on DOM
    modal.appendChild(child)
    document.body.appendChild(modal)
    cont.appendChild(modal)
}

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

       const btn = document.createElement("button")
       btn.innerText="check it out"
       btn.addEventListener("click", () => {
           goToModal(r.ingredients)
        })
       

        card.appendChild(title)
        card.appendChild(image)
        
        card.appendChild(btn)
        card.classList.add("card")
        
        title.classList.add("retitle")
        ingredients.classList.add("ingred")

        cont.appendChild(card)
    });
}
