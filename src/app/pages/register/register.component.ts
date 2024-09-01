import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent {
  public typeInput: string = 'password';
  public iconPassword: string = 'closed';

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
