import {
  SexType,
  PurposeOfMeetType,
  SexualOrientationType,
  BodyTypeType,
  ColorEyesType,
  ColorHairsType, CreedType
} from "modules/index";

// TODO export in other folder in future

export interface IParametersForSearch {
  ageFrom: number
  ageTo: number
  sex: SexType[]
  // TODO cities object in future maybe
  cities: string[]
  purposeOfMeet: PurposeOfMeetType[]
  sexualOrientations: SexualOrientationType[]
  minHeight: number
  maxHeight: number
  bodyTypes: BodyTypeType[]
  colorsEyes: ColorEyesType[]
  colorsHair: ColorHairsType[]
  // TODO enums ???
  hobbies: string[]
  creed: CreedType[]
}
