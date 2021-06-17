import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { GruppeService } from '../services/gruppenservice/gruppe.service';
import { Gruppe } from '../gruppe';

@Component({
  selector: 'app-gruppenauswahl',
  templateUrl: './gruppenauswahl.component.html',
  styleUrls: ['./gruppenauswahl.component.css']
})
export class GruppenauswahlComponent implements OnInit {
  gruppen: Gruppe[] = [];
  selectedGroup?: Gruppe;
  isShown: boolean = false; // Versteckt den Butten für die Erstellung einer neuen Gruppe
  toggleShow(){
    this.isShown = ! this.isShown;
  }
  constructor(private gruppeService: GruppeService) { }

  ngOnInit(): void {
    this.getGruppen();
  }

  selectGroup(gruppe: Gruppe){
    alert(gruppe.id);
  }

  getGruppen(){
    this.gruppeService.getGruppen()
    .subscribe(
      gruppen => this.gruppen = gruppen)
  }
}
