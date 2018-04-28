import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  //variables
  submitForm: FormGroup;

 // form initialised
  ngOnInit() {
    this.submitForm = new FormGroup({
      'userData': new FormGroup({
        'username': new FormControl(null, [Validators.required]),
        'question': new FormControl(null, [Validators.required])
      }),
    })
  }

  // dummy submit only for example
  onSubmit() {
    console.log(this.submitForm.value);
    alert('Form submitted');
    this.submitForm.reset();
  }

}