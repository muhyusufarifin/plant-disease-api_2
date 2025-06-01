# 🌱 Plant Disease Recognition API

Backend API untuk sistem identifikasi penyakit tanaman dengan autentikasi pengguna dan analisis gambar berbasis Node.js & MySQL.

![Node.js](https://img.shields.io/badge/Node.js-18.x-green)
![Express](https://img.shields.io/badge/Express-4.x-blue)
![MySQL](https://img.shields.io/badge/MySQL-8.0-orange)
![JWT](https://img.shields.io/badge/JWT-Auth-purple)

## 📦 Prasyarat

- Node.js v18+
- MySQL 8.0+
- NPM/Yarn
- [Opsional] Laragon/XAMPP untuk development lokal

## 🚀 Panduan Instalasi

  ### 1. Clone Repositori
  ```bash
  git clone https://github.com/username/plant-disease-api.git
  cd plant-disease-api
  
  2. Install Dependencies
  bash
  
  npm install
  
  3. Setup Environment
  bash
  
  cp .env.example .env
  
  Edit file .env sesuai konfigurasi lokal Anda.
  4. Setup Database
  
  Jalankan perintah MySQL:
  bash
  
  mysql -u root -p < database.sql
```
  
  ## 🔧 Konfigurasi
  
  File .env wajib diisi:
  ini
  
  ### Database
  DB_HOST=localhost
  DB_USER=root
  DB_PASSWORD=
  DB_NAME=plant_disease_db
  DB_PORT=3306
  
  ### JWT
  JWT_SECRET=generate_dengan_npm_run_generate:key
  JWT_EXPIRES_IN=1d
  
  ### Server
  PORT=3000
  UPLOAD_FOLDER=./uploads
  
  Generate JWT Secret Key:
  bash
  
  npm run generate:key
  
  ## 🏃‍♂️ Menjalankan Aplikasi
  
  Development mode (dengan hot reload):
  bash
  
  npm run dev
  
  Production mode:
  bash
  
  npm start
  
  Aplikasi akan berjalan di:
  http://localhost:3000

## 📚 Dokumentasi API
  Autentikasi
  Method	Endpoint	Deskripsi
  POST	/api/auth/register	Registrasi pengguna
  POST	/api/auth/login	Login pengguna
  Manajemen Gambar
  Method	Endpoint	Deskripsi
  POST	/api/images/upload	Upload gambar tanaman (Auth)
  GET	/api/images	Lihat semua gambar user (Auth)
  POST	/api/images/analyze	Analisis penyakit (Auth)

## 📝 Contoh Request
  Registrasi Pengguna
  bash
  
  curl -X POST http://localhost:3000/api/auth/register \
    -H "Content-Type: application/json" \
    -d '{"name":"John Doe","email":"john@example.com","password":"securePassword123"}'
  
  Upload Gambar
  bash
  
  curl -X POST http://localhost:3000/api/images/upload \
    -H "Authorization: Bearer your_jwt_token" \
    -F "image=@/path/to/plant.jpg"

## 🏗️ Struktur Projek

  plant-disease-api/
  ├── config/           # Konfigurasi DB & upload
  │   ├── db.js
  │   └── upload.js
  ├── controllers/      # Logic endpoint
  │   ├── authController.js
  │   └── imageController.js
  ├── middlewares/      # JWT & upload
  ├── models/           # Skema database
  ├── routes/           # Routing
  ├── services/         # Layanan tambahan
  ├── uploads/          # Penyimpanan gambar
  ├── .env.example      # Template environment
  ├── database.sql      # Skema database
  ├── app.js            # Aplikasi utama
  └── server.js         # Entry point

## 🤖 Integrasi Machine Learning

        Letakkan model ML di folder models/ml/
    
        Implementasi di services/mlService.js
    
        Contoh endpoint analisis:
    
    javascript
    
    router.post('/analyze', auth, upload, imageController.analyzeImage);

## 📄 Lisensi

  MIT License © 2023 [Nama Anda]
  
  
  ### Tips untuk Tampilan GitHub yang Profesional:
  1. **Gunakan Emoji** untuk visual yang lebih menarik (daftar emoji: https://gitmoji.dev/)
  2. **Badges** dari shields.io untuk versi dependency
  3. **Format Tabel** untuk dokumentasi API
  4. **Struktur Folder** dengan tree ASCII
  5. **Highlight Syntax** untuk contoh kode

### Cara Push ke GitHub:
  1. Buat file `.gitignore`:
  
  node_modules/
  .env
  uploads/
  
  
  2. Inisialisasi Git:
  git init
  git add .
  git commit -m "Initial commit"
  git branch -M main
  git remote add origin https://github.com/username/repo.git
  git push -u origin main

markdown

# 📚 Plant Disease Recognition API Documentation

**Base URL**: `http://localhost:3000/api`

## 🔐 Authentication

### Register User
`POST /auth/register`

**Request Body**:
```json
{
  "name": "string",
  "email": "string",
  "password": "string"
}

Response Success (201):
json

{
  "message": "User registered successfully",
  "user": {
    "id": "number",
    "name": "string",
    "email": "string",
    "created_at": "timestamp"
  }
}

Login User

POST /auth/login

Request Body:
json

{
  "email": "string",
  "password": "string"
}

Response Success (200):
json

{
  "message": "Login successful",
  "token": "string",
  "user": {
    "id": "number",
    "name": "string",
    "email": "string"
  }
}
```
## 🌿 Plant Images
### Upload Image
```json
POST /images/upload

Headers:

    Authorization: Bearer <token>

    Content-Type: multipart/form-data

Request Body (form-data):
Key	Value	Type
image	File	File

Response Success (201):
json

{
  "message": "Image uploaded successfully",
  "filename": "string"
}

Get User Images

GET /images

Headers:

    Authorization: Bearer <token>

Response Success (200):
json

{
  "message": "Images retrieved successfully",
  "images": [
    {
      "id": "number",
      "user_id": "number",
      "filename": "string",
      "uploaded_at": "timestamp"
    }
  ]
}
```
## 🔍 Disease Analysis
### Analyze Plant Disease
```json
POST /images/analyze

Headers:

    Authorization: Bearer <token>

    Content-Type: multipart/form-data

Request Body (form-data):
Key	Value	Type
image	File	File

Response Success (200):
json

{
  "message": "Analysis complete",
  "plantName": "string",
  "diseases": [
    {
      "id": "number",
      "plant_name": "string",
      "disease_name": "string",
      "description": "string",
      "solution": "string"
    }
  ]
}
```
## 🚨 Error Responses
```json
400 Bad Request:
json

{
  "message": "Validation error",
  "errors": [
    "Email must be valid",
    "Password must be at least 6 characters"
  ]
}

401 Unauthorized:
json

{
  "message": "No token, authorization denied"
}

404 Not Found:
json

{
  "message": "Image not found"
}

500 Internal Server Error:
json

{
  "message": "Server error"
}
```
## 🔄 Example Flow
```json
    Register → POST /auth/register

    Login → POST /auth/login (dapatkan token)

    Upload Image → POST /images/upload (dengan token)

    Analyze → POST /images/analyze (dengan token)
```
