import { Popup } from "./Popup.js"

export default class PopupWithForm extends Popup {
  constructor({ popupSelector, formSubmitHandler }) {
    super(popupSelector);
    this.formSubmitHandler = formSubmitHandler;
    this._popupForm = document.querySelector('.popup__form');

  }
  _getInputValues() {
    this._inputList = this._popupSelector.querySelectorAll('.popup__input');
    this._formValues = {};
    this._inputList.forEach(input =>
      this._formValues[input.name] = input.value);

    return this._formValues;
  }

  close() {
    super.close();
    this._popupForm.reset();
  }

  setEventListeners() {
    super.setEventListeners();
    this._popupSelector.addEventListener('submit', (e) => {
      e.preventDefault();
      this.formSubmitHandler(this._getInputValues());
      this._popupSelector.reset();
    })
  }
}
