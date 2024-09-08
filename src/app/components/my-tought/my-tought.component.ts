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
  @Output() public flashMessage: EventEmitter<{
    message: string;
    showMessage: boolean;
  }> = new EventEmitter<{ message: string; showMessage: boolean }>();
  @Output() public updateDashboard: EventEmitter<void> =
    new EventEmitter<void>();
  @Output() edit: EventEmitter<{ title: string; id: number }> =
    new EventEmitter<{ title: string; id: number }>();

  constructor(
    private apiService: ApiService,
    private authService: AuthLoginService
  ) {}

  public removeTought() {
    this.apiService.removeTought(this.id, this.authService.userId).subscribe({
      next: (response) => {
        this.flashMessage.emit({
          message: response.message,
          showMessage: true,
        });
        this.updateDashboard.emit();
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  public editTought() {
    this.edit.emit({
      title: this.title,
      id: this.id,
    });
  }
}
