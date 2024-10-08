import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ApiService } from '../../services/api.service';
import { FlashMessageComponent } from '../../components/flash-message/flash-message.component';
import { CommonModule } from '@angular/common';
import { ResponseAuth } from '../../types/response-auth.type';
import { AuthLoginService } from '../../services/auth-login.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    RouterLink,
    ReactiveFormsModule,
    FlashMessageComponent,
    CommonModule,
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent {
  public typeInput: string = 'password';
  public iconPassword: string = 'closed';
  public registerForm: FormGroup;
  public showMessage: boolean = false;
  public message: string = '';

  constructor(
    private apiService: ApiService,
    private router: Router,
    private authLogin: AuthLoginService
  ) {
    this.registerForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
      confirmPassword: new FormControl('', [Validators.required]),
    });
  }

  public registerUser() {
    if (
      !this.registerForm.valid ||
      this.registerForm.get('password')?.value !==
        this.registerForm.get('confirmPassword')?.value
    ) {
      this.message = 'Erro ao cadastrar, verificar campos!';
      this.showMessage = true;
      return;
    }

    this.apiService.register(this.registerForm.value).subscribe({
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
