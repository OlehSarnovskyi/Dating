// TODO export in other folder in future
import {ILoginForm} from "../../login";
import {IMyParameters} from "./my-parameters";
import {IParametersForSearch} from "./parameters-for-search";

export interface IUser {
  auth: ILoginForm
  myParameters: IMyParameters
  parametersForSearch: IParametersForSearch
}
