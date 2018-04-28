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

  // dummy submit only for example
  onSubmit() {
    console.log(this.submitForm.value);
    this.http.post(environment.service_base_url + environment.service_endpoint,
      this.submitForm.value)
      .subscribe(resp => {
        alert('Form submitted');
        this.submitForm.reset();
      }, error => {
        alert('Form submitt failed');
        this.submitForm.reset();
      });

  }

}
