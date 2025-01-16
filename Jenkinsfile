pipeline {
    agent any
    
    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/your-repo/mern-app.git'
            }
        }
        stage('Build') {
            steps {
                script {
                    sh 'docker build -t mern-app .'
                }
            }
        }
        stage('Test') {
            steps {
                script {
                    sh 'docker run mern-app npm test'
                }
            }
        }
        stage('Deploy to Minikube') {
            steps {
                script {
                    sh 'kubectl apply -f deployment.yaml'
                }
            }
        }
    }
}
