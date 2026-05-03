import { Component, inject } from '@angular/core';
import { LoadingService } from '../../services/loading/loading.service';

@Component({
  selector: 'app-loading',
  imports: [],
  template: `
    @if (spinner.loading()) {
      <div class="overlay">
          <div class="spinner-border text-primary"></div>
      </div>
    }
  `,
  styles: `
   .overlay {
      position: fixed;
      inset: 0;
      background: rgba(13, 110, 253, 0.15);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 9999;

      .spinner-border {
        width: 5rem;
        height: 5rem;
      }

  }
  `,
})
export class Loading {
  spinner = inject(LoadingService);
}
