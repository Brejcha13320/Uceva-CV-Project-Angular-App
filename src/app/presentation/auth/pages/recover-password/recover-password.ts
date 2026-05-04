import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { AlertType } from '../../../../interfaces/alert.interface';
import { Alert } from '../../../../shared/components/alert/alert';
import { Button } from '../../../../shared/components/button/button';
import { ToastService } from '../../../../shared/services/toast/toast.service';
import { FormHelper } from '../../../../shared/utils/helpers/form-helper';

@Component({
  selector: 'app-recover-password',
  imports: [
    Alert,
    Button,
    FormsModule,
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './recover-password.html',
  styleUrl: './recover-password.scss',
})
export class RecoverPassword implements OnInit {

  recoverPasswordForm!: FormGroup;
  recoverSuccess: boolean = false;
  alertText: string = 'La solicitud de cambio de contraseña se ha realizado con éxito. Por favor, revise su correo electrónico y siga las instrucciones.';
  alertType: AlertType = 'success';

  get email(){
    return this.recoverPasswordForm.value.email;
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
    this.recoverPasswordForm = this.formBuilder.group(
      {
        email: ['', [Validators.required, Validators.email]]
      }
    );
  }

  isValid(formControl: string){
    return this.formHelper.isValid(this.recoverPasswordForm, formControl);
  }

  isInvalid(formControl: string){
    return this.formHelper.isInvalid(this.recoverPasswordForm, formControl);
  }

  recoverPassword(){
    if(this.recoverPasswordForm.invalid){
      this.recoverPasswordForm.markAllAsTouched();
      this.toastService.show(
        'Por favor complete el formulario', 
        { type: 'danger', icon: 'x-circle' }
      );
    } else {
      of(true).subscribe({
        next: (d) => {
          this.toastService.show(
            'Solicitud Exitosa', 
            { type: 'success', icon: 'check-circle' }
          );
          this.recoverSuccess = true;
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

  tryAgain(){
    this.recoverPasswordForm.reset();
    this.recoverSuccess = false
  }

  redirectTo(url: string){
    this.router.navigateByUrl(url);
  }

}
