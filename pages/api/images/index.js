import { cloudinary } from '../../../utils/cloudinary';

const imageUpload = async (req, res) => {
  const { method } = req;
  if (method === 'POST') {
    try {
      const uploadRes = await cloudinary.uploader.upload(req.body.data, { upload_preset: 'Cocktails' });
      res.status(201).json({ message: 'Success', url: uploadRes.secure_url });
    } catch (error) {
      res.status(400).json({ message: 'Failed' });
    }
    return;
  }

  if (method !== 'POST') {
    res.status(400).json({ success: false });
    return;
  }
};

export default imageUpload;
