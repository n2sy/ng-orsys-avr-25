import { Component, inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  defaultLanguage = 'python';
  monCommentaire = 'Rien à signaler...';
  showRegister = true;
  showError = false;
  private authSer = inject(AuthService);
  private router = inject(Router);
  submitHandler(f) {
    if (this.showRegister) {
      this.authSer.inscription(f.value).subscribe({
        next: (response) => {
          alert(response['message']);
          this.showRegister = false;
          f.reset();
        },
        error: (err) => {
          console.log(err);
        },
      });
    } else {
      // opération d'authentification
      this.authSer.connexion(f.value).subscribe({
        next: (response) => {
          alert(response['message']);
          localStorage.setItem('access_token', response['token']);

          this.router.navigateByUrl('/cv');
        },
        error: (err) => {
          this.showError = true;
          f.reset();

          console.log(err);
        },
      });
    }
    console.log(f);
  }

  reinitialiser(f: NgForm) {
    f.reset();
  }

  toggleShowRegister() {
    this.showRegister = !this.showRegister;
  }

  generatePwd(f: NgForm) {
    f.form.patchValue({
      password: '123456',
      langage: '',
    });
  }
}
