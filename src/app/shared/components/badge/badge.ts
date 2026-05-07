import { Component, Input } from '@angular/core';
import { BadgeType } from '../../../interfaces/badge.interface';

@Component({
  selector: 'app-badge',
  imports: [],
  template: `
    <span class="badge" [class]="'text-bg-' + type">
        {{ text }}
    </span>
  `,
})
export class Badge {
  @Input() text: string = '';
  @Input() type: BadgeType = 'primary';
}
