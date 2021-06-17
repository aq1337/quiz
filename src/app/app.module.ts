import { MaterialModule } from './material/material.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule} from '@angular/forms' // Template Driven Forms
import { ReactiveFormsModule} from '@angular/forms'

import { NavbarComponent } from './navbar/navbar.component';
import { StartpageComponent } from './startpage/startpage.component';
import { GruppenauswahlComponent } from './gruppenauswahl/gruppenauswahl.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { RateThisAppComponent } from './rate-this-app/rate-this-app.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    StartpageComponent,
    GruppenauswahlComponent,
    RateThisAppComponent
  ],
  entryComponents: [RateThisAppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
