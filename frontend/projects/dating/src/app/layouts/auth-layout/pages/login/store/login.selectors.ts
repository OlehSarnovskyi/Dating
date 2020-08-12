import {createFeatureSelector, createSelector} from "@ngrx/store";
import {ILoginState, LOGIN_FEATURE_NAME} from "..";

const getFeature = createFeatureSelector<ILoginState>(LOGIN_FEATURE_NAME)

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
