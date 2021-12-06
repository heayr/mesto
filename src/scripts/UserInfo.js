export default class UserInfo {
  constructor({ userNameSelector, userSubtitleSelector }) {
    this._userNameSelector = document.querySelector(userNameSelector);
    this._userSubtitleSelector = document.querySelector(userSubtitleSelector);
  }

  getUserInfo() {
    return {
      title: this._userNameSelector.textContent,
      subtitle: this._userSubtitleSelector.textContent
    }
  }

  setUserInfo(data) {
    this._userNameSelector.textContent = data['input-name'];
    this._userSubtitleSelector.textContent = data['input-status'];
  }
}
