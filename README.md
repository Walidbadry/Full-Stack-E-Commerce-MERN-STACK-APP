# 🛒 Full-Stack E-Commerce MERN App with DevOps Pipeline

## 📌 Overview

This project demonstrates how to apply **DevOps practices** on a full-stack **MERN (MongoDB, Express, React, Node.js)** e-commerce application.

It includes:

* CI/CD pipeline using Jenkins
* Containerization using Docker
* Kubernetes deployment using Minikube
* DevSecOps practices integration

---

## 🏗️ Project Structure

```
.
├── client/              # React Frontend
├── server/              # Node.js Backend (Express)
├── Jenkinsfile          # CI/CD Pipeline
├── docker-compose.yml   # Multi-container setup
└── README.md
```

---

## ⚙️ Technologies Used

* **Frontend:** React.js
* **Backend:** Node.js, Express.js
* **Database:** MongoDB
* **CI/CD:** Jenkins
* **Containerization:** Docker
* **Orchestration:** Kubernetes (Minikube)
* **Version Control:** Git

---

## 🚀 DevOps Workflow

### 1️⃣ Source Code Management

* Code is stored in Git repository
* Separate folders for client and server

---

### 2️⃣ Continuous Integration (CI)

* Jenkins pipeline automatically:

  * Pulls code from Git
  * Installs dependencies
  * Runs build process
  * Builds Docker images

---

### 3️⃣ Dockerization

* Application is containerized using Docker
* `docker-compose.yml` runs:

  * Frontend
  * Backend
  * Database

---

### 4️⃣ Continuous Deployment (CD)

* Jenkins deploys containers to Minikube
* Kubernetes manages:

  * Pods
  * Services
  * Scaling

---

### 5️⃣ DevSecOps

* Security scanning can be integrated (e.g., Trivy)
* Ensures secure Docker images and dependencies

---

## 🐳 Running the Project with Docker

```bash
docker-compose up --build
```

Access:

* Frontend → http://localhost:3000
* Backend → http://localhost:5000

---

## ☸️ Running with Kubernetes (Minikube)

```bash
minikube start
kubectl apply -f k8s/
```

Check pods:

```bash
kubectl get pods
```

---

## 🔄 Jenkins Pipeline

The `Jenkinsfile` automates:

* Build
* Test
* Docker Image Creation
* Deployment

---

## 📷 Future Improvements

* Add monitoring (Prometheus & Grafana)
* Add logging (ELK Stack)
* Improve security scanning
* Add auto-scaling

---

## 👨‍💻 Author

**Walid Badry**

---

## ⭐ Notes

This project is built for learning and demonstrating real-world DevOps practices on a MERN stack application.

---
