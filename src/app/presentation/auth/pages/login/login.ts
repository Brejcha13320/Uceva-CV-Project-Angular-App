import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { GetLocalStorageUseCase } from '../../../../core/application/usecases/local-storage/get-local-storage.usecase';
import { RemoveLocalStorageUseCase } from '../../../../core/application/usecases/local-storage/remove-local-storage.usecase';
import { SetLocalStorageUseCase } from '../../../../core/application/usecases/local-storage/set-local-storage.usecase';
import { Button } from '../../../../shared/components/button/button';
import { ToastService } from '../../../../shared/services/toast/toast.service';
import { FormHelper } from '../../../../shared/utils/helpers/form-helper';

@Component({
  selector: 'app-login',
  imports: [
    CommonModule,
    Button,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    GetLocalStorageUseCase,
    SetLocalStorageUseCase,
    RemoveLocalStorageUseCase,
  ],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {

  loginForm!: FormGroup;
  rememberMe: boolean = false;
  localStorageEmail: string = '';

  get email(){
    return this.loginForm.value.email;
  }

  get password(){
    return this.loginForm.value.password;
  }

  private readonly formHelper = inject(FormHelper);
  private readonly toastService = inject(ToastService);
  private readonly getLocalStorageUseCase = inject(GetLocalStorageUseCase);
  private readonly setLocalStorageUseCase = inject(SetLocalStorageUseCase);
  private readonly removeLocalStorageUseCase = inject(RemoveLocalStorageUseCase);

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
  ){
    if(this.getLocalStorageUseCase.execute('email')){
      this.localStorageEmail = this.getLocalStorageUseCase.execute('email')!;
      this.rememberMe = true;
    }
  }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(){
    this.loginForm = this.formBuilder.group({
      email: [this.localStorageEmail, [Validators.required, Validators.email]],
      password: ['', Validators.required],
    })
  }

  isValid(formControl: string){
    return this.formHelper.isValid(this.loginForm, formControl);
  }

  isInvalid(formControl: string){
    return this.formHelper.isInvalid(this.loginForm, formControl);
  }

  login(){
    if(this.loginForm.invalid){
      this.loginForm.markAllAsTouched();
      this.toastService.show(
        'Por favor complete el formulario', 
        { type: 'danger' }
      );
    } else {
      of(true).subscribe({
        next: (d) => {
          this.toastService.show(
            'Inicio de Sesión Exitoso', 
            { type: 'success' }
          );
          this.rememberEmailStorage();
          this.redirectTo('/home');
        },
        error: (e) => {

        }
      })
    }
  }

  rememberEmailStorage() {
    if (this.rememberMe) {
      this.setLocalStorageUseCase.execute('email', this.email);
    } else {
      this.removeLocalStorageUseCase.execute('email');
    }
  }

  redirectTo(url: string){
    this.router.navigateByUrl(url);
  }


}
