---
sidebar_position: 2
---

# Returning to Your Code

## Get Situated
Open VS Code with a linux terminal and file Explorer. Make sure your terminal's current working directory is where your Dockerfile, docker-compose.yml, and src/ folder were stored. In my case, it was one level down from my home directory (~):
```bash
cd ~/hfesworkshop/
```
If you don't know whether Docker is running, use:
```bash
docker ps
```
## Stand Up Your Container and Jump In
The semicolon allows us to run multiple commands sequentially.
```bash
docker-compose up -d; docker exec node-development-service bash
```
## Navigate to Your Code and Start Serving It
You should be inside your container, at a new command prompt.
```bash
cd src/my-website; yarn start --host 0.0.0.0 bash
```
## View It in Your Browser
Go to [http://localhost](http://localhost). Use [Meta's documentation](https://docusaurus.io/docs/category/guides) and Google to edit to your satisfaction.

## Cleaning Up
Use **Ctrl-C** in the terminal to stop the server. Then leave the container:
```bash
exit
```
Finally, tear down your services:
```bash
docker-compose down
```
Optionally:
```bash
docker system prune -f
```