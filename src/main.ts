import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { environment } from './environments/environment';
import { AppModule } from './app/app.module';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule);
//  <reference path="../typings/globals/hammerjs/index.d.ts" />
//  <reference path="../typings/globals/hammerjs/index.d.ts" />