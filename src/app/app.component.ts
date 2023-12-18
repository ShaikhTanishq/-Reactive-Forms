import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonToggleModule } from '@angular/material/button-toggle';

//import { UploadService } from './upload.service';

// interface IUser {
//   firstname: string;
//   lastname: string;
//   email: string;
//   password: string;

// }

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  @ViewChild('fileInput') fileInput: ElementRef;
  showMessage: string;
  gender: any = 'FEMALE';
  title = 'reactiveForms';
  reactiveForm: FormGroup;
  // user: IUser;
  constructor() {}

  ngOnInit() {
    this.reactiveForm = new FormGroup({
      firstname: new FormControl(null, [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(10),
      ]),
      mobile: new FormControl(null, [
        Validators.required,
        Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$'),
      ]),
      // gender: new FormControl(null, [
      //   Validators.required
      // ]),
      lastname: new FormControl(null, [
        Validators.required,
        Validators.maxLength(25),
        Validators.minLength(1),
      ]),
      email: new FormControl(null, [
        Validators.required,
        Validators.minLength(1),
        // Validators.maxLength(250),
        Validators.email,
        Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
      ]),
      qualification: new FormControl(null, [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(25),
      ]),
      category: new FormControl(null, [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(25),
      ]),
      currentcompany: new FormControl(null, [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(25),
      ]),
      currentloc: new FormControl(null, [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(25),
      ]),
      currentsalary: new FormControl(null, [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(25),
      ]),
      skills: new FormControl(null, [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(25),
      ]),
      currentdesignation: new FormControl(null, [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(25),
      ]),
      yearsofexp: new FormControl(null, [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(6),
      ]),
      noticeperiod: new FormControl(null, [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(25),
      ]),
      expectedsalary: new FormControl(null, [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(6),
      ]),
      prjs: new FormControl(null, [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(25),
      ]),
      project: new FormControl(null, [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(25),
      ]),
      // gender: new FormControl(null, 
      //   [Validators.required]),
    });
  }

  onSubmit2() {
    console.log(this.reactiveForm);
    // alert(this.invalidMessage);
  }

  add() {
    let row = document.createElement('div');
    row.className = 'row';
    row.innerHTML = `<input type="text" placeholder="Project">`;
    document.querySelector('.showInputField').appendChild(row);
  }

  onFileChange(event: any) {
    const file = (event.target as HTMLInputElement).files?.[0];
    this.reactiveForm.patchValue({
      resumeFile: file,
    });
    this.reactiveForm.get('resumeFile').updateValueAndValidity();
  }

  uploadFullResume() {
    this.fileInput.nativeElement.click();
  }

  uploadBlankResume() {
    this.fileInput.nativeElement.click();
  }

  uploadImage() {
    this.fileInput.nativeElement.click();
  }
  onSubmit() {
    console.log(this.reactiveForm);

    if (this.reactiveForm.valid) {
      this.showMessage = 'Form is Valid';
    } else {
      this.showMessage = 'Form is Invalid';
    }
  }

  here() {
    console.log('here');
  }
}
