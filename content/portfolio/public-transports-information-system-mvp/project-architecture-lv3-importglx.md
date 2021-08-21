---
title: "ImportGLX"
date: 2021-01-17T00:00:00Z
hero: projects/public-transports-information-system-mvp/hero.jpg
banner: projects/public-transports-information-system-mvp/banner.jpg
level: 2
order: 28
home: false
draft: false
---
The ImportGLX API is also built on a layered architecture. The request contains the GLX file. It will be process in the controller and transformed on DTO for the service. Since this API is not a Business API but translation service, the domain layer does not exists and the Service provided the information immediately for the repository.
## Logical View
![Diagrama de Nível 3](/images/projects/public-transports-information-system-mvp/diagrams/N3-PROC-GLX.jpg)
## Process View
![Diagrama de Nível 3](/images/projects/public-transports-information-system-mvp/diagrams/N3-SSD-GLX.jpg)
## Implementation View
![Diagrama de Nível 3](/images/projects/public-transports-information-system-mvp/diagrams/N3-IMP-GLX.jpg)