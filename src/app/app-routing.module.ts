import { GruppenauswahlComponent } from './gruppenauswahl/gruppenauswahl.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StartpageComponent } from './startpage/startpage.component';

const routes: Routes = [
  { path: '', component: StartpageComponent},
  { path: 'groups', component: GruppenauswahlComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
