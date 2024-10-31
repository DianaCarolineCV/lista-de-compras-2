import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { provideAuth0 } from '@auth0/auth0-angular';
import { routes } from './app.routes';
import { provideHttpClient } from "@angular/common/http";


export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideAuth0({
      domain: 'dev-a8cihyr5dn16tb1u.us.auth0.com',
      clientId: '6eOGgCqWEjQawW20Qx4y1FLTbeEkKCdn',
      authorizationParams: {
        redirect_uri: window.location.origin,
        audience: 'https://dev-a8cihyr5dn16tb1u.us.auth0.com/api/v2/',
        scope: 'openid profile email offline_access',
      },
      useRefreshTokens: true,
      cacheLocation: 'localstorage',
    }),
    provideHttpClient(),
  ],
};
