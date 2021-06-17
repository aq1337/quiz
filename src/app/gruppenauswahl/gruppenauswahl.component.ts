import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { GRUPPEN } from '../gruppenmock'
import { Gruppe } from '../gruppe';

@Component({
  selector: 'app-gruppenauswahl',
  templateUrl: './gruppenauswahl.component.html',
  styleUrls: ['./gruppenauswahl.component.css']
})
export class GruppenauswahlComponent implements OnInit {
  gruppen = GRUPPEN;
  selectedGroup?: Gruppe;
  isShown: boolean = false; // Versteckt den Butten für die Erstellung einer neuen Gruppe
  toggleShow(){
    this.isShown = ! this.isShown;
  }
  constructor() { }

  ngOnInit(): void {
  }

  selectGroup(gruppe: Gruppe){
    alert(gruppe.id);
  }

}
