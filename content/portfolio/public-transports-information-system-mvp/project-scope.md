---
title: "Project scope"
date: 2021-01-17T00:00:00Z
hero: projects/public-transports-information-system-mvp/hero.jpg
banner: projects/public-transports-information-system-mvp/banner.jpg
level: 0
order: 10
home: false
draft: false
---
The project goal was to develop an information system for a fictional public transport company. This system needed to be made by a Web UI for collaborators usage and two API for company network and trips.
The Network API will be self-contained, and Trip API will have some IDs from Network API to be able to enrich its own data.
![General Project Architecture](/images/projects/public-transports-information-system-mvp/general-project-architecture.jpg)
The final shape for the project was:
* The Web UI made with Angular
* The Network API named RMD written in TypeScript
* The Trip API named VMD written in C#/.Net
* A third API, written in TypeScript, named ImportGLX to receive a data file and convert it into HTTP request for both Network API and Trip API.

Bellow it's a screenshot from one of the page of the SPA
![Project MockUp](/images/projects/public-transports-information-system-mvp/nodes.jpeg)
