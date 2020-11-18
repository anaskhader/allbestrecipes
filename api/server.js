// const { count } = require("console")
const express = require("express")
const cors = require("cors") 
// const { getServers } = require("dns")
const app = express()
app.use(cors())

function GetRecipes(req,res){
    let recipes = [
     { 
        id : 1,
        title : "how to make salade",
        image : "https://assets.afcdn.com/recipe/20190704/94666_w600.jpg",
        ingredients : ` About 4 ounces lettuce or mixed greens, washed, dried, and torn 
        Finely shredded carrots or julienned cucumbers optional
        Small handful finely shredded fresh basil, mint or other aromatic herb (optional)
        2 tablespoons olive oil
        2 teaspoons vinegar or lemon juice
        1/2 teaspoon honey or maple syrup
        Flaky salt and freshly ground black pepper
        Grated Parmesan or Asiago cheese, for garnish (optional) `
   },
   {
       id : 2,
       title : "how to make sandwich   ",
       image : "https://www.wikihow.com/images/thumb/0/08/Make-a-Sandwich-Step-9-Version-4.jpg/aid6868-v4-728px-Make-a-Sandwich-Step-9-Version-4.jpg.webp",
       ingredients: ` 2 slices whole-grain bread (bakery-fresh recommended)
       1 tablespoon hummus
       2 slices tomato
       1/2 small cucumber, thinly sliced lengthwise
       1 slice low-fat cheese `
   },
   {
       id : 3,
       title : "how to make zfiti",
       image : "https://scontent-mrs2-1.xx.fbcdn.net/v/t1.0-9/81255842_108544794001897_7308233105817468928_n.jpg?_nc_cat=104&ccb=2&_nc_sid=8024bb&_nc_ohc=TsposIuTAbEAX_YQJOn&_nc_ht=scontent-mrs2-1.xx&oh=7d65b7ec4e568e110f2cdb3001f0ecda&oe=5FDA28EE",
       ingredients: `
       1 poivron rouge
       2 piments verts très piquants
       1 gousse d’ail
       1 tomate
       1/2 botte de coriandre fraîche ciselée
       un peu d’eau
       2 cuillères à soupe d’huile d’olive
       1 pincée de sele `
   }

    ]
    res.json(recipes)
}
app.get("/", GetRecipes)




app.listen(3000, ( ) => console.log("listening in port 3000"))

















