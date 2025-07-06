pipeline {
    agent any

    environment {
        CYPRESS_CACHE_FOLDER = "${WORKSPACE}/cypress_cache"
    }

    stages {
        stage('Install dependencies') {
            steps {
                bat '''
                    call npm install
                    call npx cypress install
                '''
            }
        }

        stage('Run Cypress') {
            steps {
                bat '''
                    call npx cypress run --reporter mochawesome --reporter-options reportDir=cypress/reports,overwrite=false,html=true,json=false
                '''
            }
        }

        stage('Publish Report') {
            steps {
                publishHTML(target: [
                    allowMissing: true,
                    alwaysLinkToLastBuild: true,
                    keepAll: true,
                    reportDir: 'cypress/reports',
                    reportFiles: 'mochawesome.html',
                    reportName: 'Cypress Test Report'
                ])
            }
        }
    }
}
