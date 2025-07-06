pipeline {
    agent any

    options {
        ansiColor('xterm')
    }

    stages {
        stage('Install') {
            steps {
                bat '''
                    chcp 65001
                    npm install
                    npx cypress install
                '''
            }
        }

        stage('Run Cypress') {
            steps {
                bat '''
                    chcp 65001
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
                    reportDir: 'cypress/reports',
                    reportFiles: 'mochawesome.html',
                    reportName: 'Cypress Test Report'
                ])
            }
        }
    }
}
