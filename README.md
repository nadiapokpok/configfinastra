<a id="markdown-uxp-2-boilerplate" name="uxp-2-boilerplate"></a>
# UXP 2 Boilerplate

This repository serves as a reference for products wanting to build apps with UXP 2.0.

> In the future, custom schematics will be created, allowing you to create the same with the Angular CLI.

> This branch is referencing the Angular/AngularJS hybrid approach. For the full angular, visit this [branch](https://scm-git-eur.misys.global.ad/projects/MAFUI/repos/uxp2-boilerplate/browse?at=refs%2Fheads%2Ffull-angular)

<br/>

<!-- TOC insertAnchor:true -->

- [UXP 2 Boilerplate](#uxp-2-boilerplate)
    - [Build and launch](#build-and-launch)
    - [Example UXP extension : component](#example-uxp-extension--component)
    - [Package and publish your extensions](#package-and-publish-your-extensions)
    - [Deploy your application](#deploy-your-application)
    - [Server Launch alternatives](#server-launch-alternatives)
        - [Default](#default)
        - [dotenv](#dotenv)
        - [Docker](#docker)
    - [Use legacy components](#use-legacy-components)
        - [npm](#npm)
        - [Manually](#manually)
    - [Steps to do the same from scratch (for reference)](#steps-to-do-the-same-from-scratch-for-reference)

<!-- /TOC -->

<br/>

<a id="markdown-build-and-launch" name="build-and-launch"></a>
## Build and launch

First off, install all dependencies from npm via `npm i`.\
Then, since this repo contains a separate angular library (which is also a UXP extension), and the app relies on it; you need to build it before building the app

```
ng build welcome 
# Since our demo UXP extension is called welcome
```

Finally building your app is just like any other angular application :
```
ng build

# or shorter

ng b

# or with watch flag

ng b --watch
```

However `ng serve` will not help you much here, you need to serve your app through uxp's server, via `npm start` if you've changed the start script to target `uxp`'s binary.

<br/>

<a id="markdown-example-uxp-extension--component" name="example-uxp-extension--component"></a>
## Example UXP extension : component
In UXP 2.x, every addon is considered as an extension. 
Find the related doc [here](./projects/welcome/README.md) on how to create Angular Components and be able to drag and drop them in UXP from the component bar through the new extension system !

<br/>

<a id="markdown-package-and-publish-your-extensions" name="package-and-publish-your-extensions"></a>
## Package and publish your extensions
Once you are ready with your UXP extensions, the packaging and publishing process is the same as the one for Angular libraries, since ... it's just an angular library 😅

So simply run 
```
ng build [EXTENSION_NAME] [--prod] # use prod flag if you aim to publish
```

For publishing, we recommend launching the following command from root
```
npm publish dist/[EXTENSION_NAME]
```
Indeed, you only want to publish the output of the build to npm 💪

> Tools to automate this (launch build and publish for all UXP extensions) are currently being created, this README will get updated once it is available

<br/>

<a id="markdown-deploy-your-application" name="deploy-your-application"></a>
## Deploy your application

Deploying your application to production is as easy as 1-2-3.

Once all your extensions are built, build your main application with the `prod` flag as well.\
Then place the following on your server :
- `dist`
- `conf.json`
- `package.json`

(or everything if you're lazy 😆)

Finally in a terminal :
```
npm i
npm start
```

And voila 🙃 !

<br/>

<a id="markdown-server-launch-alternatives" name="server-launch-alternatives"></a>
## Server Launch alternatives

<a id="markdown-default" name="default"></a>
### Default
By default, you want to launch the server via 
```
npm start
```
As you can see from the scripts, it will launch the `uxp` binary and pass it the [conf.js](./conf.js) as configuration.

<a id="markdown-dotenv" name="dotenv"></a>
### dotenv
Alternatively, we added a second script called `start:env`
```
npm run start:env
```
This script will use `dotenv` and provide environment variables from a [.env](./.env) file into `process.env`

<a id="markdown-docker" name="docker"></a>
### Docker
A Dockerfile has also been added to this repo, allowing you to build and publish your app. (Be sure to add build steps for your newly created extensions if you have any).

A `docker-compose` file was also created, that relies on the local Dockerfile and the same `.env` file mentionned above so that your container has the same environment variables upon building app.

<br/>

<a id="markdown-use-legacy-components" name="use-legacy-components"></a>
## Use legacy components

Since the boilerplate is hybrid by default, you can of course use legacy components.
Providing them to UXP is the same as in 1.x, through npm or by adding them manually

<a id="markdown-npm" name="npm"></a>
### npm

Install the legacy components you want, i.e :
```
npm i @uxp/button @uxp/card @uxp/dx-table
```

Add a postinstall script to your package and run it
```
"postinstall": "npm2mb-pkg",
```
```
npm run postinstall
```

Finally, add a reference to the addons folder that was generated in your main [mb-package](./mb-package.json)

```
"packages": [
  "addons"
]
```

... and your [configuration file](./conf.json)
```
"addOnPath": "./addons"
```

<a id="markdown-manually" name="manually"></a>
### Manually

Provide the code to your components inside a folder, say `addons`
Then, add a reference to the addons folder that was generated in your main [mb-package](./mb-package.json)

```
"packages": [
  "addons"
]
```
... and your [configuration file](./conf.json)
```
"addOnPath": "./addons"
```

<br/>

<a id="markdown-steps-to-do-the-same-from-scratch-for-reference" name="steps-to-do-the-same-from-scratch-for-reference"></a>
## Steps to do the same from scratch (for reference)

> ⚠️ All steps below will be synthesized into an angular schematics such as `ng add @uxp/framework`

- Generate a new app with the angular CLI (version 7.x)
```
ng new demo
```
Answer no to the `router` question and `sass` to the second question.

- Into the demo folder, launch the following :
```
npm i @types/angular@1.6.3 @ngx-translate/core@11.0.1 @angular/upgrade@^7.1.0 @ngrx/effects@^7.1.0 @ngrx/entity@^7.1.0 @ngrx/store@^7.1.0 @ngrx/store-devtools@^7.1.0 @angular/material@^7.1.0 @angular/cdk@^7.1.0 file-saver@1.3.8 string-template@1.0.0 md5-hex@2.0.0 robust-websocket@0.3.0 hammerjs@2.0.8 jszip@2.6.0 jquery@2.1.4 lodash@4.17.11 @uxg/angular-theme@0.10.5 material-design-icons@3.0.1 angular@1.5.7 angular-animate@1.5.7 angular-translate@2.18.1 angular-messages@1.5.7 angular-aria@1.5.7 angular-cookies@1.5.7 angular-filter@0.5.4 angular-material@1.1.10 angular-touch@1.5.7 oclazyload@1.1.0 @uxp/app-events@2.0.0-M4 @uxp/data-sources-setting@2.0.0-M4 @uxp/devkit@2.0.0-M4 @uxp/framework@2.0.0-M4 @uxp/global-setting@2.0.0-M4 @uxp/hybrid-app@2.0.0-M4 @uxp/link-editor@2.0.0-M4 @uxp/link-editor-app@2.0.0-M4 @uxp/server@2.0.0-M4 @uxp/setting@2.0.0-M4
```

- In `demo/package.json`, change the start script to :
`uxp -c conf.json`

- At the root of `demo`, **create** a conf.json file with the following :
```
{
  "appName" : "demo-app",
  "port" : 3002,
  "client": "./",
  "target": "dist/demo"
}
```

- In `demo/angular.json`, **add** the following:

```
{
  ...
  "projects": {
    "demo": {
      ...
      "architect": {
        "build": {
          "options": {
            ...
            "uxpExtensionDirs": [
              "node_modules/@uxp/*",
              "projects/**/*"
            ],
            "outputPath": "dist/demo",
            "index": "src/index.html",
            "main": "src/main.ts",
            "polyfills": "src/polyfills.ts",
            "tsConfig": "src/tsconfig.app.json",
            "assets": [
              "src/assets"
            ],
            "styles": [
              "src/styles.scss",
              "node_modules/angular-material/angular-material.min.css"
            ],
            "scripts": [
              "node_modules/jquery/dist/jquery.js",
              "node_modules/angular/angular.js",
              "node_modules/oclazyload/dist/ocLazyLoad.js",
              "node_modules/angular-translate/dist/angular-translate.js",
              "node_modules/angular-animate/angular-animate.js",
              "node_modules/angular-cookies/angular-cookies.js",
              "node_modules/angular-filter/dist/angular-filter.js",
              "node_modules/angular-touch/angular-touch.js",
              "node_modules/angular-aria/angular-aria.js",
              "node_modules/angular-messages/angular-messages.js",
              "node_modules/angular-material/angular-material.js"
            ]
```

- In your `index.html` under `demo/src`, **add** the following :

```
# Inside the <body> tag
<uxp-app></uxp-app>
```

- In your `main.ts` under `demo/src`, **replace all** with the following :
```
import { enableProdMode, StaticProvider } from '@angular/core';
import { environment } from './environments/environment';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { downgradeModule } from '@angular/upgrade/static';
import { doBootstrapHybrid } from '@uxp/hybrid-app';

import { AppModule } from './app/app.module';

if (environment.production) {
  enableProdMode();
}

const bootstrapFn = (extraProviders: StaticProvider[]) => {
  return platformBrowserDynamic(extraProviders).bootstrapModule(AppModule);
};

const downgradedBootstrapModule = downgradeModule(bootstrapFn);

doBootstrapHybrid(downgradedBootstrapModule);
```

- In your `styles.scss` under `demo/src`, **add** the following:
```
@import '~@uxp/framework/themes/_framework-theme.scss';

@include uxp-theme($uxg-light-theme);
```

- In your `tsconfig.app.json` under `demo/src`, **remove** the following:
```
"types": []
```

- In your `app.module.ts` under `demo/src/app`, **replace all** with the following :
```
import { NgModule } from '@angular/core';
import { UxpAppModule } from '@uxp/framework';

@NgModule({
  imports: [UxpAppModule.mainHybridApplication()],
  exports: [],
  declarations: [],
  providers: [],
  entryComponents: [],
  bootstrap: []
})
export class AppModule {
  ngDoBootstrap() {}
}
```
- Copy the fonts present in this repository to yours, under `src/assets/fonts`