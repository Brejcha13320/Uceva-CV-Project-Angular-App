import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { UserRole } from '../../../core/domain/models/user.model';
import { BadgeType } from '../../../interfaces/badge.interface';
import { Badge } from '../badge/badge';

@Component({
  selector: 'app-role-badge',
  imports: [
    CommonModule, 
    Badge
  ],
  template: `<app-badge [text]="userRole | titlecase" [type]="getBadgeType()"  />`,
})
export class RoleBadge {
  @Input() userRole: UserRole = 'ESTUDIANTE';

  userRoleMap: Record<UserRole, BadgeType> = {
    ESTUDIANTE: 'primary',
    DOCENTE: 'success',
    ADMIN: 'warning'
  }

  getBadgeType(): BadgeType {
    return this.userRoleMap[this.userRole];
  }

}
