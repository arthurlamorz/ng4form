import { HttpClient } from '@angular/common/http';
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

  constructor(private http: HttpClient) {
  }

  // form initialised
  ngOnInit() {
    this.submitForm = new FormGroup({
      'username': new FormControl(null, [Validators.required]),
      'question': new FormControl(null, [Validators.required])
    })
  }

  // dummy submit only for example
  onSubmit() {
    console.log(this.submitForm.value);
    this.http.post('https://api.goblin-software.com/openquestion',
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