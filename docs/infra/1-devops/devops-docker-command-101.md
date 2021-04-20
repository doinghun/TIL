---
slug: 'devops-docker-command-101' 
title: Docker Command 101
---

# Docker commands for Beginners 101

See all running & stopped containers

```
docker ps -a
```

## Starting new container

```
docker run
```

a combination of create & start

Example

```bash
docker run --name pg -p 5432:5432 -d postgres
```

- creates container
- named 'pg'
- on port 5432
- using postgres
- in [detached mode](https://www.freecodecamp.org/news/docker-detached-mode-explained/)

## Starting stopped container

```
docker start (container_name)
```

## Stop running container

```
docker stop (container_name)
```
