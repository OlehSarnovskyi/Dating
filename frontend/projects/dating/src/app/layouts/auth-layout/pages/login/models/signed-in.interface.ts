export interface ISignedIn {
  accessToken: string
  shortCode: string
  email: string
  userId: number
  iat: number
  /**
   * expired At timestamp
   */
  exp: number
}
