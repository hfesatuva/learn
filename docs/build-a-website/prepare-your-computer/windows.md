---
sidebar_position: 1
---

# Windows

Windows is trickier...

## Optional Preface
If you know much about the tools we are using, known as a "tech stack," you might be wondering why we are working so hard to use Docker. Docker allows us to run stripped down virtual machines with very specifically designed development environments. This means we can all have the same operating system and exactly the same software. This way, once we get the our development Docker container up and running, everything should work very similarly for everyone. There shouldn't be any bugs for you that wouldn't happen for me or anyone else. This also avoids us having to install anything on our computers except Docker. It's also what many of the pros are doing to streamline development.

## Words of Encouragement

The next section will look a little scary at first. You may hit some hiccups along the way, but I promise you will make it through! Be sure to read the linked guides carefully, Google any jargon you don't understand, and Google any errors you run into- I garauntee someone else has encountered this before.

## Prerequisite

Windows 10 or Windows 11

## Video Walkthrough

For written instructions, scroll down past these videos. These Have no audio, but show the setup process for Windows 11 requiring a WSL upgrade. 
:::note
If you are following along with the videos, restart your computer at the end of each video.
:::

### 0. Enabling Virtualization
:::info
This step is only required if you see "Disabled" [here during Video #1](https://youtu.be/Vco35UcW33M?t=14).
:::
<div class="video-container">
    <iframe class="video" src="https://www.youtube.com/embed/MtVK_bLnwvw" allowfullscreen></iframe>
</div>

### 1. Activating WSL
<div class="video-container">
    <iframe class="video" src="https://www.youtube.com/embed/Vco35UcW33M" allowfullscreen></iframe>
</div>

### 2. Upgrading WSL Kernel
<div class="video-container">
    <iframe class="video" src="https://www.youtube.com/embed/lGNs9mrkp1s" allowfullscreen></iframe>
</div>

### 3. Docker, VS Code, & Finalizing WSL
<div class="video-container">
    <iframe class="video" src="https://www.youtube.com/embed/z4ghZpx-myc" allowfullscreen></iframe>
</div>

### 4. WSL & Windows Sharing Docker
<div class="video-container">
    <iframe class="video" src="https://www.youtube.com/embed/nWx-1tDr568" allowfullscreen></iframe>
</div>

### 5. Verifying Docker
<div class="video-container">
    <iframe class="video" src="https://www.youtube.com/embed/Oocxq1PLfCQ" allowfullscreen></iframe>
</div>

## Text Walkthrough

1. Activate and set up [Windows Subsystem for Linux](https://docs.microsoft.com/en-us/windows/wsl/install) (hopefully WSL2 rather than WSL1)
    - **Note**: if you already have activated WSL and are using WSL1, you will need to [upgrade to WSL2](https://docs.microsoft.com/en-us/windows/wsl/install-manual#step-4---download-the-linux-kernel-update-package)
    - WSL is just the core of the computer system; it is not a full operating system
3. A WSL Linux distribution (the rest of the operating system) from the Microsoft Store such as [Ubuntu-20.04](https://apps.microsoft.com/store/detail/ubuntu-20044-lts/9MTTCL66CPXJ?hl=en-us&gl=US), which I will be using for demonstration 
4. Start the Ubuntu (or other distro) app on your computer. Create a username and password. You should see a command prompt. Type exit and hit enter. This should close the Window.
5. Install [Docker Desktop](https://www.docker.com/get-started/) for Windows
6. Ensure Docker is using WSL2 as its backend. [This guide](https://docs.docker.com/desktop/windows/wsl/) can help you set it up this way. **Don't forget to enable integration with your distribution of choice in Settings -> Resources**
7. Install [Visual Studio Code](https://code.visualstudio.com/), a perfect app for editing code and running command prompt terminals.
    - You should also add this genuine Microsoft extension for coding inside your WSL2 Distro: [Remote - WSL](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-wsl)

### Verifying the Setup:

Using Visual Studio Code (VS Code)...
- click the green box in the bottom right.
- select "New WSL Window using Distro..."
- select your distro
- open a terminal with option bar -> Terminal -> New Terminal 
- it should suggest "/(username you set)/home
- open your distro's "home directory" using option bar -> File -> Open Folder
- if you see a command prompt on the bottom and files and folders on the left, you are in good shape!



