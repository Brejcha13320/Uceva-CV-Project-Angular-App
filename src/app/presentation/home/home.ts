import { Component, inject, OnInit } from '@angular/core';
import { Navbar } from './components/navbar/navbar';
import { Sidebar } from './components/sidebar/sidebar';
import { Dashboard } from './pages/dashboard/dashboard';

@Component({
  selector: 'app-home',
  imports: [Navbar, Sidebar, Dashboard],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {
}
