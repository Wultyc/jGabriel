---
title: "GIT organization"
date: 2021-01-17T00:00:00Z
hero: projects/ci-cd/git-hero.jpg
banner: no_image.jpg
level: 0
order: 20
home: false
draft: false
---
Git organization was something being improved since the first day on the subject. Organizing the team to have a full synchronized with separated environments. The team decided to make an adaptation Git Flow due the fact it has a clear distinction between environments (Develop and Production)

![Branching Model](/images/projects/ci-cd/branching-model.jpg)

Two main branches will exist: Master and Develop. From Develop, feature branches are created to develop specific features and then they are merged into Develop. After all tests made, the merge is made to Master and deployed to production.
In case something happens and its needed a fix in production, an hotfix branch is created from Master, the fix is made and the code is merged into Develop and Master.