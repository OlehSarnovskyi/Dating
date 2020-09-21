import {
  SexType,
  PurposeOfMeetType,
  SexualOrientationType,
  BodyTypeType,
  ColorEyesType,
  ColorHairsType, CreedType
} from "modules/index";

// TODO export in other folder in future

export interface IMyParameters {
  birthDate: Date
  sex: SexType
  // TODO cities object in future maybe
  cities: string[]
  purposeOfMeet: PurposeOfMeetType
  sexualOrientation: SexualOrientationType
  height: number
  bodyType: BodyTypeType
  colorEyes: ColorEyesType
  colorHair: ColorHairsType
  // TODO enums ???
  hobbies: string[]
  creed: CreedType
}
