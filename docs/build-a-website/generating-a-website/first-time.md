---
sidebar_position: 1
---

# First Time

## One Last Setup Step

Follow the instructions for your computer type to install [Docker Compose](https://docs.docker.com/compose/install/). This saves you long confusing commands later on.

## Make Sure You are Ready

- Steps for either [Windows](../prepare-your-computer/windows) or [Linux/Mac](../prepare-your-computer/unix) should be complete. You should have Docker working and VS Code installed.

- Get VS Code open and ready.
    - **Mac/Linux**: 
        - option bar -> Terminal -> New Terminal
        - option bar -> File -> Open Folder -> pick a folder
    - **Windows**: see the end of the [Windows setup](../prepare-your-computer/windows#verifying-the-setup)
- Docker should be running and working properly. Check this with the following command to check docker's processes (ps). You should see an empty table.
```bash
docker ps
```
## Developing Inside a Docker Container

Chance directory (cd) to any path you want your code to live. If your home directory (/username/home/, aka ~) or the folder you selected above is fine, this command is optional. This assumes I have a folder called hfesworkshop in my current working directory:
```bash
cd hfesworkshop
```
If you are not sure where you are, print the working directory (pwd):
```bash
pwd
```
Make (mk) a directory (dir) called 'src' where you are right now (a directory known as "." to save you typing):

```bash
mkdir ./src
```
Use the refresh button in your file "Explorer" on the left. If you click down to where you put it, you should find your folder (mine is hfesworkshop and now just contains the src folder).

**Useless fact**: "src" is common naming practice for folders containing "source" code. The code people write that is then interpreted or compiled into something a computer can understand.

Right click hfesworkshop (your folder) and make a new file called "Dockerfile". Make a few more called "docker-compose.yml", auth.sh, gitfile, and shorthand.sh.

Click on docker-compose.yml and use the following template. This will be discussed in the synchronous workshop:

```yaml title="~/hfesworkshop/docker-compose.yml"
version: '3'
services:
  dev-service:
    container_name: node-development-container
    build: .
    tty: true
    ports:
    - "80:3000"
    image: node-development-image
    volumes:
    - ./src:/home/node/src
    - ./gitfile:/home/node/.gitconfig
    - ./auth.sh:/home/node/auth
    - ./secrets:/home/node/.ssh

```
Click on Dockerfile and use the following template.

```yaml title="~/hfesworkshop/Dockerfile"
FROM node:slim
RUN apt update -y
RUN apt install git -y
USER node
ENV HOME /home/node
WORKDIR $HOME
```
Use the following templates for the other files.

```bash title="~/hfesworkshop/auth.sh"
#! /bin/bash
eval `ssh-agent -s`;
ssh-add $1;
ssh -T git@github.com;
```

```git title="~/hfesworkshop/gitfile"
[user]
    name = Docker Developer, Insert Name Optionally
    email = youremail@provider.com
```

```bash title="~/hfesworkshop/shorthand.sh"
#! /bin/bash

alias c=clear;
alias dcUp="docker-compose up -d";
alias dcDown="docker-compose down";
alias dPrune="docker system prune --force";
alias dcKill="docker-compose kill";
alias dcRestart="dcDown; dcUp; dcIn $1;";

dcIn() { docker-compose exec $1-service bash; };

echo "Shorthands Added!";
```

Before moving on, you will need to turn your ```.sh``` shell script files into runnable programs. Do this with the following command that changes the mode (chmod) using the code 700 that means give me read, write, and execute permissions, but give anyone else no permissions:

```bash
chmod 700 ./*.sh
```

:::note
If you want to use the shorthands (after the ORs below), you will need to add them to your current shell session with this command:
```bash
. ./shorthand.sh
```
:::


Now we will use docker-compose to "build" our special container we defined in the Dockerfile.
```bash
docker-compose build
```
Then we will "stand up" (up) a.k.a start the container in detached (-d) mode (meaning it is running, but we are outside of it).
```bash
docker-compose up -d
```
OR
```bash
dcUp
```
Now that it is running, we will get inside of it by executing (exec) a program called bash (this is the program for the command line terminal itself) using the "service" we created in the docker-compose.yml file called "dev-service".
```bash
docker-compose exec dev-service bash
```
OR 
```bash
dcIn dev
```
You have basically entered the metaverse.
**Useless fact**: Bash is just one of many programs for running text based "shells". It stands for Bourne Again Shell. Alternatives include zsh.
You'll know you are in if you list (ls) contents of your current working directory and see lots of standard folders.
```bash
ls
```
Change directory (cd) into src, which is magically linked to your real computer:
```bash
cd src
```
Now we are essentially following [Meta's guide about Docusaurus](https://docusaurus.io/docs), but we are doing it inside a container. This command should get things set up, but it may take some time. Anything about permission denied errors means you need to go back and finish some setup steps. To change the name from my-website, use a different slug in the command.
```bash
npx create-docusaurus@latest my-website classic
```
Go into the website's folder (directory).
```bash
cd my-website
```
To run the site in development mode, where you can see changes as you make them, use the yarn program to run a sript Meta wrote for you called start with an argument for host (the computer that tries to view the website a.k.a. you) of 0.0.0.0 which accepts any IP address.  

```bash
yarn start --host 0.0.0.0
```

**Useless fact**: You don't need to know a ton about [IP addresses](https://en.wikipedia.org/wiki/IP_address) for this workshop, but IP stands for Internet Protocol and it defines how computers use numbers to call each other.

Now use your web browser and go to the web address [http://localhost](http://localhost). You may have to override your browser's security warning to see it.

## Editing Your Site

You should be able to get live updates as you edit your code. Try changing something in a file and use Ctrl-S to save the file. For example, add some text in src/my-website/docs/intro.md and save.
You should see something like this in the terminal:
```bash
✔ Client
  Compiled successfully 
```
Click to your browser and use Ctrl-R to reload the page. Click on the Tutorial tab and you should see what you wrote.

Docusaurus has [extensive documentation](https://docusaurus.io/docs/category/guides) on customizations. We will touch on a few of these during the workshop.

## Cleaning Up
Click on the the terminal so it is in focus. Use Ctrl-C to stop the development server. You should return to the command prompt. Use the exit command to leave the docker container bash session:
```bash
exit
```
Now you should be at your original command prompt. Use docker-compose to "tear down" your running container/service.
```bash
docker-compose down
```
If you really want to get rid of "dangling images" that were used to set things up for you, you can force (-f) docker to prune its system:
```bash
docker system prune -f
```

If you want to get back to your development environment, see [Returing to Your Code](return-to-code).
