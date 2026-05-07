import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Theme } from '../../../interfaces/type.interface';
import { CommonModule } from '@angular/common';
import { Icon } from '../icon/icon';

@Component({
  selector: 'app-button',
  imports: [CommonModule, Icon],
  template: `
    <button 
    type="button"
    [disabled]="disabled"
    class="btn"
    [class]="'btn-' + type"
    [ngClass]="{ 'w-100': fullWidth === true }"
    (click)="onEmit()">
      @if(icon){
        <app-icon [icon]="icon" />
      }
      {{ text }}
    </button>
  `
})
export class Button {

  @Input() text: string = '';
  @Input() idButton: string = '';
  @Input() type: Theme = 'primary';
  @Input() icon: string = '';
  @Input() fullWidth: boolean = false;
  @Input() disabled: boolean = false;
  @Output() onClick: EventEmitter<string> = new EventEmitter<string>();

  onEmit() {
    this.onClick.emit(this.idButton);
  }

}
