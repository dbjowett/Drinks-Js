const mongoose = require('mongoose');

const IngredientSchema = new mongoose.Schema({ amount: Number, title: String });

const CocktailSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  rating: {
    type: Number
  },
  ingredients: [IngredientSchema],
  url: String
});

module.exports = mongoose.models.Cocktail || mongoose.model('Cocktail', CocktailSchema);
