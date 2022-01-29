const mongoose = require('mongoose');

const CocktailSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  }
});

module.exports = mongoose.models.Cocktail || mongoose.model('Cocktail', CocktailSchema);
