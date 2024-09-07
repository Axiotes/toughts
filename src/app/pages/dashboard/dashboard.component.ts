import { Component } from '@angular/core';
import { MyToughtComponent } from '../../components/my-tought/my-tought.component';
import { ApiService } from '../../services/api.service';
import { AuthLoginService } from '../../services/auth-login.service';
import { CommonModule } from '@angular/common';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { FlashMessageComponent } from '../../components/flash-message/flash-message.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    MyToughtComponent,
    CommonModule,
    ReactiveFormsModule,
    FlashMessageComponent,
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  public newTought: FormGroup;
  public editTought: FormGroup;
  public name: string = '';
  public toughts: { id: number; title: string }[] = [];
  public message: string = '';
  public showMessage: boolean = false;
  public edit: boolean = false;
  private userId: number = -1;
  private idTought: number = -1;

  constructor(
    private apiService: ApiService,
    private authService: AuthLoginService
  ) {
    this.userId = this.authService.userId;

    this.getToughtsDashboard();

    this.newTought = new FormGroup({
      title: new FormControl('', Validators.required),
    });

    this.editTought = new FormGroup({
      title: new FormControl('', Validators.required),
    });
  }

  public getToughtsDashboard() {
    this.apiService.dashboard(this.userId).subscribe({
      next: (response) => {
        this.toughts.length = 0;
        this.name = response.name;

        response.Toughts.forEach((res) => {
          this.toughts.push({
            id: res.id,
            title: res.title,
          });
        });
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  public createTought() {
    const title = this.newTought.get('title')?.value;

    if (!this.newTought.valid || !title) {
      this.message = 'Digite algo para publicar';
      this.showMessage = true;
      return;
    }

    this.apiService
      .createTought({ title: title, userId: this.userId })
      .subscribe({
        next: (response) => {
          this.message = response.message;
          this.showMessage = true;
          this.getToughtsDashboard();
          this.newTought.get('title')?.reset('');
        },
        error: (err) => {
          console.log(err);
        },
      });
  }

  public changeTought(edit: { title: string; id: number }) {
    this.editTought.get('title')?.setValue(edit.title);
    this.idTought = edit.id;
    this.edit = true;
  }

  public confirmEdit() {
    const title = this.newTought.get('title')?.value;

    if (!this.editTought.valid || !title) {
      this.message = 'Digite algo para publicar';
      this.showMessage = true;
      return;
    }

    this.apiService
      .editTought({
        title: title,
        id: this.idTought,
      })
      .subscribe({
        next: (response) => {
          this.message = response.message;
          this.showMessage = true;
          this.getToughtsDashboard();
          this.edit = false;
        },
        error: (err) => [console.log(err)],
      });
  }

  public setFlashMessage(flash: { message: string; showMessage: boolean }) {
    this.message = flash.message;
    this.showMessage = flash.showMessage;
  }
}
