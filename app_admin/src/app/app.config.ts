import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

import { routes } from './app.routes';
import { authInterceptProvider } from './utils/jwt.interceptor';


export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(withInterceptorsFromDi()),
    // Previously imported MttpClientModule and importProvidersFrom(HttpClientModule), 
    // prividing the Http Client withInterceptorsFromDI is now the recommended means of importing providers
    // import withInterceptorsFromDi from '@angular/common/http' instead of HttpClientModule
    authInterceptProvider
  ]
    
};
