import { Component, inject, OnInit } from '@angular/core';
import { Title } from '../../../../shared/components/title/title';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormHelper } from '../../../../shared/utils/helpers/form-helper';
import { Router } from '@angular/router';
import { Button } from '../../../../shared/components/button/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-my-cv',
  imports: [
    Title,
    Button,
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './my-cv.html',
  styleUrl: './my-cv.scss',
})
export class MyCv implements OnInit {
  
  CVForm!: FormGroup;
  private readonly formHelper = inject(FormHelper);

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
  ){}

  ngOnInit(): void {
    this.initForm();
  }

  initForm(){
    this.CVForm = this.formBuilder.group({
      name: ['', Validators.required],
      profession: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      city: ['', Validators.required],
      profile: ['', Validators.required],
      linkedin: [''],
      github: [''],
    });
  }

  isValid(formControl: string){
    return this.formHelper.isValid(this.CVForm, formControl);
  }

  isInvalid(formControl: string){
    return this.formHelper.isInvalid(this.CVForm, formControl);
  }

  hasError(formControl: string, error: string){
    return this.formHelper.hasError(this.CVForm, formControl, error);
  }

  update(){
    console.log(this.CVForm);
  }

}
