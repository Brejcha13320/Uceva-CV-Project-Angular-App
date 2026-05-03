import { Component, inject } from '@angular/core';
import { NgbToastModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastService } from '../../services/toast/toast.service';

@Component({
  selector: 'app-toast',
  imports: [NgbToastModule],
  template: `
  <div class="toast-container position-fixed top-0 end-0 p-3">
    @for(toast of toastService.toasts(); track toast){
      <ngb-toast
        [class]="toast.classname"
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
}
