import {createFeatureSelector, createSelector} from "@ngrx/store";
import {IRegisterState, REGISTER_FEATURE_NAME} from "./register.reducer";

const getFeature = createFeatureSelector<IRegisterState>(REGISTER_FEATURE_NAME)

export const getLoading = createSelector(
  getFeature,
  state => state.loading
)

export const getLoaded = createSelector(
  getFeature,
  state => state.loaded
)

export const getShortCode = createSelector(
  getFeature,
  state => state.shortCode
)
