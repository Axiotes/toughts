import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-thinking',
  standalone: true,
  imports: [],
  templateUrl: './thinking.component.html',
  styleUrl: './thinking.component.scss',
})
export class ThinkingComponent {
  @Input() public title: string = '';
  @Input() public name: string = '';
}
