"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[2232],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=u(n),m=o,h=d["".concat(l,".").concat(m)]||d[m]||p[m]||r;return n?a.createElement(h,s(s({ref:t},c),{},{components:n})):a.createElement(h,s({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,s=new Array(r);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var u=2;u<r;u++)s[u]=n[u];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7659:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return p}});var a=n(7462),o=n(3366),r=(n(7294),n(3905)),s=["components"],i={sidebar_position:1},l="First Time",u={unversionedId:"build-a-website/generating-a-website/first-time",id:"build-a-website/generating-a-website/first-time",title:"First Time",description:"One Last Setup Step",source:"@site/docs/build-a-website/generating-a-website/first-time.md",sourceDirName:"build-a-website/generating-a-website",slug:"/build-a-website/generating-a-website/first-time",permalink:"/docs/build-a-website/generating-a-website/first-time",draft:!1,editUrl:"https://github.com/hfesatuva/resources/tree/master/docs/build-a-website/generating-a-website/first-time.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Generating a Website",permalink:"/docs/category/generating-a-website"},next:{title:"Returning to Your Code",permalink:"/docs/build-a-website/generating-a-website/return-to-code"}},c={},p=[{value:"One Last Setup Step",id:"one-last-setup-step",level:2},{value:"Make Sure You are Ready",id:"make-sure-you-are-ready",level:2},{value:"Developing Inside a Docker Container",id:"developing-inside-a-docker-container",level:2},{value:"Editing Your Site",id:"editing-your-site",level:2},{value:"Cleaning Up",id:"cleaning-up",level:2}],d={toc:p};function m(e){var t=e.components,n=(0,o.Z)(e,s);return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"first-time"},"First Time"),(0,r.kt)("h2",{id:"one-last-setup-step"},"One Last Setup Step"),(0,r.kt)("p",null,"Follow the instructions for your computer type to install ",(0,r.kt)("a",{parentName:"p",href:"https://docs.docker.com/compose/install/"},"Docker Compose"),". This saves you long confusing commands later on."),(0,r.kt)("h2",{id:"make-sure-you-are-ready"},"Make Sure You are Ready"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Steps for either ",(0,r.kt)("a",{parentName:"p",href:"../prepare-your-computer/windows"},"Windows")," or ",(0,r.kt)("a",{parentName:"p",href:"../prepare-your-computer/unix"},"Linux/Mac")," should be complete. You should have Docker working and VS Code installed.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Get VS Code open and ready."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Mac/Linux"),": ",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"option bar -> Terminal -> New Terminal"),(0,r.kt)("li",{parentName:"ul"},"option bar -> File -> Open Folder -> pick a folder"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Windows"),": see the end of the ",(0,r.kt)("a",{parentName:"li",href:"../prepare-your-computer/windows#verifying-the-setup"},"Windows setup")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Docker should be running and working properly. Check this with the following command to check docker's processes (ps). You should see an empty table."))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker ps\n")),(0,r.kt)("h2",{id:"developing-inside-a-docker-container"},"Developing Inside a Docker Container"),(0,r.kt)("p",null,"Chance directory (cd) to any path you want your code to live. If your home directory (/username/home/, aka ~) or the folder you selected above is fine, this command is optional. This assumes I have a folder called hfesworkshop in my current working directory:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cd hfesworkshop\n")),(0,r.kt)("p",null,"If you are not sure where you are, print the working directory (pwd):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"pwd\n")),(0,r.kt)("p",null,"Make (mk) a directory (dir) called 'src' where you are right now (a directory known as \".\" to save you typing):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir ./src\n")),(0,r.kt)("p",null,'Use the refresh button in your file "Explorer" on the left. If you click down to where you put it, you should find your folder (mine is hfesworkshop and now just contains the src folder).'),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Useless fact"),': "src" is common naming practice for folders containing "source" code. The code people write that is then interpreted or compiled into something a computer can understand.'),(0,r.kt)("p",null,'Right click hfesworkshop (your folder) and make a new file called "Dockerfile". Make a few more called "docker-compose.yml", auth.sh, gitfile, and shorthand.sh.'),(0,r.kt)("p",null,"Click on docker-compose.yml and use the following template. This will be discussed in the synchronous workshop:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="~/hfesworkshop/docker-compose.yml"',title:'"~/hfesworkshop/docker-compose.yml"'},"version: '3'\nservices:\n  dev-service:\n    container_name: node-development-container\n    build: .\n    tty: true\n    ports:\n    - \"80:3000\"\n    image: node-development-image\n    volumes:\n    - ./src:/home/node/src\n    - ./gitfile:/home/node/.gitconfig\n    - ./auth.sh:/home/node/auth\n    - ./secrets:/home/node/.ssh\n\n")),(0,r.kt)("p",null,"Click on Dockerfile and use the following template."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="~/hfesworkshop/Dockerfile"',title:'"~/hfesworkshop/Dockerfile"'},"FROM node:slim\nRUN apt update -y\nRUN apt install git -y\nUSER node\nENV HOME /home/node\nWORKDIR $HOME\n")),(0,r.kt)("p",null,"Use the following templates for the other files."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="~/hfesworkshop/auth.sh"',title:'"~/hfesworkshop/auth.sh"'},"#! /bin/bash\neval `ssh-agent -s`;\nssh-add $1;\nssh -T git@github.com;\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-git",metastring:'title="~/hfesworkshop/gitfile"',title:'"~/hfesworkshop/gitfile"'},"[user]\n    name = Docker Developer, Insert Name Optionally\n    email = youremail@provider.com\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="~/hfesworkshop/shorthand.sh"',title:'"~/hfesworkshop/shorthand.sh"'},'#! /bin/bash\n\nalias c=clear;\nalias dcUp="docker-compose up -d";\nalias dcDown="docker-compose down";\nalias dPrune="docker system prune --force";\nalias dcKill="docker-compose kill";\nalias dcRestart="dcDown; dcUp; dcIn $1;";\n\ndcIn() { docker-compose exec $1-service bash; };\n\necho "Shorthands Added!";\n')),(0,r.kt)("p",null,"Before moving on, you will need to turn your ",(0,r.kt)("inlineCode",{parentName:"p"},".sh")," shell script files into runnable programs. Do this with the following command that changes the mode (chmod) using the code 700 that means give me read, write, and execute permissions, but give anyone else no permissions:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"chmod 700 ./*.sh\n")),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"If you want to use the shorthands (after the ORs below), you will need to add them to your current shell session with this command:"),(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},". ./shorthand.sh\n")))),(0,r.kt)("p",null,'Now we will use docker-compose to "build" our special container we defined in the Dockerfile.'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker-compose build\n")),(0,r.kt)("p",null,'Then we will "stand up" (up) a.k.a start the container in detached (-d) mode (meaning it is running, but we are outside of it).'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker-compose up -d\n")),(0,r.kt)("p",null,"OR"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"dcUp\n")),(0,r.kt)("p",null,'Now that it is running, we will get inside of it by executing (exec) a program called bash (this is the program for the command line terminal itself) using the "service" we created in the docker-compose.yml file called "dev-service".'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker-compose exec dev-service bash\n")),(0,r.kt)("p",null,"OR "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"dcIn dev\n")),(0,r.kt)("p",null,"You have basically entered the metaverse.\n",(0,r.kt)("strong",{parentName:"p"},"Useless fact"),': Bash is just one of many programs for running text based "shells". It stands for Bourne Again Shell. Alternatives include zsh.\nYou\'ll know you are in if you list (ls) contents of your current working directory and see lots of standard folders.'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"ls\n")),(0,r.kt)("p",null,"Change directory (cd) into src, which is magically linked to your real computer:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cd src\n")),(0,r.kt)("p",null,"Now we are essentially following ",(0,r.kt)("a",{parentName:"p",href:"https://docusaurus.io/docs"},"Meta's guide about Docusaurus"),", but we are doing it inside a container. This command should get things set up, but it may take some time. Anything about permission denied errors means you need to go back and finish some setup steps. To change the name from my-website, use a different slug in the command."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npx create-docusaurus@latest my-website classic\n")),(0,r.kt)("p",null,"Go into the website's folder (directory)."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cd my-website\n")),(0,r.kt)("p",null,"To run the site in development mode, where you can see changes as you make them, use the yarn program to run a sript Meta wrote for you called start with an argument for host (the computer that tries to view the website a.k.a. you) of 0.0.0.0 which accepts any IP address.  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yarn start --host 0.0.0.0\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Useless fact"),": You don't need to know a ton about ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/IP_address"},"IP addresses")," for this workshop, but IP stands for Internet Protocol and it defines how computers use numbers to call each other."),(0,r.kt)("p",null,"Now use your web browser and go to the web address ",(0,r.kt)("a",{parentName:"p",href:"http://localhost"},"http://localhost"),". You may have to override your browser's security warning to see it."),(0,r.kt)("h2",{id:"editing-your-site"},"Editing Your Site"),(0,r.kt)("p",null,"You should be able to get live updates as you edit your code. Try changing something in a file and use Ctrl-S to save the file. For example, add some text in src/my-website/docs/intro.md and save.\nYou should see something like this in the terminal:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"\u2714 Client\n  Compiled successfully \n")),(0,r.kt)("p",null,"Click to your browser and use Ctrl-R to reload the page. Click on the Tutorial tab and you should see what you wrote."),(0,r.kt)("p",null,"Docusaurus has ",(0,r.kt)("a",{parentName:"p",href:"https://docusaurus.io/docs/category/guides"},"extensive documentation")," on customizations. We will touch on a few of these during the workshop."),(0,r.kt)("h2",{id:"cleaning-up"},"Cleaning Up"),(0,r.kt)("p",null,"Click on the the terminal so it is in focus. Use Ctrl-C to stop the development server. You should return to the command prompt. Use the exit command to leave the docker container bash session:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"exit\n")),(0,r.kt)("p",null,'Now you should be at your original command prompt. Use docker-compose to "tear down" your running container/service.'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker-compose down\n")),(0,r.kt)("p",null,'If you really want to get rid of "dangling images" that were used to set things up for you, you can force (-f) docker to prune its system:'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker system prune -f\n")),(0,r.kt)("p",null,"If you want to get back to your development environment, see ",(0,r.kt)("a",{parentName:"p",href:"return-to-code"},"Returing to Your Code"),"."))}m.isMDXComponent=!0}}]);