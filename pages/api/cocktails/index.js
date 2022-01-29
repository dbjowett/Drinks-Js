import connectToDatabase from '../../../utils/db';
import Cocktail from '../../../models/Cocktail';

connectToDatabase();

const cocktails = async (req, res) => {
  const { method } = req;

  if (method === 'GET') {
    try {
      const Cocktails = await Cocktail.find({});
      res.status(201).json({ message: 'Success', data: Cocktails });
      return;
    } catch (error) {
      res.status(400).json({ message: 'Error' });
    }
  }

  if (method === 'POST') {
    try {
      const body = req.body;
      const newCocktail = await Cocktail.create(body);

      res.status(201).json({ message: 'Success', data: newCocktail });
      return;
    } catch (error) {
      res.status(400).json({ message: 'Failed' });
    }
  }
  if (method !== 'POST' || method !== 'GET') {
    res.status(400).json({ success: false });
    return;
  }
};

export default cocktails;
