export default class UserInfo {
  constructor({ userName, userSubtitle }) {
    this._userName = document.querySelector(userName);
    this._userSubtitle = document.querySelector(userSubtitle);
  }

  getUserInfo() {
    return {
      title: this._userName.textContent,
      subtitle: this._userSubtitle.textContent
    }
  }

  setUserInfo(data) {
    this._userName.textContent = data['input-name'];
    this._userSubtitle.textContent = data['input-status'];
  }
}
