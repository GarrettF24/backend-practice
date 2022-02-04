//first file after npm init -y to create package.json
//npm i express
//git init to intialize empty repository
//.gitignore and put in node_modules
//type: module in package.json to enable import express

import express from "express"
import logger from "morgan"
import { createRequire } from "module"
const require = createRequire(import.meta.url)
const recipe_file = require("./recipes.json")
const app = express()
const PORT = process.env.PORT || 3000

const recipes = recipe_file.recipes

app.use(express.json())
app.use(logger("dev"))

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`)
})

app.get("/", (req, res) => {
  res.json(recipe_file)
})

app.get("/recipes", (req, res) => {
  const recipeNames = {
    recipeNames: recipe_file.recipes.map((recipe) => recipe.name),
  }
  res.json(recipeNames)
})

app.get("/recipes/details/:id", (req, res) => {
  const id = req.params.id
  const recipe = recipes.find((recipe) => recipe.name === id)
  res.json({
    details: {
      ingredients: recipe.ingredients,
      numOfSteps: recipe.instructions.length,
    },
  })
})

app.post("/", (req, res) => {
  const recipe = req.body
  recipes.push(recipe)
  res.json(recipes)
})

app.put("/recipes/:id", (req, res) => {
  const id = req.params.id
  const recipeIndex = recipes.findIndex((recipe) => recipe.name === id)
  const recipe = { ...recipes[recipeIndex], ...req.body }
  recipes.splice(recipeIndex, 1, recipe)
  res.json(recipe)
})

app.delete("/recipes/:id", (req, res) => {
  const id = req.params.id
  const recipeIndex = recipes.findIndex((recipe) => recipe.name === id)
  recipes.splice(recipeIndex, 1)
  res.json()
})
