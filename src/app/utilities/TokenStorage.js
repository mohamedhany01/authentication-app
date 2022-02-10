export class TokenStorage {
  constructor() {
    this.KEY_NAME = "JWT_TOKEN";
  }

  storeJWTToken(token, prefix = "Bearer") {
    const prefixedToken = `${prefix} ${token}`;

    localStorage.setItem(this.KEY_NAME, prefixedToken);
  }
  deleteJWTToken() {
    localStorage.removeItem(this.KEY_NAME);
  }
  getJWTToken() {
    if (localStorage.getItem(this.KEY_NAME)) {
      return localStorage.getItem(this.KEY_NAME);
    }

    return null;
  }

  hasToken() {
    return this.getJWTToken();
  }
}
