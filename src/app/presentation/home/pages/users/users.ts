import { Component, inject, OnInit } from '@angular/core';
import { GetAllUsersUseCase } from '../../../../core/application/usecases/get-all-users.usecase';
import { User } from '../../../../core/domain/models/user.model';
import { Badge } from '../../../../shared/components/badge/badge';
import { Title } from '../../../../shared/components/title/title';
import { ToastService } from '../../../../shared/services/toast/toast.service';
import { Search } from '../../components/search/search';
import { TableUsers } from '../../components/table-users/table-users';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  imports: [
    Title,
    Search,
    Badge,
    TableUsers
  ],
  providers: [
    GetAllUsersUseCase
  ],
  templateUrl: './users.html',
  styleUrl: './users.scss',
})
export class Users implements OnInit {
  term: string = '';
  users: User[] = [];

  private readonly router = inject(Router);
  private readonly toastService = inject(ToastService);
  private readonly getAllUsersUseCase = inject(GetAllUsersUseCase);

  searchCVs(term: string) {
    this.term = term;
  }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(){
    this.getAllUsersUseCase.execute().subscribe({
      next: (users) => this.users = users,
      error: (error) => {
        this.toastService.show(
            'Ha ocurrido un error', 
            { type: 'danger', icon: 'dash-circle' }
          );
      }
    })
  }

  clickOptions({ idUser, idButton }: { idUser: string, idButton: 'view' | 'edit'}){
    if(idButton === 'view'){
      this.router.navigateByUrl(`/home/users/${idUser}`);
    } else if(idButton === 'edit'){

    }
  }

}
