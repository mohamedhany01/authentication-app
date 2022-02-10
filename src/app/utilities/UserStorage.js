export class UserStorage {
  constructor() {
    this.KEY_NAME = "USER_DATA";
  }

  storeUserData(data) {
    localStorage.setItem(this.KEY_NAME, JSON.stringify(data));
  }
  deleteUserData() {
    localStorage.removeItem(this.KEY_NAME);
  }
  getUserData() {
    if (localStorage.getItem(this.KEY_NAME)) {
      return JSON.parse(localStorage.getItem(this.KEY_NAME));
    }

    return null;
  }

  hasData() {
    return this.getUserData();
  }
}
