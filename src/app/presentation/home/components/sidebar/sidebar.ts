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
    { icon: 'clipboard-check', name: 'Opcion 1', url: '/home/my-cv' },
    { icon: 'clipboard-data', name: 'Opción 2', url: '/home/view-cvs' },
  ];

}
