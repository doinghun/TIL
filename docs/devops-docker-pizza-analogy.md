---
id: devops-docker-pizza-analogy
title: Docker explained in Pizza Baking Analogy
---

## Running Docker = Baking Pizza

![Types](/img/docker-illustration1.png)

### **Pizza Making Kit: Docker Image**

**Recipe: Dockerfile**
- Dockerfile is a file with instructions for how Docker should build your image.

**Ingredients: layers**

The ingredients are the layers. You’ve got crust, sauce, and cheese for this pizza.

- *crust*: basic ubuntu parent image (The bottom layer that gets built first) 
- *cheese*: installing an external library like NumPy (second layer to the pizza)
- *sauce / basil*: the code in a file that you wrote to run your app

![Types](/img/docker-illustration2.jpeg)

### **Oven: Docker Platform**

- The oven that bakes the pizza is like the Docker platform. 
- You installed the oven into your house when you moved in so you could make things with it.
-  Similarly, you installed Docker onto your computer so you could cook up containers.

**Oven Knob: `docker run image_name` command**

- You start your oven by turning a knob. The `docker run image_name` command is like your knob — it creates and starts your container.

**Cooked Pizza: Docker container**

**Eating Pizza: Using your app**

--- 
Source:
- [Learn Enough Docker To Be Useful](https://towardsdatascience.com/learn-enough-docker-to-be-useful-b7ba70caeb4b)