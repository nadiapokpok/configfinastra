# Welcome widget

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.0.0 via the command :
```
ng generate lib welcome

# or

ng g lib welcome
```

## How to
### Inside extension

- In `tsconfig.lib.json` remove `types`array in the compiler options
```
{
  "compilerOptions": {
    ...
    "types": []
  }
}
```

- In `welcome.module.ts` under `src/lib`, add the following :
```
import { UXP_ENTRY_COMPONENT } from '@uxp/framework';

@NgModule({
    // ....
    providers: [
        { provide: UXP_ENTRY_COMPONENT, useValue: WelcomeComponent }
    ]
})
```

> In the `useValue`, specify the component you want to be displayed.

- In `package.json`, add the following :
```
"displayName": "Welcome",
"keywords": [
  "uxp-extension"
],
"icon": "src/icon.svg",
"uxp": {
  "moduleName": "WelcomeModule",
  "componentName": "WelcomeComponent",
  "component" : {
    "in": [],
    "out": []
  }
},
```

- Build your extension with `ng b welcome`

### Inside app

- Simply build your demo app with `ng b` 😉

<br>

## Special uses cases

### Components configuration

To define which angular component is going to be displayed for your UXP components configuration, you need to define the following provider in your component's module :

```
{ provide: UXP_ENTRY_CONFIGURATION_COMPONENT, useValue: WelcomeConfigurationComponent }
```
