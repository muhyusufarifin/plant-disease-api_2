Plant Disease Recognition API

Node.js
Express
MySQL

Backend API untuk aplikasi pengenalan penyakit tanaman dengan kemampuan:

    Autentikasi pengguna

    Upload gambar tanaman

    Deteksi penyakit tanaman

    Penyimpanan data tanaman dan penyakit

🛠️ Prasyarat

    Node.js v18+

    MySQL 8.0+

    NPM/Yarn

    Laragon/XAMPP (opsional untuk development)

🚀 Instalasi

    Clone repositori:

bash

git clone https://github.com/username/plant-disease-api.git
cd plant-disease-api

    Install dependencies:

bash

npm install

    Buat file .env dari template:

bash

cp .env.example .env

    Konfigurasi database di .env:

env

DB_HOST=localhost
DB_USER=root
DB_PASSWORD=
DB_NAME=plant_disease_db
DB_PORT=3306

JWT_SECRET=your_jwt_secret_here
JWT_EXPIRES_IN=1d

PORT=3000
UPLOAD_FOLDER=./uploads

    Jalankan database:

bash

mysql -u root -p < database.sql

🔥 Menjalankan Aplikasi

Mode development (dengan hot reload):
bash

npm run dev

Mode production:
bash

npm start

Aplikasi akan berjalan di http://localhost:3000
🌐 Endpoint API
Autentikasi

    POST /api/auth/register - Registrasi pengguna baru

    POST /api/auth/login - Login pengguna

Gambar Tanaman

    POST /api/images/upload - Upload gambar tanaman (protected)

    GET /api/images - Dapatkan semua gambar pengguna (protected)

    POST /api/images/analyze - Analisis penyakit tanaman (protected)

📝 Contoh Request
Registrasi
bash

curl -X POST http://localhost:3000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{"name":"User Test","email":"user@test.com","password":"password123"}'

Login
bash

curl -X POST http://localhost:3000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"user@test.com","password":"password123"}'

Upload Gambar
bash

curl -X POST http://localhost:3000/api/images/upload \
  -H "Authorization: Bearer <token>" \
  -F "image=@/path/to/image.jpg"

Analisis Penyakit
bash

curl -X POST http://localhost:3000/api/images/analyze \
  -H "Authorization: Bearer <token>" \
  -F "image=@/path/to/image.jpg"

🧩 Struktur Projek

/plant-disease-api
  ├── config/        # Konfigurasi database dan upload
  ├── controllers/   # Logic endpoint API
  ├── middlewares/   # Autentikasi dan upload
  ├── models/        # Model database
  ├── routes/        # Definisi route
  ├── services/      # Service tambahan (ML)
  ├── uploads/       # Penyimpanan gambar
  ├── app.js         # Aplikasi utama
  └── server.js      # Server entry point

🤖 Integrasi Model ML

Untuk integrasi dengan model machine learning:

    Letakkan model TensorFlow.js di folder models/

    Update services/mlService.js

    Konfigurasi preprocessing gambar sesuai kebutuhan model
