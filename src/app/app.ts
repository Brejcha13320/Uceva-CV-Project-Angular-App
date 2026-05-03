import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Loading } from './shared/components/loading/loading';
import { Toast } from './shared/components/toast/toast';

@Component({
  selector: 'app-root',
  template: `
    <app-toast />
    <app-loading />
    <router-outlet />
  `,
  imports: [RouterOutlet, Toast, Loading],
})
export class App { }