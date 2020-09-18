import {ChangeDetectionStrategy, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MatChipInputEvent, MatChipList} from "@angular/material/chips";
import {MatAutocompleteSelectedEvent} from "@angular/material/autocomplete";
import {CustomValidators, FormControlsService} from "modules/index";


@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [FormControlsService]
})
export class RegisterFormComponent implements OnInit {

  @ViewChild('chipListOfMyCities') chipListOfMyCitiesRef: MatChipList
  @ViewChild('myCityInput') myCityInputRef: ElementRef<HTMLInputElement>

  @ViewChild('chipListOfMyHobbies') chipListOfMyHobbiesRef: MatChipList
  @ViewChild('myHobbyInput') myHobbyInputRef: ElementRef<HTMLInputElement>

  @ViewChild('chipListOfCitiesForSearch') chipListOfCitiesForSearchRef: MatChipList
  @ViewChild('cityInputForSearch') cityInputForSearchRef: ElementRef<HTMLInputElement>

  @ViewChild('chipListOfHobbiesForSearch') chipListOfHobbiesForSearchRef: MatChipList
  @ViewChild('hobbyInputForSearch') hobbyInputForSearchRef: ElementRef<HTMLInputElement>

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

  myCities: any[] = ['Washington']
  citiesForSearch: any[] = ['West Virginia']

  myHobbies: any[] = ['music', 'food']
  hobbiesForSearch: any[] = ['alarm', 'mathematica']

  selectable = true

  filteredHobbies = ['1', 'asd', 'zxc', 'football']

  constructor(private fb: FormBuilder, public formControlsService: FormControlsService) {}

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
      birthDate: [new Date('Tue Sep 10 2002 00:00:00 GMT+0300 (Eastern European Summer Time)'), Validators.required],
      sex: ['male', Validators.required],
      cities: [[...this.myCities], [Validators.required, CustomValidators.minArrayLength(5)]],
      purposeOfMeet: ['sex', Validators.required],
      sexualOrientation: ['Bisexual', Validators.required],
      height: [180, [Validators.required, Validators.min(91), Validators.max(220)]],
      bodyType: ['Slim', Validators.required],
      colorEyes: ['blue', Validators.required],
      colorHair: ['dark', Validators.required],
      hobbies: [['music', 'food'], Validators.required],
      creed: ['Christian', Validators.required]
    })
    this.thirdFormGroup = this.fb.group({
      ageFrom: [18, [Validators.required, Validators.min(18), Validators.max(59)]],
      ageTo: [25, [Validators.required, Validators.min(18), Validators.max(60)]],
      sex: [['male'], Validators.required],
      cities: [['Nebraska', 'Texas'], Validators.required],
      purposeOfMeet: [['sex'], Validators.required],
      sexualOrientations: [['Bisexual'], Validators.required],
      minHeight: [180, [Validators.required, Validators.min(91), Validators.max(220)]],
      maxHeight: [180, [Validators.required, Validators.min(91), Validators.max(220)]],
      bodyTypes: [['Slim'], Validators.required],
      colorsEyes: [['blue'], Validators.required],
      colorsHair: [['dark'], Validators.required],
      hobbies: [['music', 'food'], Validators.required],
      creed: [['Christian'], Validators.required]
    })
  }

  done() {
    const data = {
      loginData: {
        ...this.firstFormGroup.value,
      },
      myData: {
        ...this.secondFormGroup.value
      },
      searchData: {
        ...this.thirdFormGroup.value
      }
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

  removeChip(arrName: string, chip: string, formControl: AbstractControl) {
    this[arrName] = [...this[arrName].filter(el => el !== chip)]
    formControl.setValue([...this[arrName]])
  }

  addChip(arrName: string, formControl: AbstractControl, {input, value}: MatChipInputEvent) {
    if (value.trim() && this[arrName].length < 10) {
      this[arrName] = [...this[arrName], value]
      formControl.setValue([...this[arrName]])
    }

    if (input) {
      input.value = ''
    }
  }

  selectChip(
    arrName: string,
    formControl: AbstractControl,
    event: MatAutocompleteSelectedEvent,
    elRefName: string
  ) {
    if (this[arrName].length < 10) {
      this[arrName] = [...this[arrName], event.option.viewValue]
      formControl.setValue([...this[arrName]])
      this[elRefName].nativeElement.value = ''
    }
  }
}

// TODO type move or remove
type sex = 'MALE' | 'FEMALE'
