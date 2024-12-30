pipeline {
    agent any

    tools {
        nodejs 'NodeJS-234'
    }

    stages {
        stage ('Code Checkout') {
            checkout scm
        }

        stage ('Print Node Version') {
            sh node -v
        }
    }
    
}