import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { of } from 'rxjs';
import { Button } from '../../../../shared/components/button/button';
import { ToastService } from '../../../../shared/services/toast/toast.service';
import { FormHelper } from '../../../../shared/utils/helpers/form-helper';
import { RegisterValidators } from '../../../../shared/utils/validators/register.validators';

@Component({
  selector: 'app-change-password',
  imports: [
    Button,
    FormsModule,
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './change-password.html',
  styleUrl: './change-password.scss',
})
export class ChangePassword implements OnInit {
  
  changePasswordForm!: FormGroup;
  token: string | null = null;

  get password() {
    return this.changePasswordForm.value.password;
  }

  get confirmPassword() {
    return this.changePasswordForm.value.confirmPassword;
  }

  private route = inject(ActivatedRoute);
  private readonly formHelper = inject(FormHelper);
  private readonly toastService = inject(ToastService);

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
  ){
    this.token = this.route.snapshot.queryParamMap.get('token');
  }
  
  ngOnInit(): void {
    this.initForm();
  }

  initForm(){
    this.changePasswordForm = this.formBuilder.group(
      {
        password: ['', Validators.required],
        confirmPassword: ['', Validators.required],
      },
      { validators: RegisterValidators.matchPasswords }
    );
  }

  isValid(formControl: string){
    return this.formHelper.isValid(this.changePasswordForm, formControl);
  }

  isInvalid(formControl: string){
    return this.formHelper.isInvalid(this.changePasswordForm, formControl);
  }

  isMatchPassword(){
    return this.changePasswordForm.hasError('match_password');
  }

  changePassword(){
      if(this.changePasswordForm.invalid){
        this.changePasswordForm.markAllAsTouched();
        this.toastService.show(
          'Por favor complete el formulario', 
          { type: 'danger', icon: 'x-circle' }
        );
      } else {
        of(true).subscribe({
          next: (d) => {
            this.toastService.show(
              'Cambio de Contraseña Exitoso', 
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
