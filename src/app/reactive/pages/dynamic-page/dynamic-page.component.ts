import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  templateUrl: './dynamic-page.component.html',
  styles: ``
})
export class DynamicPageComponent {


  public newFavourite: FormControl = new FormControl('', [Validators.required], []);

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
    return this.myForm.controls[field].errors && 
    this.myForm.controls[field].touched
  }

  isValidFieldInArray(formArray: FormArray, i: number){
    return formArray.controls[i].errors && 
    formArray.controls[i].touched
  }

  public myForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(0)]],
    favouriteGames: this.fb.array([
      ['Metal Gear', Validators.required],
      ['Hades', Validators.required],
      ['DeathStranding', Validators.required],
    ])
  })
  get favouriteGames(){
    return this.myForm.get('favouriteGames') as FormArray;
  }
  constructor (private fb: FormBuilder) {}

  onDeleteFavourite(i:number):void{
    this.favouriteGames.removeAt(i);
  }

  onAddFavourite():void{
    if (this.newFavourite.invalid) return;

    const newGame = this.newFavourite.value;

    this.favouriteGames.push(
      this.fb.control(newGame, Validators.required, [])
    );

    this.newFavourite.reset()
  }

  onSubmit():void{

    if ( this.myForm.invalid ) {
      this.myForm.markAllAsTouched();
      return;
    }
    (this.myForm.controls['favouriteGames'] as FormArray) = this.fb.array([]);
    this.myForm.reset()
  } 

}
