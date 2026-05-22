import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../../../../core/domain/models/user.model';
import { Button } from '../../../../shared/components/button/button';
import { UserOptions, UserOptionsButton } from '../../../../interfaces/options.interface';
import { CommonModule } from '@angular/common';
import { RoleBadge } from '../../../../shared/components/role-badge/role-badge';

@Component({
  selector: 'app-table-users',
  imports: [
    CommonModule,
    Button,
    RoleBadge
  ],
  templateUrl: './table-users.html',
  styleUrl: './table-users.scss',
})
export class TableUsers {
  @Input() data: User[] = [];
  @Output() onClick: EventEmitter<UserOptions> = new EventEmitter();

  clickOptions(idUser: string, idButton: UserOptionsButton){
    this.onClick.emit({ idUser, idButton });
  }
}
