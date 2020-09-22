import {ChangeDetectionStrategy, Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MatChipInputEvent, MatChipList} from "@angular/material/chips";
import {MatAutocompleteSelectedEvent} from "@angular/material/autocomplete";
import {
  BodyTypeEnum,
  ColorEyesEnum,
  ColorHairEnum,
  CreedEnum,
  CustomValidators,
  FormControlsService, PurposeOfMeetEnum, SexEnum, SexualOrientationEnum
} from "modules/index";
import {IUser} from "../../models/user";


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

  @Output() registerForm = new EventEmitter<IUser>()

  minDate: Date
  maxDate: Date

  authFormGroup: FormGroup
  myParametersFormGroup: FormGroup
  parametersForSearchFormGroup: FormGroup

  hidePassword: boolean = true

  sex = Object.values(SexEnum)
  purposeOfMeet = Object.values(PurposeOfMeetEnum)
  sexualOrientations = Object.values(SexualOrientationEnum)
  bodyTypes = Object.values(BodyTypeEnum)
  colorsEyes = Object.values(ColorEyesEnum)
  colorsHair = Object.values(ColorHairEnum)
  creed = Object.values(CreedEnum)

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

  myHobbies: any[] = ['music', 'food', 'sport', 'healthy lifestyle', 'work']
  hobbiesForSearch: any[] = ['alarm', 'mathematica', 'work', 'business', 'dance']

  selectable = true

  filteredHobbies = ['alarm', 'mathematica', 'work', 'business', 'dance', 'filteredHobbies']

  constructor(private fb: FormBuilder,
              public formControlsService: FormControlsService) {}

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
    this.myParametersFormGroup = this.fb.group({
      birthDate: [new Date('Tue Sep 10 2002 00:00:00 GMT+0300 (Eastern European Summer Time)'), Validators.required],
      sex: [null, Validators.required],
      cities: [[...this.myCities], Validators.required],
      purposeOfMeet: [null, Validators.required],
      sexualOrientation: [null, Validators.required],
      height: [180, [Validators.required, Validators.min(91), Validators.max(220)]],
      bodyType: [null, Validators.required],
      colorEyes: [null, Validators.required],
      colorHair: [null, Validators.required],
      hobbies: [[...this.myHobbies], [Validators.required, CustomValidators.minArrayLength(5)]],
      creed: [null, Validators.required]
    })
    this.parametersForSearchFormGroup = this.fb.group({
      ageFrom: [18, [Validators.required, Validators.min(18), Validators.max(56)]],
      ageTo: [25, [Validators.required, Validators.min(22), Validators.max(60)]],
      sex: [null, Validators.required],
      cities: [[...this.citiesForSearch], Validators.required],
      purposeOfMeet: [null, Validators.required],
      sexualOrientations: [null, Validators.required],
      minHeight: [160, [Validators.required, Validators.min(91), Validators.max(220)]],
      maxHeight: [180, [Validators.required, Validators.min(91), Validators.max(220)]],
      bodyTypes: [null, Validators.required],
      colorsEyes: [null, Validators.required],
      colorsHair: [null, Validators.required],
      hobbies: [[...this.hobbiesForSearch], [Validators.required, CustomValidators.minArrayLength(5)]],
      creed: [null, Validators.required]
    })
    this.authFormGroup = this.fb.group({
      email: ['asd@asd', [Validators.email, Validators.required]],
      password: ['paasdasdaasd', [Validators.minLength(8), Validators.required]]
    })
  }

  done() {
    const data: IUser = {
      myParameters: {
        ...this.myParametersFormGroup.value
      },
      parametersForSearch: {
        ...this.parametersForSearchFormGroup.value
      },
      auth: {
        ...this.authFormGroup.value,
      }
    }
    this.registerForm.emit(data)
  }

  // TODO !export in other folder!
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
