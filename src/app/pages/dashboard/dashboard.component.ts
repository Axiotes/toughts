import { Component } from '@angular/core';
import { MyToughtComponent } from "../../components/my-tought/my-tought.component";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [MyToughtComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

}
