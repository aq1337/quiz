import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'

@Component({
  selector: 'app-gruppenauswahl',
  templateUrl: './gruppenauswahl.component.html',
  styleUrls: ['./gruppenauswahl.component.css']
})
export class GruppenauswahlComponent implements OnInit {
  isShown: boolean = false; // Versteckt den Butten für die Erstellung einer neuen Gruppe
  toggleShow(){
    this.isShown = ! this.isShown;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
