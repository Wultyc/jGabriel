---
title: "Network Master Data - RMD"
date: 2021-01-17T00:00:00Z
hero: projects/public-transports-information-system-mvp/hero.jpg
banner: projects/public-transports-information-system-mvp/banner.jpg
level: 2
order: 26
home: false
draft: false
---
The RMD API is built on a layered architecture. The HTTP request is received on the Controller layer that will convert the data into Data Transfer Object (DTO) and pass that object to the Service layer. This layer will pass it to the Domain layer to make the business validations and if its everything OK it is passed to the MongoDB database using the mongo schemas created for the effect
## Logical View
![Diagrama de Nível 3](/images/projects/public-transports-information-system-mvp/diagrams/N3-PROC-RMD.jpg)
## Process View
![Diagrama de Nível 3](/images/projects/public-transports-information-system-mvp/diagrams/N3-SSD-RMD.jpg)
## Implementation View
![Diagrama de Nível 3](/images/projects/public-transports-information-system-mvp/diagrams/N3-IMP-RMD.jpg)
