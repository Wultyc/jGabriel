---
title: "Git and CI/CD"
date: 2021-01-17T00:00:00Z
hero: projects/public-transports-information-system-mvp/hero.jpg
banner: projects/public-transports-information-system-mvp/banner.jpg
level: 0
order: 30
home: false
draft: false
---
## GIT
The GIT repository for all application were the same. Even being on requirement for the project, this approach helped in the moment of making the CI/CD strategy.
Since the repository were the same, each application kept inside its own folder. The files needed for the Kubernets configuration and deployment were inside `Kubernetes` folder and the documentation were inside the ` Documentação ` folder
On the root of the repository, besides the folders mentioned until now, we only have the ` README.md` file for the repository presentation, the ` docker-compose.yml` file to be used during development and ` bitbucket-pipelines.yml` file containing all information for the pipeline.
```
.
├── Documentação
├── ImportGLX
├── Kubernets
├── README.md
├── RedeMasterData
├── ViagemMasterData
├── bitbucket-pipelines.yml
├── docker-compose.yml
└── viajantes2-spa
```

The branchs for this project were essentially:
* **master**: to keep the code in development
* **feature/…**: used to develop individual features for the applications
* **release**: code the is deployed to production
* **entregas**: used as checkpoint for each deliver made in the project

## CI/CD
The CI/CD for this project was built based on Bitbucket Pipelines for task automation and Docker Hub for artifact storage.
The project had two pipelines, the master and release. The master pipeline only ran the automated tests, and its intention was to verify if every commit in master worked. The release pipeline, besides the tests, were responsible to deploy the code on the Kubernetes cluster.
The pipeline was written on a way that steps could be easily added or removed from pipeline. To achieve this, each step was written individually, and the pipeline definition only refers for these steps. This also helped reuse tests steps between pipelines.
On the execution order, the team decided to run all the tests individually and after all the tests ran, the build of the docker images starts in parallel for each application. Ending this step, a sling deploy step starts. The decision behinds this approach was to only start building the applications if they’re ready to go together to production.
![Pipeline](/images/projects/public-transports-information-system-mvp/pipeline.jpg)
The deploy step had to have some special treatment because the native Kubernetes connecter from Bitbucket was not working. The solution was to install the Kubernetes cluster before the deployment. 
The templates for each application had a string `BUILD_NR` that were replaced in pipeline execution time to be applied.
```shell
sed -e "s|BUILD_NR|$BITBUCKET_BUILD_NUMBER|g" ./Kubernets/viagemmasterdata.yaml | kubectl apply -f -
```
Since we were not using a Kubernetes connector and the apply command always returns a success status if the process started successfully, was created a script to check for each container status to validate. 
