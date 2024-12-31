pipeline {
    agent any

    environment {
        DOCKER_HUB_CREDENTIALS='DockerImageRegistry'
    }

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
                sh 'docker build -t sganesh3010/nodeapp:$GIT_COMMIT -f Dockerfile.node . '
            }
        }
        stage ('Push Image to Hub') {
            steps {
                withDockerRegistry(credentialsId: 'DockerImageRegistry', url: 'https://index.docker.io/v1/') {
                    sh 'docker push sganesh3010/nodeapp:$GIT_COMMIT'

                }
            }
        }
        stage ('Creating Container') {
            steps {
                sh 'docker run -d --name nodeapp1 -p 3000:3000 sganesh3010/nodeapp:01d48ca5615cab210ecf40932c53be88a34e87c6'
            }
        }
    }
    
}


