import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterUserUseCase } from '../../../../core/application/usecases/register-user.usecase';
import { CreateUserData, UserRole } from '../../../../core/domain/models/user.model';
import { Button } from '../../../../shared/components/button/button';
import { ToastService } from '../../../../shared/services/toast/toast.service';
import { FormHelper } from '../../../../shared/utils/helpers/form-helper';
import { RegisterValidators } from '../../../../shared/utils/validators/register.validators';

@Component({
  selector: 'app-register',
  imports: [
    CommonModule,
    Button,
    FormsModule,
    CommonModule,
    ReactiveFormsModule
  ],
  providers: [
    RegisterUserUseCase
  ],
  templateUrl: './register.html',
  styleUrl: './register.scss',
})
export class Register implements OnInit {

  registerForm!: FormGroup;
  userRoles: UserRole[] = ['ESTUDIANTE', 'DOCENTE'];

  private readonly formHelper = inject(FormHelper);
  private readonly toastService = inject(ToastService);
  private readonly registerUserUseCase = inject(RegisterUserUseCase);

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
  ){}

  ngOnInit(): void {
    this.initForm();
  }

  initForm(){
    this.registerForm = this.formBuilder.group(
      {
        email: ['', [Validators.required, Validators.email]],
        name: ['', Validators.required],
        role: ['', Validators.required],
        password: ['', Validators.required],
        confirmPassword: ['', Validators.required],
      },
      { validators: RegisterValidators.matchPasswords }
    );
  }

  isValid(formControl: string){
    return this.formHelper.isValid(this.registerForm, formControl);
  }

  isInvalid(formControl: string){
    return this.formHelper.isInvalid(this.registerForm, formControl);
  }

  isMatchPassword(){
    return this.registerForm.hasError('match_password');
  }

  register(){
    if(this.registerForm.invalid){
      this.registerForm.markAllAsTouched();
      this.toastService.show(
        'Por favor complete el formulario', 
        { type: 'danger', icon: 'x-circle' }
      );
    } else {
      const { confirmPassword, ...restForm } = this.registerForm.value;
      const createUserData: CreateUserData = restForm;
      this.registerUserUseCase.execute(createUserData).subscribe({
        next: () => {
          this.toastService.show(
            'Registro Exitoso', 
            { type: 'success', icon: 'check-circle' }
          );
          this.redirectTo('/auth/login');
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

  redirectTo(url: string){
    this.router.navigateByUrl(url);
  }

}
