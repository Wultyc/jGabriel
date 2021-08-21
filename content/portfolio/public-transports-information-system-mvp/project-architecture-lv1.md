---
title: "Design Level 1"
date: 2021-01-17T00:00:00Z
hero: projects/public-transports-information-system-mvp/hero.jpg
banner: projects/public-transports-information-system-mvp/banner.jpg
level: 1
order: 22
home: false
draft: false
---
On level one it’s represented, on the very high level how the system is supposed to interact with the exterior and how their used cases should behave.

### Logical View
The system has a file system (which will receive the data file) and will be used for three different types of users, with different rolls and permissions.
> Note 1: On this diagram, databased were considered as part of each component of the system and for that reason are not represented in this diagram

> Note 2: Due the fact that this signature was the aggregation of four and the team was only assigned to one (system architecture), some parts represented on the diagrams were not implemented such as the multiple user UIs, authentication, and so on
![Diagrama de Nível 1](/images/projects/public-transports-information-system-mvp/diagrams/N1.jpg)

### Process View

##### Import Data file
This is the process of uploading a data file, also known as GLX file and 
![Diagrama de Nível 1](/images/projects/public-transports-information-system-mvp/diagrams/N1-SSD-GLX.jpg)

##### Listing network nodes, creating nodes and listing one specific node
This is the process to list network all nodes from the application, creating a new node and listing one specific node
![Diagrama de Nível 1](/images/projects/public-transports-information-system-mvp/diagrams/N1-SSD-ReadWrite.jpg)
