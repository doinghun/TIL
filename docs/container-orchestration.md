---
id: container-orchestration
title: Container Orchestration Techniques 
---

## Docker Swarm

### What is a Docker Swarm?

Docker swarm is a container orchestration tool, meaning that it allows the user to manage multiple containers deployed across multiple host machines.

- A Docker Swarm is a group of either physical or virtual machines that are running the Docker application and that have been configured to join together in a cluster. 
- Once a group of machines have been clustered together, you can still run the Docker commands that you're used to, but they will now be carried out by the machines in your cluster. 
- The activities of the cluster are controlled by a swarm manager, and machines that have joined the cluster are referred to as nodes.


### What are Docker Swarm Nodes?
A docker swarm is comprised of a group of physical or virtual machines operating in a cluster. When a machine joins the cluster, it becomes a node in that swarm. The docker swarm function recognizes three different types of nodes, each with a different role within the docker swarm ecosystem:

#### Manager Node
The primary function of manager nodes is to assign tasks to worker nodes in the swarm. Manager nodes also help to carry out some of the managerial tasks needed to operate the swarm. Docker recommends a maximum of seven manager nodes for a swarm.

#### Leader Node
When a cluster is established, the Raft consensus algorithm is used to assign one of them as the "leader node". The leader node makes all of the swarm management and task orchestration decisions for the swarm. If the leader node becomes unavailable due to an outage or failure, a new leader node can be elected using the Raft consensus algorithm.

#### Worker Node
In a docker swarm with numerous hosts, each worker node functions by receiving and executing the tasks that are allocated to it by manager nodes. By default, all manager modes are also worker nodes and are capable of executing tasks when they have the resources available to do so.

### Benefits of Running a Docker Swarm

1. Leverage the Power of Containers
    - Containers allow developers to deploy applications or services in self-contained virtual environments, a task that was previous the domain of virtual machines. 
    - Containers are proving a more lightweight version of virtual machines, as their architecture allows them to make more efficient use of computing power.

2. Docker Swarm Helps Guarantee High Service Availability
    - In order to function, a docker swarm must have a swarm manager that can assign tasks to worker nodes. 
    - By implementing multiple managers, developers ensure that the system can continue to function even if one of the manager nodes fails. 
    - Docker recommends a maximum of seven manager nodes for each cluster.

3. Automated Load-Balancing
    - Docker swarm schedules tasks using a variety of methodologies to ensure that there are enough resources available for all of the containers.
    - Through a process that can be described as automated load balancing, the swarm manager ensures that container workloads are assigned to run on the most appropriate host for optimal efficiency.

## Kubernetes (TBC)

----
Source:
- [Docker Swarm](https://www.sumologic.com/glossary/docker-swarm/)