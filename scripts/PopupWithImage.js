import { Popup } from "./Popup.js"

export class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._popupImage = document.querySelector('.popup__img')
    this._popupText = document.querySelector('.popup__figcaption')
  }
  open(data) {
    this._popupImage.src = data.link;
    this._popupText.src = data.title;
    this._popupText.textContent = data.title;
    super.open();
    // super.setEventListeners();
  }
}
