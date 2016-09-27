import { Component } from '@angular/core';
import {
  FORM_DIRECTIVES,
  REACTIVE_FORM_DIRECTIVES,
  FormBuilder,
  FormGroup,
  Validators, FormControl
} from '@angular/forms';
 
@Component({
  selector: 'internship-entry2',
  directives: [FORM_DIRECTIVES, REACTIVE_FORM_DIRECTIVES],
  template: `

<div class="">
  <h2 class="">Internship Entry</h2>
  <form [formGroup]="internshipForm" (ngSubmit)="onSubmit(internshipForm)" >

    <div class="">
      
      <label for="initials">Initials</label>
      <input type="text"
             id="initials"
             placeholder="Initials"
             [formControl]="internshipForm.controls['initials']" />

       <div *ngIf="!internshipForm.controls.initials.valid &&
                internshipForm.controls.initials.touched">
         Initials are invalid
       </div>
       
       <div *ngIf="internshipForm.controls.initials.hasError('required')
       && internshipForm.controls.initials.touched">
          Initials are required
       </div>
    </div>

    <button type="submit" class="">Submit</button>
  </form>
</div>
  `
})
export class InternshipEntryComponent {
    private internshipForm: FormGroup;

    constructor(fb: FormBuilder) {
        this.internshipForm = fb.group({
            'initials': ['',Validators.required]
        });
    }

    public onSubmit(form) {
        if (form.valid) {
            console.log("yes it is valid");

            //send the result to the server
        }
        else {
            console.log("no it is not. Fix errros, try again");
            //display error messages and try again.
        }
    }
}
