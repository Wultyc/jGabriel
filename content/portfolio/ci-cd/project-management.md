---
title: "Project management"
date: 2021-01-17T00:00:00Z
hero: projects/ci-cd/trello-hero.jpg
banner: no_image.jpg
level: 0
order: 30
home: false
draft: false
---
## Project Management
To manage what task, we have to do and who’s assigned to it, the team started using Bitbucket Issues. Bitbucket was the GIT service being used and made sense at the time to try to use this strategy.

![Bitbucket Issues]( /images/projects/ci-cd/pm-bitbucket-issues.png)

The integration between GIT and Issues was really useful and the team, started using closing Issues using commits. 

![Bitbucket Issues]( /images/projects/ci-cd/pm-bitbucket-issues-resolve-commit.png)

Although things became hard to track exactly what was the status of the project and the team decided to move to other approach, the Trello board.

![Bitbucket Issues]( /images/projects/ci-cd/pm-trello-board.png)

On Trello, besides the same ability to report and assign tasks to people, we created a Kanban board to have a global view of the project status. It also has some extra features for comments, reactions, task list and so on to help when defining tasks goals and keep track on progress.

![Bitbucket Issues]( /images/projects/ci-cd/pm-trello-board-task.png)

## Knowledge Management
Managing knowledge was also really important. Being a team, all members needed to know exactly what everyone was doing and how to do some activity. For this the team used markdown files such as `readme.md` and `configurations.md`. `readme.md` was used to keep a record on what was made in the project, something like a logbook. `configurations.md` kept information on how to configure, and what values to used on the configuration, so the team has an equivalent configuration on every machine. This was important specially because we didn’t have machine to use for Jenkins, application, or database host. We had to simulate this with how machines and needing to run all code in all machines, having the same configuration was crucial.
