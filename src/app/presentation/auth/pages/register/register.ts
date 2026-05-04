import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { Button } from '../../../../shared/components/button/button';
import { ToastService } from '../../../../shared/services/toast/toast.service';
import { FormHelper } from '../../../../shared/utils/helpers/form-helper';
import { RegisterValidators } from '../../../../shared/utils/validators/register.validators';

@Component({
  selector: 'app-register',
  imports: [
    Button,
    FormsModule,
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './register.html',
  styleUrl: './register.scss',
})
export class Register {

  registerForm!: FormGroup;

  get email(){
    return this.registerForm.value.email;
  }

  get name(){
    return this.registerForm.value.name;
  }

  get password() {
    return this.registerForm.value.password;
  }

  get confirmPassword() {
    return this.registerForm.value.confirmPassword;
  }

  private readonly formHelper = inject(FormHelper);
  private readonly toastService = inject(ToastService);

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
      of(true).subscribe({
        next: (d) => {
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
