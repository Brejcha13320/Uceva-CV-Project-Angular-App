import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { Icon } from '../../../../shared/components/icon/icon';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../../../../shared/services/auth/auth.service';
import { SidebarOption } from '../../../../interfaces/sidebar.interface';
import { UserRole, UserRoleEnum } from '../../../../core/domain/models/user.model';

@Component({
  selector: 'app-sidebar',
  imports: [
    CommonModule,
    Icon,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss',
})
export class Sidebar implements OnInit {

  options: SidebarOption[] = [];

  private readonly authService = inject(AuthService);

  ngOnInit(): void {
    this. options = this.getOptions();
  }

  getOptions(){
    const user = this.authService.user();

    const defaultOptions: SidebarOption[] = [
      { icon: 'clipboard-check', name: 'Mi Hoja de Vida', url: '/home/my-cv' },
      { icon: 'clipboard-data', name: 'Ver Hojas de Vida', url: '/home/view-cvs' },
    ];

    const adminOptions: SidebarOption[] = [
      { icon: 'clipboard-data', name: 'Ver Usuarios', url: '/home/users' }
    ]

    switch (user?.role) {

      case UserRoleEnum.ESTUDIANTE:
      case UserRoleEnum.DOCENTE:
        return defaultOptions;

      case UserRoleEnum.ADMIN:
        return [
          ...defaultOptions,
          ...adminOptions
        ];

      default:
        return [];
    }

  }

}
