//first file after npm init -y to create package.json
//npm i express
//git init to intialize empty repository
//.gitignore and put in node_modules
//type: module in package.json to enable import express

import express from "express"
import logger from "morgan"

import db from "./db/connection"
import Recipe from "./models/recipe"

// import { createRequire } from "module"
// const require = createRequire(import.meta.url)

// const recipe_file = require("./recipes.json")
const app = express()
const PORT = process.env.PORT || 3000

// const recipes = recipe_file.recipes

app.use(express.json())
app.use(logger("dev"))

db.on("connected", () => {
  console.log("Connected to MongoDB")
  app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`)
  })
})

app.get("/", (req, res) => res.send("This is the root"))

app.get("/recipes", async (req, res) => {
  try {
    const recipes = await Recipe.find()
    res.json(recipes)
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: error.message })
  }
})

app.get("/recipes/:id", async (req, res) => {
  try {
    const id = req.params
    const recipe = await Recipe.findById(id)
    res.json(recipe)
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: error.message })
  }
})

app.post("/recipes", async (req, res) => {
  try {
    const recipe = new Recipe(req.body)
    await recipe.save()
    res.status(201).json(recipe)
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: error.message })
  }
})

app.put("/recipes/:id", async (req, res) => {
  const { id } = req.params
  const recipe = await Recipe.findByIdAndUpdate(id, req.body, { new: true })
  res.status(200).json(recipe)
})

app.delete()
