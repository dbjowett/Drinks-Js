import Cocktail from '../../../models/Cocktail';
import connectToDatabase from '../../../utils/db';

connectToDatabase();

const handleFunction = async (req, res) => {
  const {
    method,
    query: { id }
  } = req;

  // Get a single Cocktail
  if (method === 'GET') {
    try {
      const note = await Cocktail.findOne({ _id: id });
      if (!note) {
        res.status(201).json({ message: 'Failed' });
      }
      res.status(201).json({ message: 'Success', data: note });
    } catch (error) {
      console.log(error);
      res.status(400).json({ message: 'Failed' });
    }
    return;
  }

  // Delete a single Cocktail
  if (method === 'DELETE') {
    try {
      const deletedNote = await Cocktail.deleteOne({ _id: id });
      res.status(201).json({ message: 'Success', data: deletedNote });
    } catch (error) {
      res.status(400).json({ message: 'Failed' });
    }
    return;
  }

  // Edit existing cocktail
  if (method === 'PUT') {
    try {
      const note = await Cocktail.findByIdAndUpdate(id, req.body, { new: true, runValidators: true });
      res.status(201).json({ message: 'Success', data: note });
    } catch (error) {
      res.status(400).json({ message: 'Failed' });
    }
    return;
  }
};

export default handleFunction;
