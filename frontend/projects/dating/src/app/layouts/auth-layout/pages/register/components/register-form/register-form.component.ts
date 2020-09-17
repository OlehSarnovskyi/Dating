import {ChangeDetectionStrategy, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MatChipInputEvent, MatChipList} from "@angular/material/chips";
import {MatAutocompleteSelectedEvent} from "@angular/material/autocomplete";
import {FormControlsService} from "modules/index";


@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [FormControlsService]
})
export class RegisterFormComponent implements OnInit {

  @ViewChild('chipListOfCities') chipListOfCitiesRef: MatChipList
  @ViewChild('cityInput') cityInputRef: ElementRef<HTMLInputElement>

  @ViewChild('hobbyInput') hobbyInputRef: ElementRef<HTMLInputElement>
  @ViewChild('chipListOfHobbies') chipListOfHobbiesRef: MatChipList

  minDate: Date
  maxDate: Date

  firstFormGroup: FormGroup
  secondFormGroup: FormGroup
  thirdFormGroup: FormGroup

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

  cities: any[] = []

  hobbies: any[] = ['music', 'food']
  selectable = true

  filteredHobbies = ['1', 'asd', 'zxc', 'football']

  constructor(private fb: FormBuilder, private formControlsService: FormControlsService) {}

  ngOnInit() {
    this.initForms()
    this.setMinDateMaxDate()
    // TODO rewrite logic for this
    // for cities too
    // this.hobbiesSecondFormControl.statusChanges.subscribe(
    //   status => this.chipListOfHobbiesRef.errorState = status === 'INVALID'
    // )
  }

  initForms(): void {
    this.firstFormGroup = this.fb.group({
      email: ['asd@asd', [Validators.email, Validators.required]],
      password: ['paasdasdaasd', [Validators.minLength(8), Validators.required]]
    })
    this.secondFormGroup = this.fb.group({
      birthDate: ['Tue Sep 10 2002 00:00:00 GMT+0300 (Eastern European Summer Time)', Validators.required],
      sex: ['male', Validators.required],
      cities: [null, Validators.required],
      purposeOfMeet: ['sex', Validators.required],
      sexualOrientation: ['Bisexual', Validators.required],
      height: [180, Validators.required],
      bodyShape: ['Slim', Validators.required],
      colorEyes: ['blue', Validators.required],
      colorHair: ['dark', Validators.required],
      hobbies: [['music', 'food'], Validators.required],
      creed: ['Christian', Validators.required]
    })
    this.thirdFormGroup = this.fb.group({
      ageFrom: [18, Validators.required],
      ageTo: [25, Validators.required],
      sex: [['male'], Validators.required],
      cities: [['Nebraska', 'Texas'], Validators.required],
      purposeOfMeet: [['sex'], Validators.required],
      sexualOrientations: [['Bisexual'], Validators.required],
      minHeight: [180, Validators.required],
      maxHeight: [180, Validators.required],
      bodyShapes: [['Slim'], Validators.required],
      colorsEyes: [['blue'], Validators.required],
      colorsHair: [['dark'], Validators.required],
      hobbies: [['music', 'food'], Validators.required],
      creed: [['Christian'], Validators.required]
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

  addCity({input, value}: MatChipInputEvent) {
    if (value.trim() && this.cities.length < 10) {
      this.cities.push(value)
      this.citiesSecondFormControl.setValue([...this.cities])
    }

    if (input) {
      input.value = ''
    }
  }

  removeCity(city: any) {
    this.cities = [...this.cities.filter(c => c !== city)]
    this.citiesSecondFormControl.setValue([...this.cities])
  }

  selectedCity(event: MatAutocompleteSelectedEvent) {
    if (this.cities.length < 10) {
      this.cities.push(event.option.viewValue)
      this.citiesSecondFormControl.setValue([...this.cities])
      this.cityInputRef.nativeElement.value = ''
    }
  }

  addHobby({input, value}: MatChipInputEvent) {
    if (value.trim() && this.hobbies.length < 10) {
      this.hobbies.push(value)
      this.hobbiesSecondFormControl.setValue([...this.hobbies])
    }

    if (input) {
      input.value = ''
    }
  }

  removeHobby(hobby) {
    this.hobbies = [...this.hobbies.filter(h => h !== hobby)]
    this.hobbiesSecondFormControl.setValue([...this.hobbies])
  }

  selectedHobby(event: MatAutocompleteSelectedEvent): void {
    if (this.hobbies.length < 10) {
      this.hobbies.push(event.option.viewValue);
      this.hobbiesSecondFormControl.setValue([...this.hobbies])
      this.hobbyInputRef.nativeElement.value = '';
    }
  }

  get citiesSecondFormControl(): AbstractControl {
    return this.secondFormGroup.get('cities')
  }

  get hobbiesSecondFormControl(): AbstractControl {
    return this.secondFormGroup.get('hobbies')
  }

  asd() {
    console.log(this.thirdFormGroup.value)
  }

  asdTwo() {
    console.log(this.secondFormGroup)
  }
}

// TODO type move or remove
type sex = 'MALE' | 'FEMALE'
