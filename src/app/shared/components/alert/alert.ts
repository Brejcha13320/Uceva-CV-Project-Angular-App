import { Component, Input } from '@angular/core';
import { AlertType } from '../../../interfaces/alert.interface';
import { Icon } from '../icon/icon';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-alert',
  imports: [
    Icon,
    CommonModule
  ],
  template: `
  <div 
    class="alert" 
    [class]="'alert-' + type" 
    role="alert">
    @if(icon){
      <app-icon [icon]="icon" />
    }
    <div>
      {{text}}
    </div>
  </div>
  `,
})
export class Alert {
  @Input() text: string = '';
  @Input() type: AlertType = 'primary';
  @Input() icon: string = '';
}
