import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthLoginService } from '../../services/auth-login.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  public isLogged: boolean = false;

  constructor(private authLogin: AuthLoginService, private router: Router) {
    this.authLogin.getSession().subscribe({
      next: (response) => {
        if (response) {
          this.isLogged = true;
        }
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  ngOnInit(): void {
    if (localStorage.getItem('session')) {
      this.isLogged = true;
    }
  }

  public logout(): void {
    this.authLogin.logout();
    this.router.navigate(['/toughts']);
    this.isLogged = false;
  }
}
