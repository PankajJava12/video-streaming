📺 Netflix-Like Video Streaming App
A Dockerized Netflix-like video streaming application with React (Frontend), Node.js/Express (Backend), MongoDB (Database), and NGINX (Reverse Proxy).

🚀 Features
✅ User-friendly Interface for browsing & streaming videos
✅ Video Upload & Storage using MongoDB
✅ Video Streaming with backend API
✅ Dockerized Setup for easy deployment
✅ NGINX as a Reverse Proxy for better performance

🛠️ Tech Stack
Component	Technology
Frontend	React
Backend	Node.js, Express, MongoDB
Database	MongoDB
Proxy	NGINX
Containerization	Docker, Docker Compose


📂 Project Structure
csharp

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
⚡ Quick Start
1️⃣ Clone the Repository
bash

git clone https://github.com/yourusername/netflix-like.git
cd netflix-like
2️⃣ Start the Application
bash

docker-compose up --build -d
3️⃣ Open in Browser
Frontend → http://localhost:3000
Backend API → http://localhost:5001
NGINX Proxy → http://localhost
⚙️ API Endpoints
Method	Endpoint	Description
GET	/videos	Fetch all videos
GET	/video/:filename	Stream video
POST	/upload	Upload new video
🐳 Docker Setup
🔹 Build & Run Containers
bash

docker-compose up --build -d
🔹 Stop Containers
bash

docker-compose down
🔹 Check Running Containers
bash

docker ps
📡 MongoDB Setup
Connect to MongoDB from Local
bash

mongo --host localhost --port 27017 -u root -p example --authenticationDatabase admin
Check Existing Data
bash

use netflixDB
db.videos.find().pretty()
🌟 Future Enhancements
✅ User authentication (Login/Signup)
✅ Video recommendations
✅ Cloud-based video storage
📜 License
This project is MIT Licensed.

docker compose down -v
docker compose up -d
