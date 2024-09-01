import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  public isLogged: boolean = false;

  constructor(private apiService: ApiService) {
    this.apiService.checkLogged().subscribe({
      next: (response) => {
        this.isLogged = response;
      },
      error: (err) => console.log(err),
    });
  }
}
