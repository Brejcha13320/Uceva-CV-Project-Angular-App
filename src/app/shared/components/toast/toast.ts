import { Component, inject } from '@angular/core';
import { NgbToastModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastService } from '../../services/toast/toast.service';
import { ToastType } from '../../../interfaces/toast.interface';

@Component({
  selector: 'app-toast',
  imports: [NgbToastModule],
  template: `
  <div class="toast-container position-fixed top-0 end-0 p-3">
    @for(toast of toastService.toasts(); track toast){
      <ngb-toast
        [class]="toastClassMap[toast.type ?? 'primary']"
        [delay]="toast.delay || 3000"
        (hidden)="toastService.remove(toast)"
      >
        {{ toast.text }}
      </ngb-toast>
    }
  </div>
  `,
})
export class Toast {
  toastService = inject(ToastService);
  toastClassMap : Record<ToastType, string> = {
    'primary': 'bg-primary text-white',
    'secondary': 'bg-secondary text-white',
    'success': 'bg-success text-white',
    'danger': 'bg-danger text-white',
    'warning': 'bg-warning text-dark',
    'info': 'bg-info text-dark',
    'light': 'bg-light text-dark',
    'dark': 'bg-dark text-white',
  }

}
