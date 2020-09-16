import {ChangeDetectionStrategy, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MatChipInputEvent, MatChipList} from "@angular/material/chips";
import {MatAutocompleteSelectedEvent} from "@angular/material/autocomplete";


@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegisterFormComponent implements OnInit {

  @ViewChild('hobbyInput') hobbyInputRef: ElementRef<HTMLInputElement>
  @ViewChild('chipList') chipListRef: MatChipList

  minDate: Date
  maxDate: Date

  firstFormGroup: FormGroup
  secondFormGroup: FormGroup

  hidePassword: boolean = true

  colorsEyes = ['blue', 'green', 'brown']

  colorsHair = ['dark', 'blond', 'brown']

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

  hobbies: any = ['music', 'food']
  selectable = true;
  removable = true;

  filteredHobbies = ['1', 'asd', 'zxc', 'football']

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.initForms()
    this.setMinDateMaxDate()
    // TODO rewrite logic for this
    // this.hobbiesControl.statusChanges.subscribe(
    //   status => this.chipListRef.errorState = status === 'INVALID'
    // )
  }

  initForms(): void {
    this.firstFormGroup = this.fb.group({
      email: [null, [Validators.email, Validators.required]],
      password: [null, [Validators.minLength(8), Validators.required]]
    })
    this.secondFormGroup = this.fb.group({
      birthDate: [null, Validators.required],
      sex: [null, Validators.required],
      city: [null, Validators.required],
      purposeOfMeet: [null, Validators.required],
      sexualOrientation: [null, Validators.required],
      minHeight: [null, Validators.required],
      maxHeight: [null, Validators.required],
      bodyShape: [null, Validators.required],
      colorEyes: [null, Validators.required],
      colorHair: [null, Validators.required],
      hobbies: [null, Validators.required],
      creed: [null, Validators.required]
    })
  }

  done() {
    const data = {
      ...this.firstFormGroup.value,
      ...this.secondFormGroup.value
    }
    console.log(data)
  }

  setMinDateMaxDate() {
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth();
    const currentDay = new Date().getDate();
    this.minDate = new Date(currentYear - 200, currentMonth, currentDay);
    this.maxDate = new Date(currentYear - 18, currentMonth, currentDay);
  }

  addHobby(event: MatChipInputEvent) {
    const input = event.input
    const value = event.value.trim()

    if (value && this.hobbies.length < 10) {
      this.hobbies.push(value)
      this.hobbiesControl.setValue([...this.hobbies])
    }

    if (input) {
      input.value = ''
    }
  }

  removeHobby(hobby) {
    this.hobbies = [...this.hobbies.filter(h => h !== hobby)]
    this.hobbiesControl.setValue([...this.hobbies])
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    if (this.hobbies.length < 10) {
      this.hobbies.push(event.option.viewValue);
      this.hobbiesControl.setValue([...this.hobbies])
      this.hobbyInputRef.nativeElement.value = '';
    }
  }

  get colorEyesControl(): AbstractControl {
    return this.secondFormGroup.get('colorEyes')
  }

  get colorHairControl(): AbstractControl {
    return this.secondFormGroup.get('colorHair')
  }

  get hobbiesControl(): AbstractControl {
    return this.secondFormGroup.get('hobbies')
  }
}

type sex = 'MALE' | 'FEMALE'
