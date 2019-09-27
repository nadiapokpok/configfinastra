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
