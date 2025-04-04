import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  defaultLanguage = 'python';
  monCommentaire = 'Rien à signaler...';
  submitHandler(f) {
    console.log(f);
  }

  reinitialiser(f: NgForm) {
    f.reset();
  }

  generatePwd(f: NgForm) {
    f.form.patchValue({
      password: '123456',
      langage: '',
    });
  }
}
