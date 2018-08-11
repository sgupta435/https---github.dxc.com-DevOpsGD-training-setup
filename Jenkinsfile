pipeline {

    agent any

    stages {

       stage('Clear Workspace') {
            steps {
                echo 'Clear Workspace'
                deleteDir()
            }
        }

        stage('Checkout') {
            steps {
                echo 'Checkout'
                checkout scm
            }
        }
	
	stage('compressing files') {
            steps {
                script {
		sh '''
                    tar -cvf EzyBuy.tar .
					
		'''
                     
                }            
            }
        }
	
	stage('Creating tar') {
            steps {
                script {						
                    sh '''
                        git tag ${BUILD_NUMBER}
			git push origin ${BUILD_NUMBER}
                        '''
                }            
            }
        }
	 stage('Automated Tests') {
	input {
                message "Should we continue?"
                ok "y"
                submitter "admin"
                parameters {
                    string(name: 'INPUT', defaultValue: 'y', description: 'Should we continue?')
                }
            }
                      
        stage('Next Stage') {
            steps {
                ansiblePlaybook becomeUser: null, credentialsId: 'jenkins-ssh-key', disableHostKeyChecking: true, inventory: 'hosts', playbook: 'Ansible-playbook.yml', sudoUser: null            
            }
        }		
         
    }
 }
