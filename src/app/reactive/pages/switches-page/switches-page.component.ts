import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  templateUrl: './switches-page.component.html',
  styles: ``
})
export class SwitchesPageComponent implements OnInit{
  public myForm: FormGroup = this.fb.group({
    gender: ['', Validators.required],
    wantNotifications: [true, Validators.required],
    termsAndConditions: [false, Validators.requiredTrue]
  })

  public person = {
    gender: 'F',
    wantNotications: false,
  }

  constructor ( private fb: FormBuilder ) {}
  ngOnInit(): void {
    this.myForm.reset(this.person);
  }


  onSave():void{
    if (this.myForm.invalid){
      this.myForm.markAllAsTouched();
      return;
    }
    this.person = this.myForm.value
    this.myForm.reset({gender: '', wantNotifications: true, termsAndConditions: false});
  }

  getFieldError(field:string) : string | null{
    if ( !this.myForm.controls[field]) return null;

    const errors = this.myForm.controls[field].errors || {};

    for (const key of Object.keys(errors)) {
      switch (key ) {
        case 'required':
          return 'Este campo es requerido';
        case 'minlength':
          return `Minimo ${errors['minlength'].requiredLength} caracteres.`;
      }
    }

    return null;
  }

  isValidField ( field:string ) : boolean | null {
    return this.myForm.controls[field].errors && this.myForm.controls[field].touched
  }
}
