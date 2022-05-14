---
sidebar_position: 3
---

# Deployment
## GitHub Pages

[GitHub Pages](https://pages.github.com/) is a great free way to publish front end websites on the internet. They even provide you a subdomain if you don't want to register your own. This was chosen over a DIY cloud solution, as it does not reqire entering payment info and monitoring free tier quotas. It is also much easier, and tied to a convenient way to manage your code- Git! Finally, it handles SSL encryption (the 's' in 'https'), so we don't have to.

## Basics of Git

Using git can be a bit confusing, even for advanced users. For this workshop, here is what is important to know:
- Git helps you save your code online and collaborate with others
- Code for a particular project lives in a Git "repository"
- You "clone" a git repository, work on the code, then "push" it up to the repository in the cloud or server
- One repository can have multiple "branches" like alternate universes where different code can exist
- GitHub is just one Git solution. Others include GitLab and BitBucket
- Git itself is free and opensource
- For hobbyists and small teams, GitHub is completely free and is commonly used among software developers

## What You Will Do with Git
- Make a public repository: anyone can see it, but only you can edit it
- Authenticate: Talk to GitHub and prove who you are
- Initialize a repo: make some code, track it using the git program
- Connect your local repo to your remote repo
- Add code: write new code and tell git it exists
- Commit code: gather it into batches on your local machine
- Push code: shoot your commits into the cloud
- Pull code: if anyone else makes changes, get them from the cloud

## Text Walkthrough

### Get Situated

Get into your development environment [ready to code](../generating-a-website/return-to-code.md#stand-up-your-container-and-jump-in). If you use the ```ls``` command you should see your ```auth``` script and your ```src``` folder. Remember, you are no longer on your computer, but inside the container.

### Create an SSH Key

Here you are going to create a public private keypair so you don't have to use tedious, unsafe passwords. You will use the ```ssh-keygen``` program with a comment (-C) containing your email, specifying the type (-t) of ed25519 (a good [encryption algorithm](https://ed25519.cr.yp.to/)) using the base file (-f) path of a name we choose inside the ```~/.ssh``` folder. Make sure to swap out the email with your GitHub associated email and give the key a name of your choice.

```bash
ssh-keygen -t ed25519 -C "email@example.com" -f ~/.ssh/name_of_your_choice
```

That command should create two files inside ```~/.ssh``` (which is a volume mapped to the ```secrets``` folder on your computer): ```name_of_your_choice```, the super secret private key which you should never share and ```name_of_your_choice.pub``` the public key you will give to GitHub.

Click on the public key in your file Explorer on the left in VS Code, e.g. ```name_of_your_choice.pub```, and copy the whole file ```Ctrl-A```, ```Ctrl-C```.

Next go to GitHub in your browser, click on your account bubble -> Settings -> SSH and GPG keys (under access), New SSH Key, give it any name, and paste the key in the big box:  ```Ctrl-V```.

Now our magic auth script can use that key for our current session to authenticate. Just run your auth script like this:
:::note
This command assumes that you are at the home directory, where you should land when you jump into the container, a.k.a "~"
:::

```bash
. ./auth .ssh/name_of_your_choice
```
:::important
Do not forget the "." at the beginning. There is a [reason](https://www.shell-tips.com/bash/source-dot-command/#gsc.tab=0) that is there, and it is not refering to your current working directory like you might expect.
:::

Now you are all ready to talk to GitHub. You know you succeeded if the command tells you that you are authenticated. 

Go to GitHub in the browser and choose + dropdown -> New repository. Give your repository a name. I suggest making it public, but you can choose to make it private. If "Add a README" is checked, uncheck it. Make sure there is no .gitignore template selected either, and create the repo. There should be nothing in it. GitHub should offer a way to refer to this remote repo that looks something like:

```
git@github.com:yourusername/reponame.git
```

You will need this soon.

### Create and Fill a Repository

Back at the command line, go into ```src/my-website``` (or whatever you called it):

```bash
cd ./src/my-website
```
Use the following commands to initialize a repo, add all your files to it, stage a commit, make a main branch, connect to the remote repo, and push the code:

```bash
git init
git add .
git commit -m "initial commit"
git branch -M main
git remote add origin git@github.com:(githubusername)/(reponame).git
git push -u origin main
```

### Let Meta Deploy to Pages

As default, your docusaurus.config.js should look something like this. If you try to deploy your site with Meta's provided deploy script, it will fail, because that script looks at the config to decide where to deploy your code. The defaults are facebook's docusaurus repo.

```javascript title=src/my-website/docusaurus.config.js
const config = {
  title: 'My Site',
  tagline: 'Dinosaurs are cool',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.
```

Among other settings that you may change while customizing your site, you will need to adjust a few items for deployment to work. If you not using a custom domain, it will need to look something like this:


```javascript title=src/my-website/docusaurus.config.js
const config = {
  title: 'My Site',
  tagline: 'Dinosaurs are cool',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/your-repository-name/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'your-github-username', // Usually your GitHub org/user name.
  projectName: 'your-repository-name', // Usually your repo name.
  // ...
```

If you run docusaurus's deploy script with these settings, it should successfully publish your website to [https://yourusername.github.io/test](https://yourusername.github.io/test). If not, troubleshoot before moving on. The script can be run with:

```bash
yarn deploy
```

Once you have a domain set up with the proper A records, you need to set the ```baseUrl``` as ```'/'``` instead of ```'/your-repository-name/'```. 

:::Note
The command above will do most of the work, but there is **one more step** after that is necessary before your domain will work. Even if you have the A records (and CNAME if you are using a subdomain), you need to tell GitHub what your domain for this repo is.
:::

You do this with a file called ```CNAME``` containing just your domain or subdomain:

```title=my-website/CNAME
subdomain.domain.tld
```
OR
```title=my-website/CNAME
domain.tld
```
You can set this three ways:
1. Go to GitHub in the browser -> the repository -> settings -> pages (under code and automation) -> Custom domain, enter and save
2. Go to the gh-pages branch of the repository and create the CNAME file manually
3. Follow the steps below to include setting CNAME in the deploy script

Unless you follow the steps below, you will have to reset the CNAME every time you run the deploy script to update your published site. 

## Coping Mechanism
:::caution

This is a Docusaurus script that is inside the ```node_modules``` folder, which your ```.gitignore``` file should tell GitHub not to upload to the remote repository. That means you only have this change happening in your local files. If you clone the repository and use ```yarn install``` to rebuild the ```node_modules```, you will have to make this change again!

:::
```javascript title=hfesworkshop/src/my-website/node_modules/@docusaurus/core/lib/commands/deploy.js
catch (err) {
    logger_1.default.error `Copying build assets from path=${fromPath} to path=${toPath} failed.`;
    throw err;
}
shellExecLog('git add --all');
```
to...

```javascript title=hfesworkshop/src/my-website/node_modules/@docusaurus/core/lib/commands/deploy.js

catch (err) {
    logger_1.default.error `Copying build assets from path=${fromPath} to path=${toPath} failed.`;
    throw err;
}
// Replace the url subdomain.domain.com with your domain
shellExecLog('echo subdomain.domain.com >> CNAME'); // added line
shellExecLog('git add --all');
```