const upload = require('../config/upload');

const handleUpload = upload.single('image');

module.exports = handleUpload;