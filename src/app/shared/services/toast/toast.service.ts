import { Injectable, signal } from '@angular/core';
import { Toast } from '../../../interfaces/toast.interface';

@Injectable({
  providedIn: 'root',
})
export class ToastService {

  toasts = signal<Toast[]>([]);

  show(text: string, options: Partial<Toast> = {}) {
    this.toasts.update(t => [...t, { text, ...options }]);
  }

  remove(toast: Toast) {
    this.toasts.update(t => t.filter(x => x !== toast));
  }
  
}
