import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Icon } from '../../../../shared/components/icon/icon';
import { RouterLink, RouterLinkActive } from '@angular/router';

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
export class Sidebar {

  options = [
    { icon: 'clipboard-check', name: 'Mi Hoja de Vida', url: '/home/my-cv' },
    { icon: 'clipboard-data', name: 'Ver Hojas de Vida', url: '/home/view-cvs' },
  ];

}
