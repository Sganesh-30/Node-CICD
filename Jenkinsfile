pipeline {
    agent any

    tools {
        nodejs 'NodeJS-234'
    }

    stages {
        stage ('Code Checkout') {
            steps {
                git branch: 'main', credentialsId: 'jenkins', url: 'https://github.com/Sganesh-30/Node-CICD.git'
            }           
        }

        stage ('Print Node and NPM Version') {
            steps {
                sh 'node -v'
                sh 'npm -v'
            }
        }

        stage ('Installing Dependencies') {
            steps {
               sh 'npm install'
               sh 'npm install --save-dev mocha' 
            }
        }
        stage ('Run Unit Test') {
            steps {
                sh 'npm run test'
            }
        }
        stage ('Build Docker Image') {
            steps {
                sh 'docker build -t nodeapp:v1 -f Dockerfile.node . '
            }
        }
    }
    
}