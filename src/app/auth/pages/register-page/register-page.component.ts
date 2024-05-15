import { EmailValidator } from './../../../shared/services/email-validator.service';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import * as customValidators from '../../../shared/validators/validators';
import { ValidatorsService } from '../../../shared/services/validators.service';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styles: ``
})
export class RegisterPageComponent {

  public myForm: FormGroup = this.fb.group({
    name: ['', [ Validators.required, Validators.pattern(this.validatorService.firstNameAndLastnamePattern) ]],
    email: ['', [ Validators.required, Validators.pattern(this.validatorService.emailPattern) ], [this.emailValidator]],
    username: ['', [ Validators.required, this.validatorService.cantBeStrider ]],
    password: ['', [ Validators.required, Validators.minLength(6) ]],
    repeatPassword: ['', [ Validators.required ]],
  }, {
    validators: [
      this.validatorService.isFieldOneEqualFieldTwo('password', 'repeatPassword')
    ]
  });





  constructor (
    private fb: FormBuilder,
    private validatorService: ValidatorsService,
    private emailValidator: EmailValidator ) {}

  isValidField( field:string ){
    // TODO obtener validator desde servicio
    return this.validatorService.isValidField( this.myForm, field)
  }

  onSubmit() {
    this.myForm.markAllAsTouched()
  }


}
