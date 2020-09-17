import { Injectable } from '@angular/core';
import {FormGroup} from "@angular/forms";

@Injectable()
export class FormControlsService {

  constructor() { }

  getValueFromControl(formGroup: FormGroup, formControlName: string, index?: number): any {
    return index
      ? formGroup.value[formControlName][index]
      : formGroup.value[formControlName]
  }
}
