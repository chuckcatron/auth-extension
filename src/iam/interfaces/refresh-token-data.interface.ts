export interface RefreshTokenData {
  /**
   * The subject of the token. The value of this property is the user ID.
   * that is granted this token.
   */
  sub: number;
  /**
   * The ID of the refresh token.
   */
  refreshTokenId: string;
}
