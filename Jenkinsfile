pipeline {
    agent any

    environment {
        // Defines DOCKERHUB_CREDS_USR and DOCKERHUB_CREDS_PSW (masked in logs)
        DOCKERHUB_CREDS = credentials('dockerhub-credentials')
        FRONT_IMAGE = "${DOCKERHUB_CREDS_USR}/garderie-frontend"
        BACK_IMAGE  = "${DOCKERHUB_CREDS_USR}/garderie-backend"
    }

    options {
        buildDiscarder(logRotator(numToKeepStr: '10'))
        disableConcurrentBuilds()
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install') {
            steps {
                dir('frontend') { sh 'npm install' }
                dir('backend')  { sh 'npm install' }
            }
        }

        stage('Test') {
            steps {
                // A failing test makes this stage fail, and the pipeline stops here
                dir('frontend') { sh 'npm test -- --ci' }
            }
        }

        stage('Build Frontend') {
            steps {
                sh 'docker build -t $FRONT_IMAGE:$BUILD_NUMBER -t $FRONT_IMAGE:latest ./frontend'
            }
        }

        stage('Build Backend') {
            steps {
                sh 'docker build -t $BACK_IMAGE:$BUILD_NUMBER -t $BACK_IMAGE:latest ./backend'
            }
        }

        stage('Push Frontend') {
            steps {
                sh '''
                    echo "$DOCKERHUB_CREDS_PSW" | docker login -u "$DOCKERHUB_CREDS_USR" --password-stdin
                    docker push $FRONT_IMAGE:$BUILD_NUMBER
                    docker push $FRONT_IMAGE:latest
                '''
            }
        }

        stage('Push Backend') {
            steps {
                sh '''
                    docker push $BACK_IMAGE:$BUILD_NUMBER
                    docker push $BACK_IMAGE:latest
                '''
            }
        }
    }

    post {
        always  { sh 'docker logout || true' }
        success { echo 'Pipeline terminé avec succès' }
        failure { echo 'Pipeline en échec : étapes suivantes annulées' }
    }
}
