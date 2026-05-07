import { Component } from '@angular/core';
import { Button } from '../../../../shared/components/button/button';
import { Badge } from '../../../../shared/components/badge/badge';

@Component({
  selector: 'app-navbar',
  imports: [
    Button,
    Badge
  ],
  templateUrl: './navbar.html',
})
export class Navbar {

}
