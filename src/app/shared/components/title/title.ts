import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-title',
  template: `
    <div class="pt-3 pb-2 mb-3 border-bottom">
      <h1>{{ title }}</h1>
    </div>
  `,
})
export class Title {
  @Input() title: string = '';
}
