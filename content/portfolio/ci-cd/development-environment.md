---
title: "Development environment configuration"
date: 2021-01-17T00:00:00Z
hero: projects/ci-cd/gradle-hero.png
banner: no_image.jpg
level: 0
order: 10
home: false
draft: false
---
## Docker
In the beginning of the project the application was running on each developer machine, but with the progress being made and needing to implement a database (and knowing the ultimate result will be running the application inside Docker), the team decided to move the development environment to Docker. A Dockerfile was written to run the application on a Tomcat server inside a Docker container. This container will also be the one used when the application is moved to production. Since this was development environment, was created also a docker compose file with the details for the database creation and application execution at the same time.
## Gradle
Gradle is a tool designed to be used on Java ecosystem projects helping managing dependencies, and execute some repetitive tasks, such as generating diagrams or documentation.
Initially the tasks built on Gradle was just to run unit tests and generate Javadoc and some diagrams for Javadoc, but latter on some tasks were implemented to run integration and interface tests and to run the application using Docker and Docker Compose.
Some examples of those tasks can be seen bellow

### Run application inside Docker
Was created a task to run the docker container, and one to delete the older containers. The run application task depends on task named `deleteContainers`. This task has no code inside it and exists only to aggregate all delete tasks that exists. This way, if in the future is needed to delete other containers or other things, we can simply update the dependencies of this task to avoid changing the configuration for the main task.
```groovy
// Delete Application Container
task deleteAppContainer(type: Exec) {
    commandLine 'docker', 'container', 'rm', '-f', 'cms_students_app'
}

// Delete Database Container
task deleteDBContainer(type: Exec) {
    commandLine 'docker', 'container', 'rm', '-f', 'odsoft_db'
}

// Meta-task used only to aggregate all delete tasks
task deleteContainers() {}
deleteContainers.dependsOn(deleteAppContainer,deleteDBContainer)

// Run the application inside Docker
task cmsRun(type: Exec) {
    commandLine 'docker-compose', 'up', '--build'
}
cmsRun.dependsOn(deleteContainers,clean,war)
```

### Run Selenium tests
One of the tools used for interface testing was Selenium.
```groovy
task selenium() {
    dependsOn assemble, compileTestJava
    doLast {
        javaexec {
            main = "cucumber.api.cli.Main"
            classpath = configurations.cucumberRuntime + sourceSets.main.output + sourceSets.test.output
            args = ['--plugin', 'pretty', '--glue', 'gradle.selenium', 'src/test/resources/gradle/selenium']
            systemProperties = ['Headless': 'true' ]
        }
    }
}


task seleniumTest(type: Test) {
    filter {
        //include all tests from package
        includeTestsMatching "gradle.selenium.*"
    }
}
```
