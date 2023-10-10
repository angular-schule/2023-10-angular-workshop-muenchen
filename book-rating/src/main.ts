import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));


class Test {

  blubb: boolean;

  constructor(zahl: number) {
    console.log('Test:', zahl);
  }
}

const test = new Test(42);
