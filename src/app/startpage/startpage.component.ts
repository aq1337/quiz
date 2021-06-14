import { Component, OnInit } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-startpage',
  templateUrl: './startpage.component.html',
  styleUrls: ['./startpage.component.css']
})
export class StartpageComponent implements OnInit {

  model = new User(1, "Philipp", 0)

  onClickSubmit(val: any){
    console.warn(val);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
