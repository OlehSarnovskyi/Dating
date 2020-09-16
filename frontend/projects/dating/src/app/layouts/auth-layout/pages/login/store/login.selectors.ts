import {createFeatureSelector, createSelector} from "@ngrx/store";
import {ILoginState, LOGIN_FEATURE_NAME} from "./login.reducer";

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

export const getAuthData = createSelector(
  getFeature,
  state => state.authData
);

export const getAccessToken = createSelector(
  getAuthData,
  state => state && state.accessToken
)

export const getIsAuth = createSelector(
  getAccessToken,
  accessToken => !!accessToken
)
