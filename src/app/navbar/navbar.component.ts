import { RateThisAppComponent } from './../rate-this-app/rate-this-app.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog(){
    this.dialog.open(RateThisAppComponent);
  }
}
