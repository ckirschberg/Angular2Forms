import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AppComponent, environment } from './app/';
import { provideForms, disableDeprecatedForms } from '@angular/forms';

if (environment.production) {
  enableProdMode();
}

bootstrap(AppComponent, [
    //use the new Angular2 forms, not the old ones.
    disableDeprecatedForms(),
    provideForms()
]);
