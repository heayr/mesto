// import { onClickImg } from "./index.js";


export default class Card {
  constructor(data, handleCardClick, cardSelector) {
    this._title = data.title;
    this._link = data.link;
    this._cardSelector = cardSelector;
    this.handleCardClick = handleCardClick;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._cardSelector)
      .content
      .firstElementChild
      .cloneNode(true);
    return cardElement;
  }



  _likeButton(e) {
    e.target.classList.toggle('elements__cell-like_active');
  };

  _deleteCard(e) {
    e.target.closest('.elements__cell').remove();
  };

  _setEventListeners() {
    this._element.querySelector('.elements__delete-button').addEventListener('click', this._deleteCard);
    this._element.querySelector('.elements__cell-like').addEventListener('click', this._likeButton);
    this._element.querySelector('.elements__image').addEventListener('click', () => { this.handleCardClick(this._title, this._link); });
  }

  generateCard() {
    this._element = this._getTemplate();

    const cardElementImage = this._element.querySelector('.elements__image');
    const cardElementTitle = this._element.querySelector('.elements__cell-title');
    cardElementImage.setAttribute('src', this._link);
    cardElementImage.setAttribute('alt', this._title);
    cardElementTitle.textContent = this._title;
    this._setEventListeners();
    return this._element;
  }
}

