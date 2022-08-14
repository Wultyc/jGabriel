---
title: "Project overview"
date: 2022-07-31T00:00:00Z
hero: projects/airport-simulator/hero.png
banner: no_image.jpg
level: 0
order: 10
home: false
draft: true
---
The project was built on C# and DotNet 6 (current version of DotNet Core at the time). It was built with the mindset of having a decoupled application using interfaces all around to avoid having the engine coupled to specific implementations.

The application had four main components
* Simulation Engine: responsible to run the loop and trigger all events
* Simulation Report: store the data for each cycle
* Simulation Environment: all the information of the simulations including:
    * Events
    * Servers
    * Clients
    * Queues
    * Time instants
* Adapters: all the connections with external systems. In this project they were mocked, but the project was built with the possibility of connecting with external systems to retrieve some data

It is a console application and the output was putted directly on the user console and on a CSV file. The inputs were passed to the application using a configuration file, making easy to switch options between executions

The application is built in a way that there's a loop while there's events to process. When the simulation is fired, the first event (first person arrive event) is scheduled by the engined but then the other events will schedule the other ones. Engine is also able to schedule more arrive events to reach an arrive rate the user wants.

Each loop cycle all events schedule for that specific time are triggered and the simulation environments changes accordingly. At the end of each cycle, a snapshot is created to store all relevant information about the execution.