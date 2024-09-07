import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { ThinkingComponent } from '../../components/thinking/thinking.component';
import { CommonModule } from '@angular/common';
import { AllTought } from '../../types/all-tought.type';
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
  public toughts: AllTought[] = [];
  public searchForm: FormGroup;
  public order: boolean = true;

  constructor(private apiService: ApiService) {
    this.searchForm = new FormGroup({
      search: new FormControl(''),
    });

    this.getToughts('');
  }

  public get search() {
    return this.searchForm.get('search')?.value;
  }

  public getToughts(search: string) {
    this.apiService.allToughts(search).subscribe({
      next: (response) => {
        this.toughts.length = 0;

        response.forEach((res) => {
          this.toughts.push(res);
        });

        this.searchForm.get('search')?.reset(search);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  public changeOrder(order: boolean) {
    this.order = order;
  }
}
