import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { FlashMessageComponent } from '../../components/flash-message/flash-message.component';
import { ApiService } from '../../services/api.service';
import { ResponseAuth } from '../../types/response-auth.type';
import { AuthLoginService } from '../../services/auth-login.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    RouterLink,
    ReactiveFormsModule,
    CommonModule,
    FlashMessageComponent,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  public loginForm: FormGroup;
  public showMessage: boolean = false;
  public message: string = '';
  public typeInput: string = 'password';
  public iconPassword: string = 'closed';

  constructor(
    private apiService: ApiService,
    private router: Router,
    private authLogin: AuthLoginService
  ) {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
    });
  }

  public login() {
    if (!this.loginForm.valid) {
      this.message = 'Email ou senha inválido!';
      this.showMessage = true;
      return;
    }

    this.apiService.login(this.loginForm.value).subscribe({
      next: (response: ResponseAuth) => {
        this.message = response.message;
        this.showMessage = true;

        if (response.registered && response.userId) {
          this.authLogin.setSession(response.userId);
          this.router.navigate(['/toughts']);
        }
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  public toggleVisibility() {
    if (this.typeInput === 'password') {
      this.typeInput = 'text';
      this.iconPassword = 'open';
    } else {
      this.typeInput = 'password';
      this.iconPassword = 'closed';
    }
  }
}
