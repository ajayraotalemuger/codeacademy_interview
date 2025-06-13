const recipesDAL = require("../db/modules/recipesDAL");

exports.getAllRecipes = () =>
{
    return recipesDAL.getAll(); 
};

exports.getRecipe = (recipeId) =>
{
    return recipesDAL.findById(recipeId);
};

exports.createRecipe = (recipe) =>
{
    return recipesDAL.create(recipe);
};

exports.deleteRecipe = async (recipeId) =>
{
    let isDeleted = false;

    const resp = await recipesDAL.deleteById(recipeId);
    
    if (resp.deletedCount === 1)
    {
        isDeleted = true;
    }

    return isDeleted;
};

exports.updateRecipe = async (recipeId, recipeUpdate) =>
{
    return recipesDAL.update(recipeId, recipeUpdate);
};