import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginUserUseCase } from '../../../../core/application/usecases/login-user.usecase';
import { Button } from '../../../../shared/components/button/button';
import { LocalStorageService } from '../../../../shared/services/local-storage/local-storage.service';
import { ToastService } from '../../../../shared/services/toast/toast.service';
import { FormHelper } from '../../../../shared/utils/helpers/form-helper';
import { AuthService } from '../../../../shared/services/auth/auth.service';

@Component({
  selector: 'app-login',
  imports: [
    Button,
    FormsModule,
    CommonModule,
    ReactiveFormsModule
  ],
  providers: [
    LoginUserUseCase
  ],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login implements OnInit {

  loginForm!: FormGroup;
  rememberMe: boolean = false;
  localStorageEmail: string = '';

  get email(){
    return this.loginForm.value.email;
  }

  private readonly router = inject(Router);
  private readonly formBuilder = inject(FormBuilder);
  private readonly formHelper = inject(FormHelper);
  private readonly toastService = inject(ToastService);
  private readonly localStorageService = inject(LocalStorageService);
  private readonly authService = inject(AuthService);
  private readonly loginUserUseCase = inject(LoginUserUseCase);

  constructor(){
    if(this.localStorageService.get('email')){
      this.localStorageEmail = this.localStorageService.get('email')!;
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
        { type: 'danger', icon: 'x-circle' }
      );
    } else {
      this.loginUserUseCase.execute(this.loginForm.value).subscribe({
        next: (loginUser) => {
          this.toastService.show(
            'Inicio de Sesión Exitoso', 
            { type: 'success', icon: 'check-circle' }
          );
          this.rememberEmailStorage();
          this.authService.login(loginUser);
        },
        error: (e) => {
          this.toastService.show(
            'Ha ocurrido un error', 
            { type: 'danger', icon: 'dash-circle' }
          );
        }
      });
    }
  }

  rememberEmailStorage() {
    if (this.rememberMe) {
      this.localStorageService.set('email', this.email);
    } else {
      this.localStorageService.remove('email');
    }
  }

  redirectTo(url: string){
    this.router.navigateByUrl(url);
  }

}
