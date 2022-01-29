import Cocktail from '../../../models/Cocktail';
import connectToDatabase from '../../../utils/db';

connectToDatabase();

const handleFunction = async (req, res) => {
  const {
    method,
    query: { id }
  } = req;

  if (method === 'DELETE') {
    try {
      const deletedNote = await Cocktail.deleteOne({ _id: id });
      req.status(201).json({ message: 'Success', data: deletedNote });
    } catch (error) {
      req.status(400).json({ message: 'Failed' });
    }
    return;
  }
};

export default handleFunction;
