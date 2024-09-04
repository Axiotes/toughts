import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { ThinkingComponent } from '../../components/thinking/thinking.component';
import { CommonModule } from '@angular/common';
import { Tought } from '../../types/tought.type';
import { ApiService } from '../../services/api.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-toughts',
  standalone: true,
  imports: [
    MatIconModule,
    ThinkingComponent,
    CommonModule,
    ReactiveFormsModule,
  ],
  templateUrl: './toughts.component.html',
  styleUrl: './toughts.component.scss',
})
export class ToughtsComponent {
  public toughts: Tought[] = [];
  public searchForm: FormGroup;

  constructor(private apiService: ApiService) {
    this.searchForm = new FormGroup({
      search: new FormControl(''),
    });

    this.apiService.allToughts(this.search).subscribe({
      next: (response) => {
        response.forEach((res) => {
          this.toughts.push(res);
        });
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  public get search() {
    return this.searchForm.get('search')?.value;
  }

  public searching() {
    this.apiService.allToughts(this.search).subscribe({
      next: (response) => {
        this.toughts.length = 0;

        response.forEach((res) => {
          this.toughts.push(res);
        });
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
