---
id: devops-docker-compose
title: Using Docker Compose
---

Compose is a tool for defining and running multi-container Docker applications.

Use a YAML file to configure your application’s services. Then, with a single command, you create and start all the services from your configuration.

Using Docker Compose

1. Define app's environment with `Dockerfile` so it can be reproduced anywhere
2. Define services that make up your app in `docker-compose.yml` so they can be run togther in an isolated env
3. Run `docker-compose up` and Compose starts and runs your entire app.