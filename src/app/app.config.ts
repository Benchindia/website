import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';

export const appConfig: ApplicationConfig = {
  // providers: [
  //   provideRouter(routes), 
  //   provideClientHydration(),
  //   BrowserAnimationsModule
  // ]
  providers: [provideRouter(routes), importProvidersFrom([BrowserModule, BrowserAnimationsModule,])],
};
// import { ApplicationConfig, importProvidersFrom } from '@angular/core';
// import { provideRouter } from '@angular/router';
// import { BrowserModule } from '@angular/platform-browser';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { routes } from './app.routes';

// export const appConfig: ApplicationConfig = {
//   providers: [provideRouter(routes), importProvidersFrom([BrowserModule, BrowserAnimationsModule,])],
// };
