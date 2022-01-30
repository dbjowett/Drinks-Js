import connectToDatabase from '../../../utils/db';
import Cocktail from '../../../models/Cocktail';

connectToDatabase();

const cocktails = async (req, res) => {
  const { method } = req;

  if (method === 'GET') {
    try {
      const cocktails = await Cocktail.find({});
      res.status(201).json({ message: 'Success', data: cocktails });
    } catch (error) {
      res.status(400).json({ message: 'Error' });
    }
    return;
  }

  if (method === 'POST') {
    try {
      const newCocktail = await Cocktail.create(req.body);
      res.status(201).json({ message: 'Success', data: newCocktail });
    } catch (error) {
      res.status(400).json({ message: 'Failed' });
    }
    return;
  }

  if (method !== 'POST' || method !== 'GET') {
    res.status(400).json({ success: false });
    return;
  }
};

export default cocktails;
