import {AbstractControl, ValidatorFn} from "@angular/forms";

export class CustomValidators {
  static minArrayLength(minLength: number): ValidatorFn {
    return (control: AbstractControl): { [key: string]: boolean } => {
      if (control.value.length < minLength) {
        return {lessThanNeed: true}
      }
    }
  }
}
