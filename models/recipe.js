import mongoose from "mongoose"

const Schema = mongoose.Schema

const Recipe = new Schema(
  {
    name: { type: String, required: true },
    ingredients: [{ type: String, required: true }],
    instructions: [{ type: String, required: true }],
  },
  { timestamps: true }
)

export default mongoose.model("recipes", Recipe)
