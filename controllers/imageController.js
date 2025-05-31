const Image = require('../models/imageModel');
const fs = require('fs');
const path = require('path');
require('dotenv').config();

const imageController = {
  async uploadImage(req, res) {
    try {
      if (!req.file) {
        return res.status(400).json({ message: 'No file uploaded' });
      }

      const { id: userId } = req.user;
      const { filename } = req.file;

      await Image.create({ userId, filename });

      res.status(201).json({ 
        message: 'Image uploaded successfully',
        filename 
      });
    } catch (err) {
      console.error(err);
      
      // Delete the uploaded file if there's an error
      if (req.file) {
        fs.unlink(path.join(process.env.UPLOAD_FOLDER, req.file.filename), () => {});
      }

      res.status(500).json({ message: 'Server error' });
    }
  },

  async getUserImages(req, res) {
    try {
      const { id: userId } = req.user;
      const images = await Image.findByUserId(userId);

      res.json({ 
        message: 'Images retrieved successfully',
        images 
      });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Server error' });
    }
  }
};

module.exports = imageController;