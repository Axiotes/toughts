import { Component, Input } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { AuthLoginService } from '../../services/auth-login.service';

@Component({
  selector: 'app-my-tought',
  standalone: true,
  imports: [],
  templateUrl: './my-tought.component.html',
  styleUrl: './my-tought.component.scss',
})
export class MyToughtComponent {
  @Input() public title: string = '';

  constructor(
    private apiService: ApiService,
    private authService: AuthLoginService
  ) {}
}
