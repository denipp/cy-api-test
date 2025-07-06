pipeline {
    agent any

    environment {
        CYPRESS_CACHE_FOLDER = "D:\\testing\\cypress_cache"
    }

    stages {
        stage('Install dependencies') {
            steps {
                bat '''
                    cd /d D:\\testing\\cy-api-test
                    npm install
                    npx cypress install
                '''
            }
        }

        stage('Run Cypress tests') {
            steps {
                bat '''
                    cd /d D:\\testing\\cy-api-test
                    npx cypress run --reporter mochawesome --reporter-options reportDir=cypress/reports,overwrite=false,html=true,json=false
                '''
            }
        }

        stage('Publish Report') {
            steps {
                publishHTML(target: [
                    allowMissing: true,
                    alwaysLinkToLastBuild: true,
                    keepAll: true,
                    reportDir: 'D:\\testing\\cy-api-test\\cypress\\reports',
                    reportFiles: 'mochawesome.html',
                    reportName: 'Cypress HTML Report'
                ])
            }
        }
    }

    post {
        always {
            echo 'Pipeline selesai.'
        }
    }
}
