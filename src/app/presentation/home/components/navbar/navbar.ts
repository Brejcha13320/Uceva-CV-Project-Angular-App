import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Badge } from '../../../../shared/components/badge/badge';
import { Button } from '../../../../shared/components/button/button';
import { AuthService } from '../../../../shared/services/auth/auth.service';

@Component({
  selector: 'app-navbar',
  imports: [
    CommonModule,
    Button,
    Badge
  ],
  templateUrl: './navbar.html',
})
export class Navbar {
  readonly authService = inject(AuthService);
  readonly user = this.authService.user();

  logout(){
    this.authService.logout();
  }

}
