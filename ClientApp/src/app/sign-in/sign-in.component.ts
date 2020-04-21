import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AppService } from '../app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['../sign-up/sign-up.component.scss']
})
export class SignInComponent implements OnInit {
  profileForm = new FormGroup({
    password: new FormControl(''),
    email: new FormControl(''),
  });

  @ViewChild('errorComment', null) errorComment: ElementRef;

  constructor(public appService: AppService, private router: Router) { }

  ngOnInit() {
  }

}
