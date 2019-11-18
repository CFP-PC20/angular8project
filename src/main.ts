import 'hammerjs';
import {enableProdMode, NgModule} from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { AppComponent } from './app/app.component';
import { environment } from './environments/environment';
import { MatMenuModule } from '@angular/material/menu/';

import '@angular/material';

if (environment.production) {
  enableProdMode();
}


@NgModule({
  imports: [
    MatMenuModule
  ],
  exports: [
    MatMenuModule
  ],
  entryComponents: [AppComponent],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})

export class App {}
platformBrowserDynamic().bootstrapModule(AppModule).catch(err => console.error(err));
