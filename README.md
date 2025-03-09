# 📺 Netflix-Like Video Streaming App
A Dockerized Netflix-like video streaming application with React (Frontend), Node.js/Express (Backend), MongoDB (Database), and NGINX (Reverse Proxy).

## 🚀 Features

✅ User-friendly Interface for browsing & streaming videos

✅ Video Upload & Storage using MongoDB

✅ Video Streaming with backend API

✅ Dockerized Setup for easy deployment

✅ NGINX as a Reverse Proxy for better performance

## 🛠️ Technologies Used

- **Frontend**: React.js, HTML, CSS  
- **Backend**: Node.js, Express.js  
- **Database**: MongoDB (stores video metadata)  
- **Reverse Proxy**: Nginx  
- **Containerization**: Docker & Docker Compose  


## 📂 Project Structure
```
NetflixLike/
│── backend/            # Express.js Backend API
│   ├── server.js       # Main Backend Server
│   ├── routes/         # API Routes (Videos)
│   ├── models/         # Mongoose Models
│   ├── controllers/    # Business Logic
│── frontend/           # React.js Frontend
│   ├── src/            # Source Code
│   ├── public/         # Static Files
│   ├── Dockerfile      # Frontend Dockerfile
│── nginx/              # NGINX Reverse Proxy
│   ├── nginx.conf      # NGINX Configuration
│── init-mongo.js       # Initial MongoDB Data
│── docker-compose.yml  # Docker Compose Config
│── README.md           # Project Documentation
```


## ⚡ Quick Start
1️⃣ Clone the Repository
```
git clone https://github.com/yourusername/netflix-like.git
cd netflix-like
```

2️⃣ Start the Application
```
docker-compose up --build -d
```

3️⃣ Open in Browser

Frontend → http://localhost:3000

Backend API → http://localhost:5001

NGINX Proxy → http://localhost



## ⚙️ API Endpoints

GET	/videos	Fetch all videos

GET	/video/:filename	Stream video

POST	/upload	Upload new video (WIP)

## 🐳 Docker Setup
🔹 Build & Run Containers
```
docker-compose up --build -d
```
🔹 Stop Containers
```
docker-compose down
```

🔹 Check Running Containers
```
docker ps
```

📡 MongoDB Setup
Connect to MongoDB from Local
```
mongo --host localhost --port 27017
```

Check Existing Data
```
use netflix
db.videos.find().pretty()
```

## Work In Progres
1. NgInx setup with docker
2. Upload API

## 🌟 Future Enhancements

✅ User authentication (Login/Signup)

✅ Video recommendations

✅ Cloud-based video storage

## 📜 License
This project is MIT Licensed.

## Test commands - To remove container and start fresh
```
docker compose down -v
docker compose up -d
```
