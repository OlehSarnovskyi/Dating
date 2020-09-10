import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";


@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegisterFormComponent implements OnInit {

  minDate: Date;
  maxDate: Date;

  firstFormGroup: FormGroup
  secondFormGroup: FormGroup
  isOptional = false

  hidePassword: boolean

  stateGroups: any[] = [{
    letter: 'A',
    names: ['Alabama', 'Alaska', 'Arizona', 'Arkansas']
  }, {
    letter: 'C',
    names: ['California', 'Colorado', 'Connecticut']
  }, {
    letter: 'D',
    names: ['Delaware']
  }, {
    letter: 'F',
    names: ['Florida']
  }, {
    letter: 'G',
    names: ['Georgia']
  }, {
    letter: 'H',
    names: ['Hawaii']
  }, {
    letter: 'I',
    names: ['Idaho', 'Illinois', 'Indiana', 'Iowa']
  }, {
    letter: 'K',
    names: ['Kansas', 'Kentucky']
  }, {
    letter: 'L',
    names: ['Louisiana']
  }, {
    letter: 'M',
    names: ['Maine', 'Maryland', 'Massachusetts', 'Michigan',
      'Minnesota', 'Mississippi', 'Missouri', 'Montana']
  }, {
    letter: 'N',
    names: ['Nebraska', 'Nevada', 'New Hampshire', 'New Jersey',
      'New Mexico', 'New York', 'North Carolina', 'North Dakota']
  }, {
    letter: 'O',
    names: ['Ohio', 'Oklahoma', 'Oregon']
  }, {
    letter: 'P',
    names: ['Pennsylvania']
  }, {
    letter: 'R',
    names: ['Rhode Island']
  }, {
    letter: 'S',
    names: ['South Carolina', 'South Dakota']
  }, {
    letter: 'T',
    names: ['Tennessee', 'Texas']
  }, {
    letter: 'U',
    names: ['Utah']
  }, {
    letter: 'V',
    names: ['Vermont', 'Virginia']
  }, {
    letter: 'W',
    names: ['Washington', 'West Virginia', 'Wisconsin', 'Wyoming']
  }];


  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.initForms();
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth();
    const currentDay = new Date().getDate();
    this.minDate = new Date(currentYear - 200, currentMonth, currentDay);
    this.maxDate = new Date(currentYear - 18, currentMonth, currentDay);
  }

  initForms(): void {
    this.firstFormGroup = this.fb.group({
      email: [null, [Validators.email, Validators.required]],
      password: [null, [Validators.minLength(8), Validators.required]]
    })
    this.secondFormGroup = this.fb.group({
      firstName: ['', Validators.required],
      birthDate: ['', Validators.required],
      stateGroup: ['', Validators.required]
    })
  }

  done() {
    const data = {
      ...this.firstFormGroup.value,
      ...this.secondFormGroup.value
    }
    console.log(data)
  }
}

type sex = 'MALE' | 'FEMALE'
