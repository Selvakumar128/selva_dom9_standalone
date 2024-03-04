import { APP_INITIALIZER, ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { DialogService } from 'primeng/dynamicdialog';
import { MessageService } from 'primeng/api';
import {provideAnimations} from '@angular/platform-browser/animations'
import { provideHttpClient } from '@angular/common/http';
import { ConfigService } from './shared/services/config.service';
import { environment } from '../environments/environment';

export function ConfigLoader(configService: ConfigService): any {
  // Note: this factory need to return a function (that return a promise)
  return () => configService.load(environment.configFile);
}

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes),DialogService,MessageService,provideAnimations(),provideHttpClient(),{
    provide: APP_INITIALIZER,
    useFactory: ConfigLoader,
    deps: [ConfigService],
    multi: true
  },  ]
};
