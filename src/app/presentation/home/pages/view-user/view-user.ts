import { Component, inject, Input, OnInit } from '@angular/core';
import { User } from '../../../../core/domain/models/user.model';
import { CommonModule } from '@angular/common';
import { RoleBadge } from '../../../../shared/components/role-badge/role-badge';
import { Title } from '../../../../shared/components/title/title';
import { Button } from '../../../../shared/components/button/button';
import { ActivatedRoute, Router } from '@angular/router';
import { GetUserByIdUseCase } from '../../../../core/application/usecases/get-user-by-id.usecase';
import { status } from '../../../../interfaces/status.interface';

@Component({
  selector: 'app-view-user',
  imports: [
    CommonModule, 
    RoleBadge,
    Title,
    Button
  ],
  providers: [
    GetUserByIdUseCase
  ],
  templateUrl: './view-user.html',
  styleUrl: './view-user.scss',
})
export class ViewUser implements OnInit {
  status: status = 'init';
  user: User | null = null;
  userId: string = '';

  private readonly router = inject(Router);
  private readonly activatedRoute = inject(ActivatedRoute);
  private readonly getUserByIdUseCase = inject(GetUserByIdUseCase);

  constructor(){
    this.activatedRoute.params.subscribe({
      next: ({ id }) => this.userId = id,
      error: () => this.router.navigateByUrl('/home/users')
    })
  }

  ngOnInit(): void {
    this.status = 'loading';
    this.getUserByIdUseCase.execute(this.userId).subscribe({
      next: (user) => {
        this.status = "success";
        this.user = user;
      },
      error: (error) => {
        this.user = null;
        this.status = "error";
      }
    })
  }

  goToUsersList(){
    this.router.navigateByUrl('home/users');
  }

}
