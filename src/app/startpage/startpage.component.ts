import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { User } from '../user';

@Component({
  selector: 'app-startpage',
  templateUrl: './startpage.component.html',
  styleUrls: ['./startpage.component.css']
})
export class StartpageComponent implements OnInit {

  @Input() user: User;
  @Output() edit = new EventEmitter();

  loginForm = new FormGroup({
    name: new FormGroup({
      vorname: new FormControl(null,[Validators.required, Validators.minLength(2)]),
      nachname: new FormControl(null, [Validators.required, Validators.minLength(2)])
    }),
    pass: new FormControl(null, [Validators.required, Validators.minLength(4), Validators.maxLength(4)])
  });

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

}
