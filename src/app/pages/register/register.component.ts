import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent {
  public typeInput: string = 'password';
  public iconPassword: string = 'closed';
  public registerForm: FormGroup;

  constructor(private apiService: ApiService) {
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
      console.log('Erro ao cadastrar, verificar campos');
      return;
    }

    this.apiService.register(this.registerForm.value).subscribe({
      next: (response) => {
        console.log(response);
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
