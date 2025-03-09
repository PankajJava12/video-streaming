# 📺 Netflix-Like Video Streaming App
A Dockerized Netflix-like video streaming application with React (Frontend), Node.js/Express (Backend), MongoDB (Database), and NGINX (Reverse Proxy).

## 🚀 Features

✅ User-friendly Interface for browsing & streaming videos (Basic browsing, TODO: Enhancements)

✅ Video Upload & Storage using MongoDB (TODO: Video upload)

✅ Video Streaming with backend API

✅ Dockerized Setup for easy deployment

✅ NGINX as a Reverse Proxy for better performance (TODO: TBD)

## Architecture Diagram

![image](https://github.com/user-attachments/assets/701680b5-8024-4f90-b29e-6e8f23d6933e)


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

## 📌 High-Level Design (HLD)
1️⃣ Architecture Overview
The application follows a microservices-based approach (Since it is in intial phase, backend is monolith as it uses meta data and streaming), where different components handle distinct functionalities:

- Frontend (React.js): User Interface for browsing and streaming videos.
- Backend (Node.js, Express): Handles API requests, video storage, and streaming.
- Database (MongoDB): Stores video metadata and user details.
- NGINX: Acts as a reverse proxy to manage API routing and serve frontend content.
- Docker & Docker Compose: Containers for deployment.

2️⃣ System Components

1. User Interface (Frontend)

    - Built with React.js.
    - Fetches video metadata from the backend.
    - Streams video via an embedded player.
    -  Backend API (Node.js & Express)

2. Backend API (Node.js & Express)
    - Provides REST API endpoints for:
        - Fetching video metadata.
        - Uploading videos. (WIP)
        - Streaming videos.
        - Interacts with MongoDB for storing video information.
        - Database (MongoDB)

3. Database (MongoDB)
 - Stores video metadata like title, description, filename, etc.
 - Stores user information (future enhancement).
 - Video Storage

4. Video Storage

 - Initially, video files are stored on the server.
 - Future enhancement: Integration with cloud storage (AWS S3, Google Cloud Storage, etc.).
 - Reverse Proxy (NGINX)

5. Reverse Proxy (NGINX)
 - Routes frontend and API requests efficiently.
 - Improves security and performance.
 - Containerization & Deployment

6. Containerization & Deployment
 - Uses Docker Compose to run all services.
 - Each component runs in its own container.

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

## TODO
 - Future Plan - https://github.com/PankajJava12/netflixlike/blob/main/futureplan.md

## Test commands - To remove container and start fresh
```
docker compose down -v
docker compose up -d
```
