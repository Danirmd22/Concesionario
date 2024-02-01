import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls:  ['./registro.component.css']
})

export class RegistroComponent {
  registerForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.registerForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      password2: ['', [Validators.required, Validators.minLength(8)]],
    }, { validator: this.checkPasswords });
  }

  checkPasswords(group: FormGroup) {
    let passControl = group.get('password');
    let confirmPassControl = group.get('password2');
  
    if (passControl && confirmPassControl) {
        let pass = passControl.value;
        let confirmPass = confirmPassControl.value;
  
        return pass === confirmPass ? null : { notSame: true };
    } else {
        return null;
    }
  }
}