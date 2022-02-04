// app.get("/", (req, res) => {
//   res.json(recipes)
// })

// app.get("/recipes", (req, res) => {
//   const recipeNames = {
//     recipeNames: recipe_file.recipes.map((recipe) => recipe.name),
//   }
//   res.json(recipeNames)
// })

// app.get("/recipes/details/:id", (req, res) => {
//   const id = req.params.id
//   const recipe = recipes.find((recipe) => recipe.name === id)
//   res.json({
//     details: {
//       ingredients: recipe.ingredients,
//       numOfSteps: recipe.instructions.length,
//     },
//   })
// })

// app.post("/", (req, res) => {
//   const recipe = req.body
//   recipes.push(recipe)
//   res.json(recipes)
// })

// app.put("/recipes/:id", (req, res) => {
//   const id = req.params.id
//   const recipeIndex = recipes.findIndex((recipe) => recipe.name === id)
//   const recipe = { ...recipes[recipeIndex], ...req.body }
//   recipes.splice(recipeIndex, 1, recipe)
//   res.json(recipe)
// })

// app.delete("/recipes/:id", (req, res) => {
//   const id = req.params.id
//   const recipeIndex = recipes.findIndex((recipe) => recipe.name === id)
//   recipes.splice(recipeIndex, 1)
//   res.json()
// })
