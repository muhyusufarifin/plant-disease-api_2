// generate-key.js
const crypto = require('crypto');
const fs = require('fs');
const path = require('path');
require('dotenv').config();

function generateKey() {
  try {
    const envPath = path.resolve(__dirname, '.env');
    const jwtSecret = crypto.randomBytes(32).toString('hex');
    
    let envContents = '';
    
    if (fs.existsSync(envPath)) {
      envContents = fs.readFileSync(envPath, 'utf8');
      
      // Check if JWT_SECRET exists
      if (!envContents.includes('JWT_SECRET=')) {
        envContents += `\nJWT_SECRET=${jwtSecret}\n`;
      } else {
        envContents = envContents.replace(
          /JWT_SECRET=.*/,
          `JWT_SECRET=${jwtSecret}`
        );
      }
    } else {
      envContents = `JWT_SECRET=${jwtSecret}\n`;
    }
    
    fs.writeFileSync(envPath, envContents);
    console.log('🔑 JWT Secret key generated successfully!');
    console.log('⚠️  DO NOT SHARE THIS KEY AND KEEP IT SECURE!');
    
  } catch (error) {
    console.error('❌ Error generating key:', error.message);
    process.exit(1);
  }
}

generateKey();