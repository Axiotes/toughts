import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-flash-message',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './flash-message.component.html',
  styleUrl: './flash-message.component.scss',
})
export class FlashMessageComponent implements OnInit {
  public progress: number = 100;
  @Input() public message: string = '';
  @Output() showMessage = new EventEmitter<boolean>();

  ngOnInit(): void {
    this.startProgress();
  }

  public startProgress(): void {
    setInterval(() => {
      if (this.progress <= 0) {
        this.progress = 100;
        this.showMessage.emit(false);
      } else {
        this.progress--;
      }
    }, 100);
  }
}
