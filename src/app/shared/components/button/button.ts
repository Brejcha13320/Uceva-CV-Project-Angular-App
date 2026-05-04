import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Theme } from '../../../interfaces/type.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-button',
  imports: [CommonModule],
  template: `
    <button 
    type="button" 
    class="btn"
    [class]="'btn-' + type"
    [ngClass]="{ 'w-100': fullWidth === true }"
    (click)="onEmit()">
      {{ text }}
    </button>
  `,
  styleUrl: './button.scss',
})
export class Button {

  @Input() text: string = '';
  @Input() idButton: string = '';
  @Input() type: Theme = 'primary';
  @Input() fullWidth: boolean = false;
  @Output() onClick: EventEmitter<string> = new EventEmitter<string>();

  onEmit() {
    this.onClick.emit(this.idButton);
  }

}
