import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms'

@Component({
  selector: 'app-startpage',
  templateUrl: './startpage.component.html',
  styleUrls: ['./startpage.component.css']
})
export class StartpageComponent implements OnInit {

  loginForm = new FormGroup({
    name: new FormGroup({
      vorname: new FormControl(null,[Validators.required, Validators.minLength(2)]),
      nachname: new FormControl(null, [Validators.required, Validators.minLength(2)])
    }),
    pass: new FormControl(null, [Validators.required, Validators.minLength(4), Validators.maxLength(4)])
  });

  constructor(private router: Router) { }

  model = new User(1, "Philipp", 0)



  ngOnInit(): void {
  }

}
