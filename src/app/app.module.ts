import { MaterialModule } from './material/material.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule} from '@angular/forms'

import { NavbarComponent } from './navbar/navbar.component';
import { StartpageComponent } from './startpage/startpage.component';
import { GruppenauswahlComponent } from './gruppenauswahl/gruppenauswahl.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    StartpageComponent,
    GruppenauswahlComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
