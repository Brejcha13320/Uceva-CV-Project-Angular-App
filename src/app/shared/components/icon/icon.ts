import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-icon',
  imports: [],
  template: `
    <i class="bi" [class]="'bi-' + icon" [style.fontSize]="size + 'rem'" ></i>
  `,
})
export class Icon {
  @Input({ required: true }) icon: string = '';
  @Input() size: number = 1;
}
