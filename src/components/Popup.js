export class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
    this._handleEscClose = this._handleEscClose.bind(this);
  }

  open() {
    this._popup.classList.add('popup_opened');
    document.addEventListener("keydown", this._handleEscClose);
    // точно, спасибо! в теории было, что не стоит делать разные функции/объекты/ссылки т.к. их не свяжешь
  }

  close() {
    this._popup.classList.remove('popup_opened');
    document.removeEventListener("keydown", this._handleEscClose);
  }

  _handleEscClose(evt) {
    if (evt.key === 'Escape') {
      this.close();
    }
  }

  setEventListeners() {
    this._popup.addEventListener("click", (evt) => {
      if (evt.target.classList.contains("popup_opened")) {
        this.close();
      }
      if (evt.target.classList.contains("popup__close")) {
        this.close();
      }
    });
  };
  // this._popupSelector.querySelector('.popup__close').addEventListener('click', (e) => this.close(e));
  // this._popupSelector.addEventListener('mousedown', (e) => this._handleEscClose(e));
  // document.addEventListener('keydown', (e) => this._handleEscClose(e));
  // };
}
