import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  // the form
  submitForm: FormGroup;

  constructor(private http: HttpClient) {
  }

  // form initialised
  ngOnInit() {
    this.submitForm = new FormGroup({
      'username': new FormControl(null, [Validators.required]),
      'question': new FormControl(null, [Validators.required])
    });
  }

  validateAllFormFields(formGroup: FormGroup) {         
  Object.keys(formGroup.controls).forEach(field => {  
    const control = formGroup.get(field);             
    if (control instanceof FormControl) {             
      control.markAsTouched({ onlySelf: true });
    } else if (control instanceof FormGroup) {        
      this.validateAllFormFields(control);            
    }
  });
}

  // dummy submit only for example
  onSubmit() {
    console.log(this.submitForm.value);
    if (!this.submitForm.valid) {
      this.validateAllFormFields(this.submitForm);
      return;
    }
    this.http.post(environment.service_base_url + environment.service_endpoint,
      this.submitForm.value)
      .subscribe(resp => {
        alert('Question submitted');
        this.submitForm.reset();
      }, error => {
        alert('Question submit failed');
      });

  }

}
