import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));


class Test {

  constructor(public zahl: number) {
    console.log('Test:', this.zahl);
  }
}

const test = new Test(42);
console.log(test.zahl);
