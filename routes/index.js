const router = require("express").Router();
const recipeController = require("../controllers/recipeController");

// get all recipes 
router.get("/getAll", async (req, res) =>
{
    const recipes = await recipeController.getAllRecipes();
    res.send({ success: true, recipes })
});

// get by id
router.get("/:recipeId", async (req, res) =>
{
    const { recipeId } = req.params;

    try
    {
        const recipe = await recipeController.getRecipe(recipeId);
        
        if (recipe)
        {
            return res.send({ success: true, recipe })
        }
        else
        {
            return res.sendStatus(404);
        }
    }
    catch (error)
    {
        console.log("Error while fetching recipe by id", error);
        return res.send(500);
    }

});

// create recipe
router.post("/", async (req, res) =>
{
    const recipe = req.body;

    try
    {
        const createdRecipe = await recipeController.createRecipe(recipe);
        return res.status(201).send({ success: true, createdRecipe });

    }
    catch (error)
    {
        console.log("Error while creating recipe", error);
        return res.sendStatus(500);
    }
});

// delete recipe by id
router.delete("/:recipeId", async (req, res) =>
{
    const { recipeId } = req.params;
    
    try
    {
        const isDeleted = await recipeController.deleteRecipe(recipeId);

        if (isDeleted)
        {
            return res.send({ success: true });
        }
        else
        {
            return res.send({ success: false });
        }
    }
    catch (error)
    {
        console.log("Error while deleting recipe", error);
        return res.sendStatus(500);
    }
});

// update recipe by id
router.put("/:recipeId", async (req, res) =>
{
    const { recipeId } = req.params;
    const recipe = req.body;

    try
    {
        const updatedRecipe = await recipeController.updateRecipe(recipeId, recipe);
        return res.send({ success: true, updatedRecipe });
    }
    catch (error)
    {
        console.log("Error while updating recipe", error);
        return res.sendStatus(500);
    }
});

module.exports = router;

