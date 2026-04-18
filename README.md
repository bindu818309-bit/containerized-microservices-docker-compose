# containerized-microservices-docker-compose
 Containerize a microservices-based application using Node.js, Docker, and Docker Compose
🚀 Containerized Microservices with Docker Compose
📌 Overview

This project demonstrates a microservices-based architecture where multiple independent services are containerized using Docker and orchestrated with Docker Compose.

Each service runs in its own isolated container and can be developed, deployed, and scaled independently.

🧱 Services Included
User Service
Product Service
Order Service
Gateway Service (entry point)
🛠️ Tech Stack
Node.js
Express.js
Docker
Docker Compose
📁 Project Structure
submission/
├── user-service/
│   └── Dockerfile
├── product-service/
│   └── Dockerfile
├── order-service/
│   └── Dockerfile
├── gateway-service/
│   └── Dockerfile
├── docker-compose.yml
└── README.md
⚙️ Prerequisites

Make sure you have:

Docker installed
Docker Compose installed
🚀 Getting Started
1. Clone the repository
git clone https://github.com/<your-username>/containerized-microservices-docker-compose.git
cd containerized-microservices-docker-compose
2. Build and run all services
docker-compose up --build -d
🌐 Access the Services
Service	URL
Gateway Service	http://localhost:3000
User Service	http://localhost:3001
Product Service	http://localhost:3002
Order Service	http://localhost:3003
🧪 Testing

Open the above URLs in your browser.
Each service returns a unique message confirming it is running successfully.

📦 Docker Commands
Check running containers
docker-compose ps
View logs
docker-compose logs
Stop all services
docker-compose down
🔍 Key Features
Containerized microservices architecture
Independent services with isolated environments
Centralized orchestration using Docker Compose
Simple and scalable project structure
📈 Future Improvements
Add inter-service communication
Implement API gateway routing
Integrate databases for each service
Add environment variable configuration
📬 Submission Details

This repository demonstrates:

Dockerfile setup for multiple services
Docker Compose orchestration
Running and accessible services
👤 Author
