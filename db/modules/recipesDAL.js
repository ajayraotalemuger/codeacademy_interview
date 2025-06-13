const recipes = require("../models/recipes");

exports.getAll = () =>
{
    return recipes.find({});
};

exports.findById = (id) =>
{
    return recipes.findOne({ _id: id });
};

exports.create = (recipe) =>
{
    return recipes.insertOne(recipe);
}

exports.deleteById = (id) =>
{
    return recipes.deleteOne({ _id: id });
}

exports.update = (id, update) =>
{
    return recipes.findOneAndUpdate(
        {
            _id: id,
        },
        update,
        {
            new: true
        }
    );
}