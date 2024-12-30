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

        stage ('Print Node Version') {
            steps {
                sh 'node -v'
            }
        }
    }
    
}