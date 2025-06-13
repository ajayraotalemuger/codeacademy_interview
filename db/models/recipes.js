const { Schema, model } = require("mongoose");

const recipeSchema = new Schema({
    name: { type: String },
    instructions: [String],
    ingredients: [{
        type: Schema.Types.Mixed
    }],
    prepTime_min: Number
});

module.exports = model("recipes", recipeSchema);