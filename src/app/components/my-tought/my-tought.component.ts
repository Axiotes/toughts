import { Component, EventEmitter, Input, Output } from '@angular/core';
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
  @Input() public id: number = -1;
  @Output() public message: EventEmitter<string> = new EventEmitter<string>();
  @Output() public showMessage: EventEmitter<boolean> =
    new EventEmitter<boolean>();
  @Output() public updateDashboard: EventEmitter<void> =
    new EventEmitter<void>();

  constructor(
    private apiService: ApiService,
    private authService: AuthLoginService
  ) {}

  public removeTought() {
    this.apiService.removeTought(this.id, this.authService.userId).subscribe({
      next: (response) => {
        this.message.emit(response.message);
        this.showMessage.emit(true);
        this.updateDashboard.emit();
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
