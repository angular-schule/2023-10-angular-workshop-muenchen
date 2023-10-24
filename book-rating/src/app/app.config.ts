import { ApplicationConfig } from '@angular/core';
import { TitleStrategy, provideRouter, withDebugTracing } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { CustomTitleStrategy } from './custom-title-strategy';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes,
      ///withDebugTracing()
    ),
    provideHttpClient(), // NEU
    {
      provide: TitleStrategy,
      useClass: CustomTitleStrategy,
    },
  ]
};
