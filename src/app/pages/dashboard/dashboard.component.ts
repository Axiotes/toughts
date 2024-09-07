import { Component } from '@angular/core';
import { MyToughtComponent } from '../../components/my-tought/my-tought.component';
import { ApiService } from '../../services/api.service';
import { AuthLoginService } from '../../services/auth-login.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [MyToughtComponent, CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  public name: string = '';
  public titles: string[] = [];

  constructor(
    private apiService: ApiService,
    private authService: AuthLoginService
  ) {
    this.apiService.dashboard(this.authService.userId).subscribe({
      next: (response) => {
        this.name = response.name;

        response.Toughts.forEach((res) => {
          this.titles.push(res.title);
        });
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
