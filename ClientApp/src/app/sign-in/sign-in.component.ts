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

  onSubmit() {
    for (const property in this.profileForm.value) {
      if (this.profileForm.value.hasOwnProperty(property)) {
        if (this.profileForm.value[property] === '') {
          this.errorComment.nativeElement.innerHTML = 'Please fill all the fields';
          return;
        }
      }
    }

    if (!this.validateEmail(this.profileForm.value.email)) {
      this.errorComment.nativeElement.innerHTML = 'Please fill the email in the correct format';
      return;
    }

    this.appService.login(this.profileForm.value).then(data => {
      console.log('data', data);
      // this.router.navigateByUrl('/sign-in');
    }).catch(err => {
      console.log('error', err);
      this.errorComment.nativeElement.innerHTML = 'Error: ' + err.status;
    });
  }

  private validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

}
