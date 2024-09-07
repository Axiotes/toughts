import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-my-tought',
  standalone: true,
  imports: [],
  templateUrl: './my-tought.component.html',
  styleUrl: './my-tought.component.scss',
})
export class MyToughtComponent {
  @Input() public title: string = '';
}
