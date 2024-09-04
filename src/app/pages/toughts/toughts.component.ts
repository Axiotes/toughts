import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { ThinkingComponent } from "../../components/thinking/thinking.component";

@Component({
  selector: 'app-toughts',
  standalone: true,
  imports: [MatIconModule, ThinkingComponent],
  templateUrl: './toughts.component.html',
  styleUrl: './toughts.component.scss'
})
export class ToughtsComponent {

}
