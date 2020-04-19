import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    password: new FormControl(''),
    passwordRepeat: new FormControl(''),
  });

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    for (var property in this.profileForm.value) {
      if (this.profileForm.value.hasOwnProperty(property)) {
        if (this.profileForm.value[property] === '') {
          return;
        }
      }
    }



    if (this.profileForm.value.password !== this.profileForm.value.passwordRepeat) {
      return;
    }

    console.log('done');
  }
}
