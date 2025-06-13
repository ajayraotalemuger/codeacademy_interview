const recipesDAL = require("../db/modules/recipesDAL");

const ALLOWED_QUERY_PARAMS = [
    "name",
    "prepTime_min"
];

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

exports.findRecipesByQuery = async (inputQueries) =>
{
    let query = {};

    ALLOWED_QUERY_PARAMS.forEach((param) =>
    {
        if (inputQueries[param])
        {
            query[param] = inputQueries[param];
        }
    });

    return recipesDAL.findByQuery(query);
}