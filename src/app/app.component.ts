import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  @ViewChild('fileInput') fileInput: ElementRef;
  showMessage: string;
  gender: any = 'FEMALE';
  title = 'reactiveForms';
  reactiveForm: FormGroup;
  values: string[];
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.reactiveForm = this.formBuilder.group({
      firstname: new FormControl(null, [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(10),
      ]),
      mobile: new FormControl(null, [
        Validators.required,
        Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$'),
      ]),
      gender: new FormControl(null, [
        Validators.required
      ]),
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
        Validators.maxLength(7),
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
        Validators.maxLength(255),
      ]),
      project: new FormControl(null, [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(255),
      ]),
      // gender: new FormControl(null,
      //   [Validators.required]),
    });

    // patching values in the form using patchValue()
	this.reactiveForm.patchValue({
			firstname: 'Mahesh',
      mobile: 9860259111,
      lastname: "Tendulkar",
      email: "sachin@gmail.com",
      gender: "male",
      qualification: "BE",
      category: "Tech",
      currentcompany: "Mgen",
      currentloc: "Banglore",
      currentsalary: "3LPA",
      skills: "Front end",
      currentdesignation: "Front end Developer",
      yearsofexp: "2 years",
      noticeperiod: "3 months",
      expectedsalary: "5LPA",
      prjs: "Department Management system",
      project: "Department Management system"
		});

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

	
	}

  // get userName() {
	// 	return this.reactiveForm.patchValue('firstame');
	// }
  
