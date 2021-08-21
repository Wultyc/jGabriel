---
title: "Jenkins set-up"
date: 2021-01-17T00:00:00Z
hero: projects/ci-cd/hero.png
banner: no_image.jpg
level: 0
order: 40
home: false
draft: false
---
Our CI/CD pipeline was built on a Jenkins server. This pipeline takes all steps to release code for an environment.

The general format of the pipeline is shown below. Most task are run sequentially, but testing phases run in parallel to improve speed. At the end of the project, the full pipeline took about 10 minutes to run, being most of the time spent on tests.
![Project Pipeline]( /images/projects/ci-cd/project-pipeline.jpg)

## Pipeline for different environments
The team thought that having the same pipeline for both environments could be had to manage if some change was needed to be made on the pipeline. So, we decided to have two different jobs, pointing to the same repo and same Jenkinsfile, but in different branches. This way, the pipeline that will run in production will be exactly the same that ran in Development.

This pipeline although have some special features, one of them the ability to disable steps in dev. In a scenario that we are testing the pipeline itself, having a fast pipeline is important to avoid wasting time. For this reason, on the top of the pipeline some properties were defined

```groovy
def isProd = findIfItsProd(scm.branches[0].name)

//enable steps in dev
def enable_cq_checkstyle = true
def enable_cq_findbugs = true
def enable_test_unit = true
def enable_test_intg = false
def enable_test_pitm = false
def enable_test_acc_selenium = false
def enable_send_email = false
def enable_generate_pdf_and_zip = true
```

Those properties were used in the step they are related to indicate if the step should or should not be executed. Even though if someone forgot to revert these changes in Develop before merging to Master, it could cause the step to not run-in production. For this reason, was created a function that will evaluate if the step should run, not only based on the property but also on the environment.

```groovy
def isToRunStage(boolean isProd, boolean runFlag) {
    return isProd || runFlag
}
```

On the specific stage, the function is called and it received the value of `isProd` property and the specific `enable_`
```groovy
stage('Check Code Quality') {
    failFast true
    parallel {
        stage('FindBugs + HTMLReport') {
            when {
                expression {
                    isToRunStage(isProd, enable_cq_findbugs)
                }
            }
            steps {
            ...
            }
        }
```

## Build identification
Every time the pipeline ran, the pipeline will push to the Git server a tag informing the success or not. For this, was used the post actions. In case of success a tag in the format `Success-${tag}-${GIT_USERNAME}` was sent to the Git server. In case of failure, the success was replaced by `Failed` and an email is sent to inform the whole team that a job is failing.
```groovy
    success {
        withCredentials([usernamePassword(credentialsId: gitCred, passwordVariable: 'GIT_PASSWORD', usernameVariable: 'GIT_USERNAME')]) {
            sendTagToBitbucket(gitCred, gitRepo, "Success-${tag}-${GIT_USERNAME}");
        }
    }
    failure {
        withCredentials([usernamePassword(credentialsId: gitCred, passwordVariable: 'GIT_PASSWORD', usernameVariable: 'GIT_USERNAME')]) {
            sendTagToBitbucket(gitCred, gitRepo, "Failed-${tag}-${GIT_USERNAME}");
        }

        mail to: emailRecipient,
                subject: "Job '${env.JOB_NAME}' (${env.BUILD_NUMBER}) failled",
                body: "The job '${env.JOB_NAME}' failled. Please go to ${env.BUILD_URL}. to for more details."
    }
}
```

![Project Pipeline]( /images/projects/ci-cd/jenkins-job-failing-email.jpg)
