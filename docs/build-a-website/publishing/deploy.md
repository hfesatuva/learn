

# Deployment
## GitHub Pages
## Use Meta's Deployment Script
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