---
title: "Design Level 2"
date: 2021-01-17T00:00:00Z
hero: projects/public-transports-information-system-mvp/hero.jpg
banner: projects/public-transports-information-system-mvp/banner.jpg
level: 1
order: 23
home: false
draft: false
---
On level two, the system is described in more detail, explaining what are it major components (in our case the WebUI, and APIs).

The system is composed for the following services:
* WebUI, used by the final users and communicate directly with the APIs
* Planning is responsible for the auto tri planning based on data it receives. This module was no implemented
* Network Master Data (in Portuguese *Rede Master Data* or RMD), previously named Network API, responsible to keep and manage information about the network
* Trip Master Data (in Portuguese *Viagem Master Data* or VMD), previously named Trip API, responsible to keep and manage information about the trips
* ImportGLX,This module was not part of the original proposal, but with the intention of keeping clean and reusable interfaces, this API was made to be part of the import data strategy, responsible from reading the GLX file and convert it to HTTP request for 

### Logical View
No, in more detail, the system is explained by its own components.
![Diagrama de Nível 2](/images/projects/public-transports-information-system-mvp/diagrams/N2.jpg)

### Process View

##### Import Data file
This is the process of uploading a data file, also know as GLX file and 
![Diagrama de Nível 2](/images/projects/public-transports-information-system-mvp/diagrams/N2-SSD-GLX.jpg)

##### Creating a node
This is the process to list network all nodes from the application, creating a new node and listing one specific node
![Diagrama de Nível 2](/images/projects/public-transports-information-system-mvp/diagrams/N2-SSD-RMD.jpg)

##### Creating a driver
This is the process to list network all nodes from the application, creating a new node and listing one specific node
![Diagrama de Nível 2](/images/projects/public-transports-information-system-mvp/diagrams/N2-SSD-VMD.jpg)

### Implementation View
Each application as it's own dependencies due the role its playing on the system. From the next diagram it's possible to understand that the WebUI is the most dependent application and RMD is the least dependent.
![Diagrama de Nível 2](/images/projects/public-transports-information-system-mvp/diagrams/N2-IMP.jpg)

### Physical View
About the physical implementation of all these applications, they are hosted on a Kubernetes cluster and are accede via HTTP or HTTPS.
![Diagrama de Nível 1](/images/projects/public-transports-information-system-mvp/diagrams/N2-FIS.jpg)

